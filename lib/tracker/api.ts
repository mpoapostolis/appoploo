import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import { surreal } from "../surreal";
import { getErrors } from "../yupError";

let schema = yup.object().shape({
  userId: yup.string().required(),
  IMEI: yup.string().required(),
});

export async function createDeviceTracker(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = await schema.validate(req.body);
  const err = getErrors(body);
  if (err) return res.status(400).json(err);
  const resp = await surreal
    .create(`trackers`)
    .set({ ...body, userId: body.userId });
  res.status(201).json(resp);
}

export async function getTrackers(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user) return res.status(401).send("401 Unauthorized");
  const isAdmin = user.admin;
  const resp = await surreal
    .select(isAdmin ? ["userId.userName as owner", "*"] : "*")
    .from(`trackers`)
    .where(isAdmin ? {} : { userId: user.id });

  res.status(200).json(resp?.result);
}
