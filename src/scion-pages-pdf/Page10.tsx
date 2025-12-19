import { PagePDF, ColumnPDF, Text, Heading3, Heading2 } from "@/components";
import {
  FluxOverdrive,
  PhaseDisruption,
  SoulRupture,
  SoulRealm,
  MasterWrit,
  AdamantSeal,
} from "@/abilities";

const Page10 = () => (
  <PagePDF id="page-10">
    <ColumnPDF>
      <Heading2>9th-Level Features</Heading2>
      <Text>As a 9th-level scion, you gain the following features.</Text>

      <Heading3>Flow Like Water</Heading3>
      <Text>
        At the beginning of each turn when you gain balance, you may choose to
        forgo any number of balance gained. For each balance forgoed this way,
        you may end one condition on yourself. Additionally, you cannot be made
        prone, and your Agility and Reason are treated as 2 higher for the
        purpose of resisting the potency of abilities.
      </Text>

      <Heading2>9th-Level Art Ability</Heading2>
      <Text>Your scion Art grants your choice of one of two abilities.</Text>

      <Heading3>9th-Level Blinkblade Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <FluxOverdrive />
      <PhaseDisruption />

      <Heading3>9th-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <AdamantSeal />
    </ColumnPDF>

    <ColumnPDF>
      <MasterWrit />

      <Heading3>9th-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <SoulRupture />
      <SoulRealm />
    </ColumnPDF>
  </PagePDF>
);

export default Page10;
