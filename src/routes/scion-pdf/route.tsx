import "@/pdf-styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { PDFLayout } from "@/components";
import Page1 from "../../pages/scion-pages-pdf/Page1";
import Page2 from "../../pages/scion-pages-pdf/Page2";
import Page3 from "../../pages/scion-pages-pdf/Page3";
import Page4 from "../../pages/scion-pages-pdf/Page4";
import Page5 from "../../pages/scion-pages-pdf/Page5";
import Page6 from "../../pages/scion-pages-pdf/Page6";
import Cover from "../../pages/scion-pages-pdf/Cover";
import Intro from "../../pages/scion-pages-pdf/Intro";
import Credits from "../../pages/scion-pages-pdf/Credits";

export const Route = createFileRoute("/scion-pdf")({
  component: ScionPDF,
});

function ScionPDF() {
  return (
    <div className="flex flex-col items-center">
      <PDFLayout>
        <Cover />
        <Intro />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 hideLevel4 />
        <Credits />
      </PDFLayout>
    </div>
  );
}
