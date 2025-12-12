import "@/pdf-styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { PDFLayout } from "@/components";
import Page1 from "../../scion-pages-pdf/Page1";
import Page2 from "../../scion-pages-pdf/Page2";
import Page3 from "../../scion-pages-pdf/Page3";
import Page4 from "../../scion-pages-pdf/Page4";
import Page5 from "../../scion-pages-pdf/Page5";

export const Route = createFileRoute("/scion-pdf")({
  component: ScionPDF,
});

function ScionPDF() {
  return (
    <div className="flex flex-col items-center">
      <PDFLayout>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </PDFLayout>
    </div>
  );
}
