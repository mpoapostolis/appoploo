import { NextPage } from "next";
import { Map } from "../components/map";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-full bg-base-300 flex">
      <Map />
      <div className="absolute z-50">
        <div className="dropdown w-full">
          <label tabIndex={0} className="btn rounded-none w-full">
            Select vechicle
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content rounded-none menu bg-base-300 p-2 shadow w-full"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
