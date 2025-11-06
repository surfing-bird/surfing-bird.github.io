import "@/pdf-styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { PDFLayout } from "@/components";
import ClassSubclass from "../../scion-pages-pdf/1-Class-Subclass";
import BalanceEnweave from "../../scion-pages-pdf/2-Balance-Enweave";
import Maneuvers from "../../scion-pages-pdf/2-Maneuvers";
import Triggers from "../../scion-pages-pdf/3-Triggers";
import Signatures from "../../scion-pages-pdf/4-Signatures";
import ThreeHR from "../../scion-pages-pdf/5-ThreeHR";
import FiveHR from "../../scion-pages-pdf/6-FiveHR";
import Level2 from "../../scion-pages-pdf/7-Level2";
import Level2ArtAbilities from "../../scion-pages-pdf/8-Level2-ArtAbilities";
import Level3 from "../../scion-pages-pdf/9-Level3";
import Level4 from "../../scion-pages-pdf/10-Level4";
import Level5 from "../../scion-pages-pdf/11-Level5";
import NineHR from "../../scion-pages-pdf/11-NineHR";
import Level6 from "../../scion-pages-pdf/12-Level6";
import Level7 from "../../scion-pages-pdf/13-Level7";
import Level8 from "../../scion-pages-pdf/15-Level8";
import Level8ElevenHR from "../../scion-pages-pdf/16-Level8-ElevenHR";
import Level9 from "../../scion-pages-pdf/17-Level9";
import Kits from "../../scion-pages-pdf/Kits";
import Changelog from "../../scion-pages-pdf/ChangeLog";

export const Route = createFileRoute("/scion-full-pdf")({
  component: ScionFullPDF,
});

function ScionFullPDF() {
  return (
    <div className="flex flex-col items-center">
      <PDFLayout>
        <ClassSubclass />
        <BalanceEnweave />
        <Maneuvers />
        <Triggers />
        <Signatures />
        <ThreeHR />
        <FiveHR />
        <Level2 />
        <Level2ArtAbilities />
        <Level3 />
        <Level4 />
        <Level5 />
        <NineHR />
        <Level6 />
        <Level7 />
        <Level8 />
        <Level8ElevenHR />
        <Level9 />
        <Kits />
        <Changelog />
      </PDFLayout>
    </div>
  );
}
