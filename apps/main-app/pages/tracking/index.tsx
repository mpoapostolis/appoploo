import { NextPage } from "next";
import { Map } from "../../components/map";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-full bg-base-300 flex">
      <Map />
    </div>
  );
};

export default Home;
