import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const BackButton = () => (
  <Button size="sm" asChild variant="ghost">
    <Link to="/">
      <ChevronLeft />
      Back to suppliers
    </Link>
  </Button>
);
