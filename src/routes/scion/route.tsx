import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { ManualLayout, Sidebar } from "@/components";
import { useIsMobile } from "@/hooks/useIsMobile";
import ClassSubclass from "../../scion-pages/1-Class-Subclass";
import BalanceEnweave from "../../scion-pages/2-Balance-Enweave";
import Maneuvers from "../../scion-pages/2-Maneuvers";
import Triggers from "../../scion-pages/3-Triggers";
import Signatures from "../../scion-pages/4-Signatures";
import ThreeHR from "../../scion-pages/5-ThreeHR";
import FiveHR from "../../scion-pages/6-FiveHR";
import Level2ArtAbilities from "../../scion-pages/8-Level2-ArtAbilities";
import Level2 from "../../scion-pages/7-Level2";
import Level3 from "../../scion-pages/9-Level3";
// import Kits from "../../scion-pages/Kits";
// import Changelog from "../../scion-pages/ChangeLog";

export const Route = createFileRoute("/scion")({
  component: Scion,
});

function Scion() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center">
      {!isMobile && <Sidebar />}
      <ManualLayout>
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
        {/* <Kits /> */}
        {/* <Changelog /> */}
      </ManualLayout>
    </div>
  );
}
