import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { ManualLayout } from "@/components";
import Page1 from "../../pages/shadow-unseen-pages/Page1";
import Page2 from "../../pages/shadow-unseen-pages/Page2";

export const Route = createFileRoute("/shadow-unseen")({
  component: ShadowUnseen,
});

function ShadowUnseen() {
  return (
    <div className="flex flex-col items-center">
      <ManualLayout>
        <Page1 />
        <Page2 />
      </ManualLayout>
    </div>
  );
}
