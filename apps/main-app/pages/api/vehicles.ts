import { NextApiRequest, NextApiResponse } from "next";
import { getVehicles } from "../../lib/vehicles";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const vehicles = await getVehicles();
  res.status(200).json(vehicles);
}
