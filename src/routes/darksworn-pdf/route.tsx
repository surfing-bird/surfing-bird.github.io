import "@/pdf-styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { PDFLayout } from "@/components";
import Page1 from "../../pages/scion-darksworn-pages/Page1";

export const Route = createFileRoute("/darksworn-pdf")({
  component: DarkswornPDF,
});

function DarkswornPDF() {
  return (
    <div className="flex flex-col items-center">
      <PDFLayout>
        <Page1 />
      </PDFLayout>
    </div>
  );
}
