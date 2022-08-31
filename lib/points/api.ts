import myDb from "../../helpers/mongo";
import { subDays } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";

export async function getPoints(req: NextApiRequest, res: NextApiResponse) {
  const db = await myDb();
  const d = new Date();
  const above = subDays(d, Number(req.query.routes)).getTime();
  const points = await db
    .collection("points")
    .find({
      time: { $gt: above },
    })
    .toArray();
  res.status(200).json(points);
}
