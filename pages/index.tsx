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
    if (user) destination = "/tracking";
    if (user?.admin) destination = "/admin";
    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }
);
