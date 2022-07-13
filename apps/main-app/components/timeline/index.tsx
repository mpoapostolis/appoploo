export default function TimeLineItem() {
  return (
    <div
      role="button"
      className="grid items-start hover:border-l-4 px-5 hover:px-4  overflow-hidden hover:bg-white hover:bg-opacity-10 border-base-content  grid-cols-[auto_auto_1fr] pb-10 gap-x-8 relative"
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
        <h3 className="text-lg mb-2 font-semibold text-gray-900 dark:text-white">
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
    <div className="px-4 pt-4">
      <div className="grid grid-cols-2 gap-x-4">
        <select className="select w-full   select-bordered  mx-auto">
          <option disabled selected>
            Select Vehicle
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select w-full   select-bordered  mx-auto">
          <option disabled selected>
            Select Period
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div className="divider"></div>

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

        {/* <ol className="relative">
          <li className="border-l border-white border-opacity-30 pl-4 pb-6 ">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati voluptatibus voluptatum maxime libero numquam eaque quis eligendi quasi accusamus. Dignissimos odit necessitatibus incidunt voluptatum, perferendis reiciendis cupiditate amet dolorem!
            </p>
          </li>
          <li className="border-l border-white border-opacity-30 pl-4 pb-6 ">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Marketing UI design in Figma
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="border-l border-white border-opacity-30 pl-4 pb-6 ">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol> */}
      </div>
    </div>
  );
}
