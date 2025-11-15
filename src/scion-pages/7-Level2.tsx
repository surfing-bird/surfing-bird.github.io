import {
  Page,
  Column,
  Text,
  Heading2,
  Heading4,
  AdvancementTable,
  Feature,
  Heading3,
} from "@/components";

const Level2 = () => (
  <Page id="level-2">
    <Column>
      <Heading2>2nd-Level Features</Heading2>
      <Text>As a 2nd-level scion, you gain the following features.</Text>

      <Heading4 className="text-center">2nd-Level Art Features</Heading4>
      <AdvancementTable
        columns={["Subclass", "Features"]}
        rows={[
          { Subclass: "Blinkblade", Features: "Afterimage" },
          { Subclass: "Runewright", Features: "Liminal Runes" },
          { Subclass: "Soulforged", Features: "Soul Instinct" },
          // { Subclass: "Darksworn", Features: "Sacramentum Sanguis" },
        ]}
      />

      <Feature title="Afterimage">
        <Text>
          Whenever you teleport by any means, you leave a distracting afterimage
          in your previous location until the start of your next turn. Power
          rolls targeting enemies adjacent to one afterimage or more gain an
          gain edge. The afterimage does not occupy space and cannot be targeted
          or destroyed. At the start of any turn when an afterimage fades, you
          can choose to teleport to its location.
        </Text>
      </Feature>

      {/* <Feature title="Soul Instinct">
        <Text>
          Once per turn, you can make a melee free strike whenever a creature
          moves from a square adjacent to you to another square adjacent to you.
          In addition, your stability is increased by 1.
        </Text>
      </Feature>

      <Feature title="Sacramentum Sanguis">
        <Text>
          Whenever you deal rolled damage to a creature you may choose to deal
          your Reason in damage to yourself to gain two surges which must be
          used on the triggering ability.
        </Text>
      </Feature>

      <Heading3>Perk</Heading3>
      <Text>
        You gain an exploration, lore, or supernatural perk of your choice. See
        Perks for more information.
      </Text> */}
    </Column>

    <Column>
      <Feature title="Liminal Runes">
        <Text>
          An enemy carrying an undetonated runebrand receives a bane on their
          power rolls. An ally carrying an undetonated runebrand gains an edge
          on their power rolls.
        </Text>
      </Feature>

      <Feature title="Soul Instinct">
        <Text>
          Once per turn, you can make a melee free strike whenever a creature
          moves from a square adjacent to you to another square adjacent to you.
          In addition, your stability is increased by 1.
        </Text>
      </Feature>

      <Feature title="Sacramentum Sanguis">
        <Text>
          Whenever you deal rolled damage to a creature you may choose to deal
          your Reason in damage to yourself to gain two surges which must be
          used on the triggering ability.
        </Text>
      </Feature>

      <Heading3>Perk</Heading3>
      <Text>
        You gain an exploration, lore, or supernatural perk of your choice. See
        Perks for more information.
      </Text>
    </Column>
  </Page>
);

export default Level2;
