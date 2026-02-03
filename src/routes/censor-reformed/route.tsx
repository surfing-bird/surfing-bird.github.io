import "@/styles.css";
import { ManualLayout } from "@/components";
import Page1 from "../../pages/censor-reformed-pages/Page1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/censor-reformed")({
  component: CensorReformed,
});

function CensorReformed() {
  return (
    <div className="flex flex-col items-center">
      <ManualLayout>
        <Page1 />
      </ManualLayout>
    </div>
  );
}
