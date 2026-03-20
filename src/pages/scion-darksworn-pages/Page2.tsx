import { PagePDF, ColumnPDF, Heading2 } from "@/components";
import { Nevermore } from "@/abilities/scion-abilities/Nevermore";
import { BloodDance } from "@/abilities/scion-abilities/BloodDance";

const Page2 = () => (
  <PagePDF id="level-1">
    <ColumnPDF>
      <Heading2>6th-Level Features</Heading2>
      <BloodDance />
      <Nevermore />
    </ColumnPDF>

    <ColumnPDF>{""}</ColumnPDF>
  </PagePDF>
);

export default Page2;
