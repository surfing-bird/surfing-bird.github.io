import "@/pdf-styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { PDFLayout, Sidebar } from "@/components";
import Intro from "../../scion-pages-pdf/Intro";
import Cover from "../../scion-pages-pdf/Cover";
import Page1 from "../../scion-pages-pdf/Page1";
import Page2 from "../../scion-pages-pdf/Page2";
import Page3 from "../../scion-pages-pdf/Page3";
import Page4 from "../../scion-pages-pdf/Page4";
import Page5 from "../../scion-pages-pdf/Page5";
import Page6 from "../../scion-pages-pdf/Page6";
import Page7 from "../../scion-pages-pdf/Page7";
import Page8 from "../../scion-pages-pdf/Page8";
import Page9 from "../../scion-pages-pdf/Page9";
import Page10 from "../../scion-pages-pdf/Page10";
import Page11 from "../../scion-pages-pdf/Page11";
import Page12 from "../../scion-pages-pdf/Page12";
import Page13 from "../../scion-pages-pdf/Page13";
import Credits from "../../scion-pages-pdf/Credits";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Route = createFileRoute("/scion-full-pdf")({
  component: ScionFullPDF,
});

function ScionFullPDF() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center">
      {!isMobile && <Sidebar full />}
      <PDFLayout>
        <Cover />
        <Intro />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
        <Page13 />
        <Credits />
      </PDFLayout>
    </div>
  );
}
