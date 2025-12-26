import { Page, Column, Text, Heading2 } from "@/components";
import {
  SurgeWeave,
  TempestFlurry,
  FallingStar,
  InfernoHelix,
} from "@/scion-abilities";

const NineHR = () => (
  <Page id="nine-hr">
    <Column>
      <Heading2>9-Balance Abilities</Heading2>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 9 balance to use.
      </Text>
      <SurgeWeave />

      <TempestFlurry />
    </Column>

    <Column>
      <FallingStar />

      <InfernoHelix />
    </Column>
  </Page>
);

export default NineHR;
