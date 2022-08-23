export default function TimeLineItem() {
  return (
    <div
      role="button"
      className="grid items-start hover:border-l-4 px-5 hover:px-4  overflow-hidden border-base-content  grid-cols-[auto_auto_1fr] pb-10 gap-x-8 relative"
    >
      {/* <div className="border-r-4  border-base-100 absolute h-full left-[101px]"></div> */}
      <time className="leading-5 w-full  text-clip flex-col text-sm font-normal  text-gray-400 border-opacity-10 border-white dark:text-gray-500">
        <strong>12/01/22</strong>
        <br />
        <span>12:00</span>
      </time>

      <div className="relative">
        <img
          className="p-2 bg-base-100  z-50 rounded-full h-10 w-10"
          src="https://s2.svgbox.net/materialui.svg?ic=warning&color=888"
          alt=""
        />
        <div className="h-screen left-4 border-base-100 z-40  border-r-4 absolute "></div>
      </div>
      <div>
        <h3 className="text-lg mb-2 font-semibold text-base-content dark:text-white">
          Start
        </h3>
        <p className="  text-base font-normal text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        </p>
      </div>
    </div>
  );
}

export function TimeLine() {
  return (
    <div className="px-4 pt-4 xl:block hidden ">
      <div className="grid grid-cols-2 w-full gap-x-1">
        <select className="select focus:outline-none bg-base-300 rounded-none w-full">
          <option disabled selected>
            Select Vehicle
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select focus:outline-none bg-base-300 rounded-none w-full">
          <option disabled selected>
            show routes from last n days
          </option>
          <option>Last 1 day routes</option>
          <option>Last 2 days routes</option>
          <option>Last 3 days routes</option>
          <option>Last 1 week routes</option>
          <option>Last 2 weeks routes</option>
          <option>Last 3 weeks routes</option>
          <option>Last 1 month routes</option>
          <option>Last 2 months routes</option>
          <option>Last 3 months routes</option>
        </select>
      </div>

      <div className="stats rounded-none mt-4 bg-base-300">
        <div className="stat place-items-center">
          <div className="stat-title">Speed</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Fuel</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Distance</div>
          <div className="stat-value"> 1,200km</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>
      </div>

      <div
        style={{
          height: "calc(100vh - 120px)",
        }}
        className="mt-4 py-4 h-full  overflow-auto rounded bg-base-300   "
      >
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
      </div>
    </div>
  );
}
