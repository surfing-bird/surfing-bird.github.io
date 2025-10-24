import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  Ability,
  TextBlock,
  BulletList,
  Detail,
} from "@/components";

const Level2ArtAbilities = () => (
  <Page id="level-2-art-abilities">
    <Column>
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
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "14 + A damage",
          middle: "18 + A damage",
          high: "23 + A damage",
        }}
        effect="You may teleport to up to 15 squares before this strike."
      />

      <Heading3>2nd-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <Ability
        title="Writ of Power (5 Balance)"
        subtitle="You brand an arcane writ onto the ground, scorching foes, or soothing allies."
        keywords="Area, Magic"
        actionType="Maneuver"
        range="2 burst"
        targets="Each enemy in the area"
        effect={
          <TextBlock>
            <Text>
              <strong>Effect:</strong> The area remains until the end of the
              encounter or you are dying. Choose one of the following effects to
              apply to the area:
            </Text>
            <BulletList>
              <Detail
                detailName="Writ of Flame"
                detailValue="Each enemy who enters the area for the first time in a combat round or starts their turn there takes damage equal to triple your Reason score."
              />
              <Detail
                detailName="Writ of Sanctuary"
                detailValue="Each ally, or youreslf, who enters the area for the first time in a combat round or starts their turn there may either spend a recovery, or end one effect that is ended by a saving throw or ends at the end of their turn."
              />
            </BulletList>
          </TextBlock>
        }
      />
      <Ability
        title="Writ of Binding (5 Balance)"
        subtitle="Arcane chains erupt from the ground, coling around your foe."
        keywords="Magic, Ranged"
        actionType="Main action"
        range="Range 5"
        targets="One creature"
        addedStats={["Reason"]}
        tierResults={{
          low: "6 damage; M < WEAK, restrained (save ends)",
          middle: "10 damage; M < AVERAGE, restrained (save ends)",
          high: "14 damage; M < STRONG, restrained (save ends)",
        }}
        effect="While restrained this way, the target cannot teleport by any means."
      />
    </Column>

    <Column>
      <Heading3>2nd-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <Ability
        title="Soul Form (5 Balance)"
        subtitle="Your Soulblade takes its true form, flaring with power."
        keywords="Magic"
        actionType="Maneuver"
        range="Self"
        targets="Self"
        effect="Until the end of the encounter, whenever you gain the benefit of a Soulshape form, you may choose an additional form to benefit from. You can use the spend effect for no cost on both form benefits. You may use the Soulshape maneuver."
      />
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

      <Heading3>2nd-Level Darksworn Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <Ability
        title="Blackest Night (5 Balance)"
        subtitle="You cloak yourself in lightless gloom."
        keywords="Area, Magic"
        actionType="Maneuver"
        range="3 aura"
        targets="Each enemy in the area"
        effect={
          <Text>
            <span className="font-bold">Effect: </span>
            Until the end of the encounter, each target in the area can only
            affect creatures within the area, and each square of movement it
            takes costs one extra square. You can use the Chain of Torment
            maneuver.
          </Text>
        }
      />
      <Ability
        title="Scarlet Dirge (5 Balance)"
        subtitle="A curse of burning blood - upon death, their body bursts in a crimson shower."
        keywords="Melee, Area, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="One enemy creature"
        effect="A target who is not a minion, leader, or solo creature and who is winded
          at the end of its next turn is reduced to 0 Stamina. When it dies either this way
          or beforehand, the target explodes in a shower of burning blood, dealing twice your
          Reason score in damage to all enemies within range 3 of it."
        addedStats={["Agility"]}
        tierResults={{
          low: "5 + A damage",
          middle: "9 + A damage",
          high: "12 + A damage",
        }}
      />
    </Column>
  </Page>
);

export default Level2ArtAbilities;
