import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />

      <section className="h-full overflow-hidden pb-4">
        <div className="flex h-full w-full flex-col items-center justify-start bg-transparent">
          <div className="h-full w-[95%] max-w-5xl xl:w-full">
            <div className="flex h-full flex-col rounded-lg border-2 border-secondary-neutral bg-secondary-light transition-all">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
