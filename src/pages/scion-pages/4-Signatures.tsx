import { Page, Column, Text, Heading2, Heading4 } from "@/components";
import {
  EssenceLance,
  StillEdge,
  BladeBarrier,
  AetherLash,
  CrescentArc,
  // FurysCall,
} from "@/abilities/scion-abilities";

const Signatures = () => (
  <Page id="signatures">
    <Column>
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

      <EssenceLance />
      <StillEdge />
      <BladeBarrier />
    </Column>

    <Column>
      <AetherLash />
      <CrescentArc />

      {/* <FurysCall /> */}
    </Column>
  </Page>
);

export default Signatures;
