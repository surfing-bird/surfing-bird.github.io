import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { ManualLayout } from "@/components";
import Page1 from "../../pages/conduit-rebound-pages/Page1";
import Page2 from "../../pages/conduit-rebound-pages/Page2";

export const Route = createFileRoute("/conduit-rebound")({
  component: ConduitRebound,
});

function ConduitRebound() {
  return (
    <div className="flex flex-col items-center">
      <ManualLayout>
        <Page1 />
        <Page2 />
      </ManualLayout>
    </div>
  );
}
