import clsx from "clsx";
import { useRouter } from "next/router";
import { Points, usePoints } from "../../lib/points";
import { format } from "date-fns";
import { TrackerSelector } from "../trackerSelector";
import { Loading } from "../Loading";

export default function TimeLineItem(props: Points) {
  const router = useRouter();
  const replace = (s: string) =>
    router.replace({
      query: {
        ...router.query,
        coords: s,
      },
    });
  const d = new Date(props.createdAt);
  return (
    <div
      onMouseOver={() => replace(`${props.lng},${props.lat}`)}
      role="button"
      className="grid items-start hover:border-l-4 px-5 hover:px-4  overflow-hidden border-base-content  grid-cols-[auto_auto_1fr] pb-10 gap-x-8 relative"
    >
      {/* <div className="border-r-4  border-base-100 absolute h-full left-[101px]"></div> */}
      <time className="leading-5 w-full  text-clip flex-col text-sm font-normal  text-gray-400 border-opacity-10 border-white dark:text-gray-500">
        <strong>{format(d, "d MMM Y")}</strong>
        <br />
        <span>{format(d, "hh:mm")}</span>
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
  const replace = (s: string) =>
    router.replace({
      query: {
        ...router.query,
        coords: s,
      },
    });

  const { data: points, isLoading } = usePoints(q.IMEI, q.days);

  return (
    <div className="p-4 hidden xl:block ">
      <TrackerSelector />
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
      <div className="relative">
        {isLoading && q.IMEI && (
          <div className="w-full h-[79vh] bg-opacity-20 flex absolute items-center rounded-t-lg justify-center  bg-black z-50">
            <Loading />
          </div>
        )}

        {points.length === 0 && !isLoading && (
          <div className="w-full h-[79vh]  flex absolute items-center rounded-t-lg justify-center  z-50">
            <label className="label-text">0 points found</label>
          </div>
        )}

        <div
          onMouseLeave={() => replace(``)}
          className="mt-4 h-[79vh] py-4 relative  rounded-t-lg   overflow-y-auto rounded bg-base-300"
        >
          {points.map((p) => (
            <TimeLineItem key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
