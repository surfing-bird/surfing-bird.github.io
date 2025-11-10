import { PagePDF, ColumnPDF, Text, Heading3 } from "@/components";
import { SoulRupture, SoulRealm } from "@/abilities";

const Page10 = () => (
  <PagePDF id="page-10">
    <ColumnPDF>
      <Heading3>9th-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <SoulRupture />
      <SoulRealm />
    </ColumnPDF>

    <ColumnPDF>{""}</ColumnPDF>
  </PagePDF>
);

export default Page10;
