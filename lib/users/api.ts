import myDb from "../../helpers/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import { getErrors } from "../yupError";
import bcrypt from "bcrypt";
const saltRounds = 10;

let schema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required("Password is required").min(6),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const body = await schema.validate(req.body).catch((err) => {
    return err;
  });
  const err = getErrors(body);
  if (err) return res.status(400).json(err);
  const { password, passwordConfirmation, ...rest } = body;
  const _password = await bcrypt.hash(password, saltRounds);
  const db = await myDb();
  const id = await db
    .collection("users")
    .insertOne({ ...rest, password: _password });
  req.session.user = {
    id: id.insertedId.toString(),
  };
  await req.session.save();
  res.status(201).send("ok");
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

  const db = await myDb();
  const user = await db
    .collection("users")
    .findOne({ userName: body.userName });
  const match = await bcrypt.compareSync(body?.password, user?.password);

  if (match && user?._id) {
    req.session.user = {
      id: user?._id.toString(),
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
