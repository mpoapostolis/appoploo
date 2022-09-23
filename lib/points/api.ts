import { subDays } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";
import { surreal } from "../surreal";
import * as yup from "yup";

export async function getPoints(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user) return res.status(401).send("401 Unauthorized");

  const points = await surreal.select("*").from("points").where({
    userId: user.id,
    IMEI: req.query.IMEI,
  });
  res.status(200).json(points?.result);
}

let schema = yup.object().shape({
  lat: yup.number().required(),
  lng: yup.number().required(),
});

export async function createPoint(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user) return res.status(401).send("401 Unauthorized");
  const body = await schema.validate(req.body);

  const points = await surreal
    .create("points")
    .set({ ...body, IMEI: req.query.IMEI, userId: user.id });
  res.status(200).json(points?.result);
}
