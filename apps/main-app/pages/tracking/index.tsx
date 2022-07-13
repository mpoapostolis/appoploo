import clsx from "clsx";
import { NextPage } from "next";
import { Map } from "../../components/map";
import { TimeLine } from "../../components/timeline";

const Home: NextPage = () => {
  return (
    <div
      className={clsx(
        "w-full relative h-screen overflow-hidden grid grid-cols-[25vw_1fr]"
      )}
    >
      <TimeLine />
      <Map />
    </div>
  );
};

export default Home;
