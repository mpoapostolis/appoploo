import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../../lib/withSession";
import { createDeviceTracker } from "../../../lib/tracker/api";

export default withSessionRoute(tracker);

async function tracker(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session?.user) return res.status(401).send("401 Unauthorized");
  switch (req.method) {
    case "POST":
      return createDeviceTracker(req, res);
    default:
      res.status(405).send("No method allowed");
      break;
  }
}
