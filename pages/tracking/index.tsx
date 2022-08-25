import clsx from "clsx";
import { NextPage } from "next";
import { Map } from "../../components/map";
import { TimeLine } from "../../components/timeline";
import { withSessionSsr } from "../../lib/withSession";

const Home: NextPage = () => {
  return (
    <div
      className={clsx(
        "w-full h-screen overflow-hidden relative  grid xl:grid-cols-[1fr_2fr]"
      )}
    >
      <TimeLine />
      <Map />
    </div>
  );
};

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    if (user?.admin !== true) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {
        user: req.session.user,
      },
    };
  }
);

export default Home;
