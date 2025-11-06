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
import Kits from "../../scion-pages-pdf/Kits";
import Changelog from "../../scion-pages-pdf/ChangeLog";

export const Route = createFileRoute("/scion-pdf")({
  component: ScionPDF,
});

function ScionPDF() {
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
        <Kits />
        <Changelog />
      </PDFLayout>
    </div>
  );
}

