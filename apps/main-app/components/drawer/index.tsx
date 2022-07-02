import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

function MenuItem(props: { src: string; goTo: string; className?: string }) {
  const router = useRouter();
  const isActive = router.pathname === props.goTo ? "55a" : "888";
  console.log(router.pathname, props.goTo);
  return (
    <Link href={props.goTo}>
      <a
        className={clsx(
          "w-full items-center h-16 justify-center flex",
          props.className
        )}
      >
        <img src={`${props.src}&color=${isActive}`} alt="" />
      </a>
    </Link>
  );
}

export function Drawer() {
  return (
    <div className=" border-r shadow border-base-100 flex flex-col bg-base-300  w-16 py-4">
      <Link href="/">
        <a className="w-full h-16 rotate-90  items-center   justify-center flex">
          <img src={`/logo.png`} alt="" />
        </a>
      </Link>
      <div className="divider mb-auto" />

      <MenuItem
        className="rotate-45"
        src="https://s2.svgbox.net/materialui.svg?ic=navigation"
        goTo="/"
      />

      <MenuItem src="https://s2.svgbox.net/materialui.svg?ic=map" goTo="/map" />

      <div className="divider mt-auto" />

      <MenuItem
        src="https://s2.svgbox.net/materialui.svg?ic=settings"
        goTo="/settings"
      />
      <MenuItem
        src="https://s2.svgbox.net/materialui.svg?ic=account_circle"
        goTo="/account"
      />
    </div>
  );
}
