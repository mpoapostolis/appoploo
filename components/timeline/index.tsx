import clsx from "clsx";
import { useRouter } from "next/router";
import { Points, usePoints } from "../../lib/points";
import { format } from "date-fns";

export default function TimeLineItem(props: Points) {
  return (
    <div
      role="button"
      className="grid items-start hover:border-l-4 px-5 hover:px-4  overflow-hidden border-base-content  grid-cols-[auto_auto_1fr] pb-10 gap-x-8 relative"
    >
      {/* <div className="border-r-4  border-base-100 absolute h-full left-[101px]"></div> */}
      <time className="leading-5 w-full  text-clip flex-col text-sm font-normal  text-gray-400 border-opacity-10 border-white dark:text-gray-500">
        <strong>{format(props.time, "dd/mm/yy")}</strong>
        <br />
        <span>{format(props.time, "hh:mm")}</span>
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
          {props.event}
        </h3>
        <p className="  text-base font-normal text-gray-500 dark:text-gray-400">
          {props.desc}
        </p>
      </div>
    </div>
  );
}

export function TimeLine() {
  const router = useRouter();
  const q = { ...router.query };
  const push = (obj: Record<string, any>) => {
    router.push({
      query: {
        ...q,
        ...obj,
      },
    });
  };
  const { data: points } = usePoints(q.id);

  return (
    <div className="p-4 hidden xl:block ">
      <div className="grid grid-cols-2  w-full gap-x-0.5">
        <select
          value={q.id}
          onChange={(evt) => {
            const id =
              +evt.currentTarget.value === -1 ? null : evt.currentTarget.value;

            push({
              id,
              routes: id ? q.routes : null,
            });
          }}
          className={clsx(
            "select  focus:outline-none rounded-r-none bg-base-300 rounded-l-lg w-full",
            { "rounded-r-xl": !q.id }
          )}
        >
          <option value={-1}>All Vehicles</option>
          <option value={1}>Han Solo</option>
          <option value={2}>Greedo</option>
        </select>
        <select
          value={q.routes}
          onChange={(evt) => {
            push({
              routes: evt.currentTarget.value,
            });
          }}
          className={clsx(
            "select focus:outline-none bg-base-300 rounded-l-none rounded-r-lg w-full",
            {
              hidden: !q.id,
            }
          )}
        >
          <option disabled selected>
            show routes from last n days
          </option>
          <option value={1}>Last 1 day routes</option>
          <option value={2}>Last 2 days routes</option>
          <option value={3}>Last 3 days routes</option>
          <option value={7}>Last 1 week routes</option>
          <option value={14}>Last 2 weeks routes</option>
          <option value={21}>Last 3 weeks routes</option>
          <option value={30}>Last 1 month routes</option>
          <option value={60}>Last 2 months routes</option>
          <option value={90}>Last 3 months routes</option>
        </select>
      </div>

      <div className="stats rounded-lg mt-4 bg-base-300">
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

      <div className="mt-4 h-[79vh] py-4  rounded-t-lg   overflow-y-auto rounded bg-base-300">
        {points.map((p) => (
          <TimeLineItem key={p._id} {...p} />
        ))}
      </div>
    </div>
  );
}
