import { MenuItem } from "./menuItem";

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
