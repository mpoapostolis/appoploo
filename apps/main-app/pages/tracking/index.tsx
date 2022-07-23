import clsx from "clsx";
import { NextPage } from "next";
import { Map } from "../../components/map";
import { TimeLine } from "../../components/timeline";

const Home: NextPage = () => {
  return (
    <div
      className={clsx(
        "w-full relative h-screen overflow-hidden grid xl:grid-cols-[1fr_2fr]"
      )}
    >
      <TimeLine />
      <Map />
    </div>
  );
};

export default Home;
