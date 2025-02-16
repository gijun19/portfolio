import { Moon, Sun } from "lucide-react";
import { Outlet } from "react-router";

export default function PageLayout() {
  return (
    <div
      id="page"
      className="bg-stone-50 fixed left-0 top-0 w-full h-full overflow-hidden whitespace-nowrap text-stone-600"
    >
      <div
        id="background"
        className="fixed left-(--padding) top-(--padding) right-(--padding) bottom-(--padding) border border-solid border-stone-400"
      ></div>
      <header id="site-header"></header>
      <div
        id="copyright"
        className="fixed z-10 left-(--padding)"
        style={{
          bottom: "calc(var(--padding) * .5 - .5em)",
        }}
      >
        <p className="font-bold">© Daniel Park</p>
      </div>
      <div
        id="theme"
        className="flex flex-row fixed z-10 right-(--padding) whitespace-nowrap gap-1.5 align-middle"
        style={{ top: "calc(var(--padding) * .5 - 1em)" }}
      >
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-bold shadow-sm hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300 ring-1 ring-inset ring-stone-300"
        >
          <Sun className="-ml-0.5 size-5" />
          Light
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-bold shadow-sm hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300 ring-1 ring-inset ring-stone-300"
        >
          <Moon className="-ml-0.5 size-5" />
          Dark
        </button>
      </div>
      <main id="page-content">
        <Outlet />
      </main>
    </div>
  );
}
