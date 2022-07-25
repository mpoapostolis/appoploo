import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, type } = req.body;

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  switch (type) {
    case "login":
      req.session.user = {
        id: 230,
        admin: true,
      };
      await req.session.save();
      res.json({ ok: true });
      break;

    case "logout":
      await req.session.destroy();
      res.json({ ok: true });
      break;

    case "register":
      req.session.user = {
        id: 230,
        admin: true,
      };
      await req.session.save();
      res.json({ ok: true });

    default:
      break;
  }
}
