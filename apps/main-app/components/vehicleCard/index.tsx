import Link from "next/link";
import { Vehicle } from "../../lib/vehicles";

export function VehicleCard(props: Vehicle) {
  return (
    <>
      <Link
        href={`?q=${props.name}&lat=${props.latLng.lat}&lng=${props.latLng.lng}`}
      >
        <a>
          <li className="grid  gap-4 grid-cols-[4rem_1fr]">
            <div className="w-16 h-16 bg-black"></div>
            <div>
              <div className="font-bold text-xl">{props.name}</div>
              <div className="stat-desc">{props.model}</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </li>
        </a>
      </Link>
      <div className="divider"></div>
    </>
  );
}
