import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { ManualLayout } from "@/components";
import Changelog from "@/pages/scion-pages/ChangeLog";

export const Route = createFileRoute("/scion-changelog")({
  component: ScionChangelog,
});

function ScionChangelog() {
  return (
    <div className="flex flex-col items-center">
      <ManualLayout>
        <Changelog />
      </ManualLayout>
    </div>
  );
}
