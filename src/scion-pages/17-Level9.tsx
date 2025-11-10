import { Page, Column, Text, Heading2, Heading3 } from "@/components";
import { FluxOverdrive, MasterWrit, AdamantSeal, SoulGaze, SoulRealm } from "@/abilities";

const Level9 = () => (
  <Page id="level-9">
    <Column>
      <Heading2>9th-Level Features</Heading2>
      <Text>As a 9th-level scion, you gain the following features.</Text>

      <Heading2>9th-Level Art Ability</Heading2>
      <Text>Your scion Art grants your choice of one of two abilities.</Text>

      <Heading3>11th-Level Blinkblade Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <FluxOverdrive />

      <Heading3>9th-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <MasterWrit />

      <AdamantSeal />
    </Column>

    <Column>
      <Heading3>9th-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <SoulGaze />

      <SoulRealm />
    </Column>
  </Page>
);

export default Level9;
