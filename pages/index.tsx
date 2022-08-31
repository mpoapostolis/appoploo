import { GetServerSideProps } from "next";
import axios from "axios";
import { withSessionSsr } from "../lib/withSession";

export default function Page() {
  return null;
}

export const getServerSideProps: GetServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    let destination = "/login";
    if (user?.admin) destination = "/admin";
    if (user) destination = "/tracking";
    return {
      redirect: {
        destination: "/tracking",
        permanent: false,
      },
    };
  }
);
