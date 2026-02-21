import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { ManualLayout, Sidebar } from "@/components";
import { useIsMobile } from "@/hooks/useIsMobile";
import ClassSubclass from "../../pages/scion-pages/1-Class-Subclass";
import BalanceEnweave from "../../pages/scion-pages/2-Balance-Enweave";
import Maneuvers from "../../pages/scion-pages/2-Maneuvers";
import Triggers from "../../pages/scion-pages/3-Triggers";
import Signatures from "../../pages/scion-pages/4-Signatures";
import ThreeHR from "../../pages/scion-pages/5-ThreeHR";
import FiveHR from "../../pages/scion-pages/6-FiveHR";
import Level2ArtAbilities from "../../pages/scion-pages/8-Level2-ArtAbilities";
import Level2 from "../../pages/scion-pages/7-Level2";
import Level3 from "../../pages/scion-pages/9-Level3";
// import Kits from "../../scion-pages/Kits";
// import Changelog from "../../scion-pages/ChangeLog";

export const Route = createFileRoute("/scion")({
  component: Scion,
});

function Scion() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center w-full md:flex-row md:items-start md:justify-center md:gap-6">
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
