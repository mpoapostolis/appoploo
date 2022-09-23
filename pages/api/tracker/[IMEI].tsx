import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../../lib/withSession";
import { createPoint, getPoints } from "../../../lib/points/api";

export default withSessionRoute(tracker);

async function tracker(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getPoints(req, res);

    case "POST":
      return createPoint(req, res);

    default:
      break;
  }
}
