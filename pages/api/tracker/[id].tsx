import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../../lib/withSession";
import myDb from "../../../helpers/mongo";
import { subDays } from "date-fns";

export default withSessionRoute(vehicles);

async function vehicles(req: NextApiRequest, res: NextApiResponse) {
  const db = await myDb();
  const d = new Date();
  const above = subDays(d, Number(req.query.routes)).getTime();
  console.log(above);
  const points = await db
    .collection("points")
    .find({
      time: { $gt: above },
    })
    .toArray();
  res.status(200).json(points);
}
