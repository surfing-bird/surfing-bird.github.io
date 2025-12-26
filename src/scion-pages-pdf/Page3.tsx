import { PagePDF, ColumnPDF, Text, Heading2, Heading4 } from "@/components";
import {
  EnsnaringRune,
  BladesWill,
  EssenceLance,
  StillEdge,
  BladeBarrier,
  AetherLash,
  CrescentArc,
  FlickerStep,
} from "@/scion-abilities";

const Page3 = () => (
  <PagePDF id="page-3">
    <ColumnPDF>
      <FlickerStep />
      <EnsnaringRune />
      <BladesWill />
      {/* <PainIsPower /> */}

      <Heading2>Scion Abilities</Heading2>
      <Text>
        You wield a seamless fusion of martial grace and arcane power, flowing
        through battle with speed and precision.
      </Text>

      <Heading4>Signature Ability</Heading4>
      <Text>
        Select one signature ability from the options below. Signature abilities
        can be used at will.
      </Text>
      <AetherLash />
    </ColumnPDF>

    <ColumnPDF>
      <BladeBarrier />
      <CrescentArc />
      <EssenceLance />
      <StillEdge />
    </ColumnPDF>
  </PagePDF>
);

export default Page3;
