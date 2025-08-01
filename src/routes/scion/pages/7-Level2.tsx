import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  Heading4,
  Ability,
  AdvancementTable,
  Feature,
} from "@/components";

const Level2 = () => (
  <Page id="level-2">
    <Column>
      <Heading2>2nd-Level Features</Heading2>
      <Text>As a 2nd-level Scion, you gain the following features.</Text>

      <Heading4 className="text-center">2nd-Level Art Features</Heading4>
      <AdvancementTable
        columns={["Subclass", "Features"]}
        rows={[
          { Subclass: "Blinkblade", Features: "Afterimage" },
          { Subclass: "Runewright", Features: "Liminal Runes" },
          { Subclass: "Soulforged", Features: "Soul Instinct" },
        ]}
      />

      <Feature title="Afterimage">
        <Text>
          Whenever you teleport by any means, you leave a distracting afterimage
          in your previous location until the start of your next turn. Power
          rolls targeting enemies adjacent to an afterimage gain edge. The
          afterimage does not occupy space and cannot be targeted or destroyed.
        </Text>
      </Feature>

      <Feature title="Liminal Runes">
        <Text>
          An enemy with a branded rune receives a bane on their power rolls as
          long as the rune remains undetonated. An ally or yourself with a
          branded rune gains an edge on their power rolls as long as the rune
          remains undetonated.
        </Text>
      </Feature>

      <Feature title="Soul Instinct">
        <Text>
          Once per turn, you can make an opportunity attack whenever a creature
          moves from a square adjacent to you to another square adjacent to you.
          In addition, your stability is increased by 1.
        </Text>
      </Feature>

      <Heading2>Perk</Heading2>
      <Text>
        You gain an exploration, lore, or supernatural perk of your choice. See
        Perks for more information.
      </Text>

      <Heading2>2nd-Level Art Ability</Heading2>
      <Text>Your scion Art grants your choice of one of two abilities.</Text>

      <Heading3>2nd-Level Blinkblade Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <Ability
        title="Phase Assault (5 Balance)"
        subtitle="You blink between foes, each reappearance marked by a precise, cutting strike."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Special"
        targets="Special"
        addedStats={["Agility"]}
        tierResults={{
          low: "3 damage",
          middle: "6 damage",
          high: "9 damage",
        }}
        effect="Choose a target within range 5, teleport to an unoccupied space adjacent to it, then apply the power roll result to it. Repeat this effect up to 3 more times. The same target cannot be chosen more than once."
      />

      <Ability
        title="Horizon Step (5 Balance)"
        subtitle="None can escape your grasp."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="1 creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "14 + A damage",
          middle: "18 + A damage",
          high: "23 + A damage",
        }}
        effect="You may teleport to up to 15 squares before this strike."
      />
    </Column>

    <Column>
      <Heading3>2nd-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <Ability
        title="Writ of Flame (5 Balance)"
        subtitle="You brand a flaming writ onto the ground, scorching all who would come near."
        keywords="Area, Magic"
        actionType="Maneuver"
        range="2 burst"
        targets="Each enemy in the area"
        effect="The area remains until the end of the encounter. Each enemy who enters the area for the first time in a combat round or starts their turn there takes damage equal to twice your Reason score."
      />

      <Ability
        title="Writ of Sanctuary (5 Balance)"
        subtitle="You brand a defensive writ onto the ground, protecting and emboldening companions."
        keywords="Area, Magic"
        actionType="Maneuver"
        range="2 burst"
        targets="Each ally in the area"
        effect="The area remains until the end of the encounter. The first time you or an ally enters the area on their turn or begins their turn within it, they gain temporary Stamina equal to three times your Reason score. While within the area, you and your allies gain damage resistance equal to your Reason."
      />

      <Heading3>2nd-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <Ability
        title="Soul Spiral (5 Balance)"
        subtitle="Your Soulblade unfurls in a violent spiral, crashing through foes."
        keywords="Melee, Area, Weapon, Magic"
        actionType="Main action"
        range="2 burst"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "5 damage",
          middle: "8 damage; push 1",
          high: "11 damage; push 3",
        }}
      />

      <Ability
        title="Soul Wave (5 Balance)"
        subtitle="Your Soulblade blazes with the power of your will, unleashing it in a wave of force."
        keywords="Melee, Area, Weapon, Magic"
        actionType="Main action"
        range="5 × 3 line within 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "2 damage; M < weak, dazed (save ends)",
          middle: "3 damage; M < average, dazed (save ends)",
          high: "5 damage; M < strong, dazed (save ends)",
        }}
      />
    </Column>
  </Page>
);

export default Level2;
