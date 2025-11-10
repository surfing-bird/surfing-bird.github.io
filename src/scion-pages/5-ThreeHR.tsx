import { Page, Column, Text, Heading2, Heading3 } from "@/components";
import { SeverTheMoment, FullMoonArc, VeilPiercer, SanguineThread } from "@/abilities";

const ThreeHR = () => (
  <Page id="three-hr">
    <Column>
      <Heading2>Heroic Abilities</Heading2>
      <Text>
        A range of heroic abilities defines your Art, all of which make use of
        your balance.
      </Text>

      <Heading3>3-Balance Ability</Heading3>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 3 balance to use.
      </Text>

      <SeverTheMoment />
      <FullMoonArc />
    </Column>

    <Column>
      <VeilPiercer />

      <SanguineThread />
    </Column>
  </Page>
);

export default ThreeHR;
