export function VehicleCard() {
  return (
    <li className="grid gap-4 grid-cols-[4rem_1fr]">
      <div className="w-16 h-16 bg-black"></div>
      <div>
        <div className="font-bold text-xl">Posidonas</div>
        <div className="stat-desc">model-b</div>
        <div className="stat-desc">21% more than last month</div>
      </div>
    </li>
  );
}
