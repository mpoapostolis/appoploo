import { ReactNode } from "react";
import { Drawer } from "../drawer";
import { Map } from "../map";

export function Layout(props: { children: ReactNode }) {
  return (
    <div className="flex">
      <Drawer />
      <Map>{props.children}</Map>
    </div>
  );
}
