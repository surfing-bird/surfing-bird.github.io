import { PagePDF, ColumnPDF, Text, Heading2, Heading3 } from "@/components";
import {
  SeverTheMoment,
  FullMoonArc,
  VeilPiercer,
  SanguineThread,
  LightningStrike,
  GlacialBloom,
  CrashingWave,
  SpiritRend,
} from "@/abilities";

const Page4 = () => (
  <PagePDF id="page-4">
    <ColumnPDF>
      {/* <FurysCall /> */}

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
      <VeilPiercer />
      <SanguineThread />
    </ColumnPDF>

    <ColumnPDF>
      <Heading3>5-Balance Ability</Heading3>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 5 balance to use.
      </Text>

      <LightningStrike />
      <GlacialBloom />
      <CrashingWave />
      <SpiritRend />
    </ColumnPDF>
  </PagePDF>
);

export default Page4;
