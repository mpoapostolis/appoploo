import { GetServerSideProps } from "next";
import axios from "axios";
import { withSessionSsr } from "../lib/withSession";

export default function Page() {
  const login = () =>
    axios.post("/api/auth", {
      username: "admin",
      password: "admin",
      type: "login",
    });
  return (
    <>
      <div className="navbar bg-base-100">
        <button onClick={login} className="btn">
          login
        </button>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    return {
      redirect: {
        destination: user?.id ? "/tracking" : "/login",
        permanent: false,
      },
    };
  }
);
