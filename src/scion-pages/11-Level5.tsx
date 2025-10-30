import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  AdvancementTable,
  Feature,
} from "@/components";

const Level5 = () => (
  <Page id="level-5">
    <Column>
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
    </Column>

    <Column>
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
    </Column>
  </Page>
);

export default Level5;
