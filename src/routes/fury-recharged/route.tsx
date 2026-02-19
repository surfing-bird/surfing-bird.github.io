import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { ManualLayout } from "@/components";
import Page1 from "../../pages/fury-recharged-pages/Page1";

export const Route = createFileRoute("/fury-recharged")({
  component: FuryRecharged,
});

function FuryRecharged() {
  return (
    <div className="flex flex-col items-center">
      <ManualLayout>
        <Page1 />
      </ManualLayout>
    </div>
  );
}
