import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { ManualLayout } from "@/components";
import Page1 from "../../pages/troubadour-reprise-pages/Page1";
import Page2 from "../../pages/troubadour-reprise-pages/Page2";

export const Route = createFileRoute("/troubadour-reprise")({
  component: TroubadourReprise,
});

function TroubadourReprise() {
  return (
    <div className="flex flex-col items-center">
      <ManualLayout>
        <Page1 />
        <Page2 />
      </ManualLayout>
    </div>
  );
}
