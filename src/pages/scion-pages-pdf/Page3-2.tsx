import {
  EssenceLance,
  StillEdge,
  RageIsBlindness,
  VeilPiercer,
  FullMoonArc,
  SeverTheMoment,
  SanguineThread,
  CutToTheCore,
} from "@/abilities/scion-abilities";
import { ColumnPDF, Heading2, Heading3, PagePDF, Text } from "@/components";

const Page3_2 = () => (
  <PagePDF id="page-3-2">
    <ColumnPDF>
      <EssenceLance />
      <StillEdge />
      <RageIsBlindness />
      <CutToTheCore />
    </ColumnPDF>

    <ColumnPDF>
      <Heading2>Heroic Abilities</Heading2>
      <Text>
        A range of heroic abilities defines the inheritance of a scion, all of
        which make use of your balance.
      </Text>

      <Heading3>3-Balance Ability</Heading3>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 3 balance to use.
      </Text>

      <SeverTheMoment />
      <FullMoonArc />
      <VeilPiercer />
      <SanguineThread />
    </ColumnPDF>
  </PagePDF>
);

export default Page3_2;
