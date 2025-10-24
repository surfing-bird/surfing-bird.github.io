import {
  Page,
  Column,
  Text,
  Heading2,
  Heading4,
  AdvancementTable,
  Feature,
} from "@/components";

const Level8 = () => (
  <Page id="level-8">
    <Column>
      <Heading2>8th-Level Features</Heading2>re
      <Text>As an 8th-level Scion, you gain the following features.</Text>

      <Heading4 className="text-center">8th-Level Scion Art Features</Heading4>
      <AdvancementTable
        columns={["Subclass", "Features"]}
        rows={[
          { Subclass: "Blinkblade", Features: "Phase Field" },
          { Subclass: "Runewright", Features: "Grand Rune" },
          { Subclass: "Soulforged", Features: "Soul Manifest" },
        ]}
      />
    </Column>

    <Column>
      <Feature title="Phase Field">
        <Text>
          Whenever you teleport by any means, you don't require line of sight to
          the target location. Additionally, any ally adjacent to you may use
          Blink as a maneuver with this benefit.
        </Text>
      </Feature>

      <Feature title="Grand Rune">
        <Text>
          When a Runebrand is detonated, it applies its effect to every enemy
          within range 4 of it, instead of within range 3. In addition, your
          Runebrand ability may now be used at range 5 in addition to melee 1
          range.
        </Text>
      </Feature>

      <Feature title="Soul Manifest">
        <Text>Placeholder</Text>
      </Feature>
    </Column>
  </Page>
);

export default Level8;
