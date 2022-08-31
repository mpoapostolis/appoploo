import clsx from "clsx";
import { useRouter } from "next/router";

export default function VehicleSelector() {
  const router = useRouter();
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
  );
}
