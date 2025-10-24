import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  Ability,
  TextBlock,
} from "@/components";

const Level6 = () => (
  <Page id="level-6">
    <Column>
      <Heading2>6th-Level Features</Heading2>
      <Text>As a 6th-level scion, you gain the following features.</Text>

      <Heading3>Masterstroke</Heading3>
      <TextBlock>
        <Text>
          Whenever you use an ability which costs balance on your turn, your
          next power roll on that turn gains an edge. This effect applies before
          whichever ability triggered it is resolved, such that it may apply to
          it.
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

      <Ability
        title="Tether Strike (9 Balance)"
        subtitle="Space twists at the point of contact, inextricably entangling you to your foe."
        keywords="Magic, Melee, Strike, Weapon"
        actionType="Main action"
        range="Melee 1"
        targets="One non-leader, non-solo creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "14 + A damage",
          middle: "18 + A damage",
          high: "23 + A damage",
        }}
        effect="You are tethered to the target by a spatial knot until the end of the encounter. At the beginning of each of your turns, you may choose to teleport to any unoccupied space adjacent to the tethered target. In addition, whenever you teleport by any means, you can also teleport the target to any unoccupied space adjacent to your target location. When using this ability, you may choose to forgo the power roll and resulting damage and use it as a free maneuver instead."
      />

      <Ability
        title="Sunder Space (9 Balance)"
        subtitle="You cut a precise incision in reality, folding in upon itself."
        keywords="Area, Magic, Weapon"
        actionType="Main action"
        range="Special"
        targets="Special"
        effect="You create two connected 3x3-sized areas, one within range 10, and one with your current square as its center. Each area must be placed at a height of no more than 1 square above the ground. Allies that move into a square in either area can choose to instead move into each other square in either area. Enemies caught in either area are dazed until the end of their next turn. In addition, you may teleport each such enemy to any other square in either area."
      />
    </Column>

    <Column>
      <Heading3>6th-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <Ability
        title="Rune of Siphoning (9 Balance)"
        subtitle="You brand a foe with a vicious rune, siphoning the life out of them with every attack."
        keywords="Magic, Melee"
        actionType="Maneuver"
        range="Melee 1"
        targets="One creature"
        effect="Until the end of the encounter or you are dying, whenever you or any ally uses an ability to deal rolled damage to the target, the ability deals extra damage equal to twice your Reason, and the creature dealing the damage gains temporary stamina equal to twice your Reason score. When a creature targeted by this ability is reduced to 0 Stamina, you can use a free triggered action to move the rune to a new target within range 5 of the previous target."
      />

      <Ability
        title="Rune of Power (9 Balance)"
        subtitle="Your brand an ally with an empowering rune, granting them strength beyond their normal means."
        keywords="Magic, Melee"
        actionType="Maneuver"
        range="Melee 1"
        targets="Self or one ally"
        effect="Until the end of the encounter or you are dying, the target gains the following benefits: Abilities with rolled damage have their damage increased by your Reason score. At the beginning of each of their turns, they gain an additional 3 of their Heroic Resource. At the beginning of their turn, they may spend 1 recovery. At the beginning of their turn, they end one condition or effect on themself that is ended by a saving throw or that ends at the end of their turn."
      />

      <Heading3>6th-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <Ability
        title="Soul Rupture (9 Balance)"
        subtitle="Laying bare your foe's soul, you expose a devastating weakness."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "10 + A damage; P < weak, damage weakness 5 (save ends)",
          middle: "14 + A damage; P < average, damage weakness 5 (save ends)",
          high: "20 + A damage; P < strong, damage weakness 5 (save ends)",
        }}
        effect="Whenever the creature is dealt rolled damage while they have this weakness, it is increased by 1. When this condition would end, the damage weakness is instead lowered by 5. When it is lowered to zero or lower, the condition ends."
      />

      <Ability
        title="Soul Wave (9 Balance)"
        subtitle="Your Soulblade blazes with the power of your will, unleashing it in a wave of force."
        keywords="Area, Magic, Melee, Weapon"
        actionType="Main action"
        range="10 × 3 line within 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "4 damage; M < WEAK, dazed (save ends)",
          middle: "6 damage; M < AVERAGE, dazed (save ends)",
          high: "10 damage; M < STRONG, dazed (save ends)",
        }}
        effect="Whenever the creature is dealt rolled damage while they have this weakness, it is increased by 1. Additionally, while the target has damage weakness this way, its characteristic scores are treated as 1 lower for the purpose of resisting potency effects."
      />
    </Column>
  </Page>
);

export default Level6;
