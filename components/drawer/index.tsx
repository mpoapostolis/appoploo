import axios from "axios";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

function MenuItem(props: { src: string; goTo: string; className?: string }) {
  const router = useRouter();
  const isActive = router.pathname === props.goTo;
  const iconColor = isActive ? "ddd" : "888";
  return (
    <Link href={props.goTo}>
      <a
        className={clsx(
          "w-12 md:w-full items-center h-12  justify-center flex",
          props.className,

          {
            "bg-base-100 ": isActive,
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
    <div className="border-base-100 sticky  top-0 z-50 flex md:flex-col bg-base-200  xs:w-full md:w-12 h-12 md:pt-2 md:h-screen">
      <MenuItem
        src="https://s2.svgbox.net/illlustrations.svg?ic=whale"
        goTo="/"
      />

      <div className=" md:mb-auto mx-auto md:w-full" />
      <MenuItem
        className="lg:hidden"
        src="https://s2.svgbox.net/materialui.svg?ic=navigation"
        goTo="/tracking"
      />

      <MenuItem
        className="lg:hidden"
        src="https://s2.svgbox.net/materialui.svg?ic=notifications"
        goTo="/tracking/notifications"
      />

      <div className="divider md:mr-auto md:w-full md:mt-auto" />

      <MenuItem
        src="https://s2.svgbox.net/materialui.svg?ic=settings"
        goTo="/tracking/settings"
      />
      <MenuItem
        src="https://s2.svgbox.net/materialui.svg?ic=account_circle"
        goTo="/tracking/account"
      />
      <form method="POST" action="/api/auth?type=logout">
        <button
          type="submit"
          className="w-12 md:w-full items-center h-12  justify-center flex"
        >
          <img
            src={`https://s2.svgbox.net/materialui.svg?ic=logout&color=888`}
            alt=""
          />
        </button>
      </form>
    </div>
  );
}
