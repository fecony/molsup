import { Link } from "react-router-dom";
import molportLogo from "../assets/molport.svg";
import { Container as ContainerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResetDatabase } from "@/components/ResetDatabase";

export const Navbar = () => {
  return (
    <nav className="flex w-full flex-row items-center justify-center py-2 md:py-4">
      <div className="flex w-full flex-col items-center justify-start bg-transparent">
        <div className="w-[95%] max-w-5xl xl:w-full">
          <div className="group flex flex-row items-center justify-between rounded-lg border-2 border-secondary-light px-2 py-2 backdrop-blur-xl transition-all">
            <Link
              className="flex flex-row items-center justify-start gap-1"
              to="/"
            >
              <div className="h-10 transition-all">
                <img
                  className="h-full w-full p-2.5"
                  alt="Molport logo"
                  fetchPriority="high"
                  decoding="async"
                  data-nimg="fill"
                  src={molportLogo}
                />
              </div>
            </Link>

            <div className="flex flex-row items-center justify-end gap-2">
              <Link to="/supplier/create" rel="noreferrer noopener">
                <Button variant="primary">
                  <ContainerIcon size={16} />
                  Add supplier
                </Button>
              </Link>

              <ResetDatabase />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
