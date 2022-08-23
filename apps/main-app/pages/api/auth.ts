import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  switch (req.query.type) {
    case "login":
      req.session.user = {
        id: 230,
        admin: true,
      };
      await req.session.save();
      res.redirect(307, "/tracking");

      break;

    case "logout":
      await req.session.destroy();
      res.writeHead(302, { Location: "/login" }).end();
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
