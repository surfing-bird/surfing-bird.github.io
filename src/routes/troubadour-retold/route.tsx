import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { ManualLayout } from "@/components";
import Page1 from "../../pages/troubadour-retold-pages/Page1";
import Page2 from "../../pages/troubadour-retold-pages/Page2";

export const Route = createFileRoute("/troubadour-retold")({
  component: TroubadourRetold,
});

function TroubadourRetold() {
  return (
    <div className="flex flex-col items-center">
      <ManualLayout>
        <Page1 />
        <Page2 />
      </ManualLayout>
    </div>
  );
}
