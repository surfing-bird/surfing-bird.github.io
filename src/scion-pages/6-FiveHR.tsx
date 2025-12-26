import { Page, Column, Text, Heading3 } from "@/components";
import {
  LightningStrike,
  GlacialBloom,
  CrashingWave,
  SpiritRend,
} from "@/scion-abilities";

const FiveHR = () => (
  <Page id="five-hr">
    <Column>
      <Heading3>5-Balance Ability</Heading3>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 5 balance to use.
      </Text>

      <LightningStrike />

      <GlacialBloom />
    </Column>

    <Column>
      <CrashingWave />

      <SpiritRend />
    </Column>
  </Page>
);

export default FiveHR;
