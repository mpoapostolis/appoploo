import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../../lib/withSession";
import myDb from "../../../helpers/mongo";

export default withSessionRoute(vehicles);

async function vehicles(req: NextApiRequest, res: NextApiResponse) {
  const db = await myDb();
  const points = await db.collection("points").find().toArray();
  res.status(200).json(points);
}
