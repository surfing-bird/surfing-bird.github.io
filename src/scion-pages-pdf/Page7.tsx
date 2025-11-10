import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading2,
  Heading3,
  TextBlock,
  AdvancementTable,
  Feature,
} from "@/components";
import {
  SurgeWeave,
  TempestFlurry,
  FallingStar,
  InfernoHelix,
  TetherStrike,
} from "@/abilities";

const Page7 = () => (
  <PagePDF id="page-7">
    <ColumnPDF>
      <Heading2>5th-Level Features</Heading2>
      <Text>As a 5th-level scion, you gain the following features.</Text>

      <Heading3 className="text-center">5th-Level Art Features</Heading3>
      <AdvancementTable
        columns={["Subclass", "Features"]}
        rows={[
          { Subclass: "Blinkblade", Features: "Hard to Catch" },
          { Subclass: "Runewright", Features: "Tethered Rune" },
          { Subclass: "Soulforged", Features: "Soul Flow" },
        ]}
      />

      <Feature title="Hard to Catch">
        <Text>
          Whenever you take damage from an ability that isn't an attack of
          opportunity, you can teleport up to your Reason score in squares as a
          free triggered action.
        </Text>
      </Feature>

      <Feature title="Tethered Rune">
        <Text>
          When a Runebrand is detonated, it applies its effect to every enemy
          within range 3 of it, instead of within range 2. Additionally, at the
          start of your turn, you may detonate any previously primed runes.
        </Text>
      </Feature>

      <Feature title="Soul Flow">
        <Text>
          Whenever you use a Heroic Ability that is a main action, if a
          Soulshape benefit is active, you can extend the duration of it until
          the end of your next turn. If a Soulshape benefit is not active, you
          may choose to use Soulshape as a free maneuver, with the effect
          instead lasting until the end of your next turn.
        </Text>
      </Feature>

      <Heading2>9-Balance Abilities</Heading2>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 9 balance to use.
      </Text>

      <FallingStar />
      <InfernoHelix />
    </ColumnPDF>

    <ColumnPDF>
      <TempestFlurry />
      <SurgeWeave />

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
    </ColumnPDF>
  </PagePDF>
);

export default Page7;
