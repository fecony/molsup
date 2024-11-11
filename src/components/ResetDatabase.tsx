import { DatabaseBackup as DatabaseBackupIcon } from "lucide-react";
import { resetDatabase } from "../lib/db";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ResetDatabase = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              resetDatabase();
            }}
          >
            <DatabaseBackupIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Reset database</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
