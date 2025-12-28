import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading3,
  Heading2,
  TextBlock,
} from "@/components";
import {
  SunderSpace,
  RuneOfSiphoning,
  RuneOfPower,
  SoulGaze,
  SoulWave,
  TetherStrike,
} from "@/abilities/scion-abilities";

const Page8 = () => (
  <PagePDF id="page-8">
    <ColumnPDF>
      <Heading2>6th-Level Features</Heading2>
      <Text>As a 6th-level scion, you gain the following features.</Text>

      <Heading3>Masterstroke</Heading3>
      <TextBlock>
        <Text>
          Whenever you use an ability which costs balance on your turn, your
          next power roll on that turn gains an edge. This effect applies before
          whichever ability triggered it is resolved, such that the edge may
          apply to it.
        </Text>
        <Text>
          You achieve a critical hit on an 18 or higher, instead of 19 or 20.
        </Text>
      </TextBlock>

      <Heading3>Perk</Heading3>
      <Text>
        You gain an exploration, lore, or supernatural perk of your choice.
      </Text>

      <Heading2>6th-Level Art Ability</Heading2>
      <Text>Your scion Art grants your choice of one of two abilities.</Text>
      <Heading3>6th-Level Blinkblade Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <TetherStrike />

      <SunderSpace />
    </ColumnPDF>

    <ColumnPDF>
      <Heading3>6th-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <RuneOfSiphoning />
      <RuneOfPower />

      <Heading3>6th-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <SoulWave />
      <SoulGaze />
    </ColumnPDF>
  </PagePDF>
);

export default Page8;
