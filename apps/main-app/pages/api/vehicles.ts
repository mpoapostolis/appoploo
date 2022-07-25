import { NextApiRequest, NextApiResponse } from "next";
import { getVehicles } from "../../lib/vehicles";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(vehicles);

async function vehicles(req: NextApiRequest, res: NextApiResponse) {
  if (req.session?.user?.id !== 231)
    return res.status(401).json({ error: "Forbidden" });
  const vehicles = await getVehicles();
  res.status(200).json(vehicles);
}
