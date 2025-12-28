import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { ManualLayout } from "@/components";
import Page1 from "../../pages/conduit-untethered-pages/Page1";
// import Page2 from "../../conduit-untethered-pages/Page2";

export const Route = createFileRoute("/conduit-untethered")({
  component: ConduitUntethered,
});

function ConduitUntethered() {
  return (
    <div className="flex flex-col items-center">
      <ManualLayout>
        <Page1 />
        {/* <Page2 /> */}
      </ManualLayout>
    </div>
  );
}
