import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
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
      console.log(`redirect`);
      res.redirect("/login");
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
