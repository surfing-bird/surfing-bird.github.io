import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading2,
  Heading4,
  AdvancementTable,
  Feature,
} from "@/components";

const Level8 = () => (
  <PagePDF id="level-8">
    <ColumnPDF>
      <Heading2>8th-Level Features</Heading2>
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
    </ColumnPDF>

    <ColumnPDF>
      <Feature title="Phase Field">
        <Text>
          Whenever you teleport by any means, you don't require line of sight to
          the target location. Additionally, any ally adjacent to you may use
          Blink as a maneuver with this benefit, but cannot use its spend
          effect.
        </Text>
      </Feature>

      <Feature title="Grand Rune">
        <Text>
          When a Runebrand is detonated, it applies its effect to every enemy
          within range 4 of it, instead of within range 3. In addition, your
          Runebrand ability now has a 'Ranged 5' range.
        </Text>
      </Feature>

      <Feature title="Soul Manifest">
        <Text>
          Choose a Soulshape form, its effects are now permanent. When it is
          chosen when using Soulshape, the bonuses increase further. You may
          change the chosen form for this feature as a downtime activity.
        </Text>
      </Feature>
    </ColumnPDF>
  </PagePDF>
);

export default Level8;

