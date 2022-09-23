import clsx from "clsx";
import { useRouter } from "next/router";
import { useTrackers } from "../../lib/tracker";
import tracker from "../../pages/api/tracker";

export function TrackerSelector() {
  const router = useRouter();
  const { data: trackers } = useTrackers();
  const q = router.query;

  const push = (obj: Record<string, any>) => {
    router.push({
      query: {
        ...q,
        ...obj,
      },
    });
  };

  return (
    <div
      className={clsx("grid  w-full gap-x-0.5", {
        "grid-cols-2": q.IMEI,
      })}
    >
      <select
        value={q.IMEI}
        onChange={(evt) => {
          const IMEI =
            +evt.currentTarget.value === -1 ? null : evt.currentTarget.value;

          push({
            IMEI,
            days: IMEI ? q.days : null,
          });
        }}
        className={clsx(
          "select  focus:outline-none rounded-r-none bg-base-300 rounded-l-lg w-full",
          { "rounded-r-xl": !q.IMEI }
        )}
      >
        <option value={-1}>All Vehicles</option>

        {trackers.map((t) => (
          <option key={t.IMEI} value={t.IMEI}>
            Device: {t.name ?? t.IMEI}
          </option>
        ))}
      </select>
      <select
        value={q.days}
        onChange={(evt) => {
          push({
            days: evt.currentTarget.value,
          });
        }}
        className={clsx(
          "select focus:outline-none bg-base-300 rounded-l-none rounded-r-lg w-full",
          {
            hidden: !q.IMEI,
          }
        )}
      >
        <option disabled selected>
          show days from last n days
        </option>
        <option value={1}>Last 1 day </option>
        <option value={2}>Last 2 days </option>
        <option value={3}>Last 3 days </option>
        <option value={7}>Last 1 week </option>
        <option value={14}>Last 2 weeks </option>
        <option value={21}>Last 3 weeks </option>
        <option value={30}>Last 1 month </option>
        <option value={60}>Last 2 months </option>
        <option value={90}>Last 3 months </option>
      </select>
    </div>
  );
}
