import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function MenuItem(props: { src: string; goTo: string; className?: string }) {
  const router = useRouter();
  const isActive = router.pathname === props.goTo;
  const iconColor = isActive ? "eee" : "888";
  console.log(router.pathname, props.goTo);
  return (
    <Link href={props.goTo}>
      <a
        className={clsx(
          "w-full items-center h-12 justify-center flex",
          props.className,

          {
            "bg-white bg-opacity-5 border-y border-base-100": isActive,
          }
        )}
      >
        <img src={`${props.src}&color=${iconColor}`} alt="" />
      </a>
    </Link>
  );
}

export function Drawer() {
  return (
    <div className=" border-r  shadow border-base-100    flex flex-col bg-base-300  w-12 pt-2">
      <Link href="/">
        <a className="w-full h-12 rotate-90  items-center   justify-center flex">
          <img src={`/logo.png`} alt="" />
        </a>
      </Link>
      <div className="divider mb-auto" />
      <MenuItem
        src="https://s2.svgbox.net/materialui.svg?ic=navigation"
        goTo="/"
      />

      <MenuItem
        src="https://s2.svgbox.net/materialui.svg?ic=notifications"
        goTo="/notifications"
      />

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
