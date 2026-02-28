import { PagePDF, ColumnPDF, Text, Heading3 } from "@/components";
import {
  HorizonStep,
  WritOfPower,
  WritOfBinding,
  SoulForm,
  SoulSpiral,
} from "@/abilities/scion-abilities";

const Page5 = () => (
  <PagePDF id="page-5">
    <ColumnPDF>
      <HorizonStep />

      <Heading3>2nd-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <WritOfPower />
      <WritOfBinding />
    </ColumnPDF>

    <ColumnPDF>
      <Heading3>2nd-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <SoulForm />
      <SoulSpiral />
    </ColumnPDF>
  </PagePDF>
);

export default Page5;
