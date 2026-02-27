import "@/styles.css";
import { ManualLayout } from "@/components";
import { createFileRoute } from "@tanstack/react-router";
import Page1 from "../../pages/alternate-tests-pages/Page1";
// import Page2 from "../../pages/alternate-tests-pages/Page2";

export const Route = createFileRoute("/alternate-tests")({
  component: AlternateTests,
});

function AlternateTests() {
  return (
    <div className="flex flex-col items-center">
      <ManualLayout>
        <Page1 />
        {/* <Page2 /> */}
      </ManualLayout>
    </div>
  );
}
