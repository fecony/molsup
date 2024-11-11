import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

interface LayoutProps {
  supplierList: React.ReactNode;
  catalogContent: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  supplierList,
  catalogContent,
}) => {
  return (
    <div className="grid h-screen grid-rows-[auto]">
      <div className="grid grid-rows-[1fr_2fr] gap-2 p-2 md:h-full md:grid-cols-[1fr_2fr] md:grid-rows-none md:overflow-visible">
        <ScrollArea className="overflow-y-auto">{supplierList}</ScrollArea>
        <div className="h-full space-y-4 overflow-y-auto rounded-lg border border-secondary-neutral bg-secondary-white p-4 shadow">
          {catalogContent}
        </div>
      </div>
    </div>
  );
};

export default Layout;
