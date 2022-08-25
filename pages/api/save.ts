import { NextApiRequest, NextApiResponse } from "next";
import { getVehicles } from "../../lib/vehicles";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(vehicles);

async function vehicles(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.status(200).json({});
}
