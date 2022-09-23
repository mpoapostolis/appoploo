import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import { getErrors } from "../yupError";
import bcrypt from "bcrypt";
import { surreal } from "../surreal";
import { User } from "./types";
const saltRounds = 10;

let schema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required("Password is required").min(6),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const body = await schema.validate(req.body).catch((err) => {
    return err;
  });
  const err = getErrors(body);
  if (err) return res.status(400).json(err);
  const { password, passwordConfirmation, ...rest } = body;
  const _password = await bcrypt.hash(password, saltRounds);

  await surreal
    .create<User>(`users:${body.userName}`)
    .set({ ...rest, password: _password })
    .then(async (user) => {
      const id = user?.result?.at(0)?.id;
      if (!id) throw "User not created";
      req.session.user = {
        id: id,
      };
      await req.session.save();
      res.status(201).send("ok");
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
}

let loginSchema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required("Password is required"),
});

export async function login(req: NextApiRequest, res: NextApiResponse) {
  const body = await loginSchema.validate(req.body).catch((err) => {
    return err;
  });
  const err = getErrors(body);
  if (err) return res.status(400).json(err);

  const user = await surreal
    .select<User>("*")
    .from(`users:${body.userName}`)
    .where();
  if (user?.result?.length == 0)
    return res.status(400).json({ message: "User not found" });
  const u = user?.result?.at(0) as User;

  const match = await bcrypt.compareSync(body?.password, u?.password ?? "");
  if (match && u?.id) {
    req.session.user = {
      admin: u?.admin,
      id: u?.id,
    };
    await req.session.save();
    res.status(200).send("ok");
  } else {
    return res.status(400).json({ msg: `password or username incorrect` });
  }
}

export async function logout(req: NextApiRequest, res: NextApiResponse) {
  await req.session.destroy();
  return res.writeHead(302, { Location: "/login" }).end();
}

export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session?.user?.admin)
    return res.status(401).send("401 Unauthorized");
  const results = await surreal
    .select(["id", "userName"])
    .from("users")
    .where({});
  res.status(200).json(results?.result);
}
