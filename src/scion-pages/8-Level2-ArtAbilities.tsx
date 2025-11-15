import { Page, Column, Text, Heading2, Heading3 } from "@/components";
import {
  PhaseAssault,
  HorizonStep,
  WritOfPower,
  WritOfBinding,
  SoulForm,
  SoulSpiral,
  // BlackestNight,
  // ScarletDirge,
} from "@/abilities";

const Level2ArtAbilities = () => (
  <Page id="level-2-art-abilities">
    <Column>
      <Heading2>2nd-Level Art Ability</Heading2>
      <Text>Your scion Art grants your choice of one of two abilities.</Text>

      <Heading3>2nd-Level Blinkblade Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <PhaseAssault />

      <HorizonStep />

      <Heading3>2nd-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <WritOfPower />
      <WritOfBinding />
    </Column>

    <Column>
      <Heading3>2nd-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <SoulForm />
      <SoulSpiral />

      {/* <Heading3>2nd-Level Darksworn Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <BlackestNight />
      <ScarletDirge /> */}
    </Column>
  </Page>
);

export default Level2ArtAbilities;
