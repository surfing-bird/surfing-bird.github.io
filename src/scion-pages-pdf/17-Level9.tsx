import { PagePDF, ColumnPDF, Text, Heading2, Heading3, Ability } from "@/components";

const Level9 = () => (
  <PagePDF id="level-9">
    <ColumnPDF>
      <Heading2>9th-Level Features</Heading2>
      <Text>As a 9th-level scion, you gain the following features.</Text>

      <Heading2>9th-Level Art Ability</Heading2>
      <Text>Your scion Art grants your choice of one of two abilities.</Text>

      <Heading3>11th-Level Blinkblade Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <Ability
        title="Flux Overdrive (11 Balance)"
        subtitle="Flavor"
        keywords="Magic"
        actionType="Maneuver"
        range="Self"
        targets="Self"
        effect="Until the end of the encounter or you are dying, whenever you either damage or teleport next to a creature, you may teleport that creature a number of squares equal to your Reason score.
        Additionally, whenever you teleport using Hard to Catch, you receive half the damage of the triggering ability."
      />

      <Heading3>9th-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <Ability
        title="Master Writ (11 Balance)"
        subtitle="You brand a complex writ on the ground, weaving multiple enchantments at once."
        keywords="Area, Magic"
        actionType="Maneuver"
        range="3 burst"
        targets="Each enemy in the area"
        effect="The area remains until the end of the encounter. Choose three different Enweave effects without an area.
        Each enemy who enters the area for the first time in a combat round or starts their turn there suffers the effect of all chosen Enweave effects."
      />

      <Ability
        title="Adamant Seal (11 Balance)"
        subtitle="The ultimate expression of sealing magic, ward away the very life force of your enemy."
        keywords="Magic, Ranged"
        actionType="Main action"
        range="Ranged 5"
        targets="One creature"
        addedStats={["Reason"]}
        tierResults={{
          low: "4 damage",
          middle: "6 damage",
          high: "10 damage",
        }}
        effect="Until the end of the encounter or you are dying, the target has damage weakness 5,
        is weakened, can't gain Stamina, and automatically fails all saving throws."
      />
    </ColumnPDF>

    <ColumnPDF>
      <Heading3>9th-Level Soulforged Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>

      <Ability
        title="Soul Gaze (11 Balance)"
        subtitle="You peer into your foe's soul, laying bare its true nature - compelling them to do the same."
        keywords="Magic, Ranged"
        actionType="Main action"
        range="Ranged 5"
        targets="One creature"
        addedStats={["Reason"]}
        tierResults={{
          low: "8 psychic damage, P < WEAK, dazed and frightened (save ends)",
          middle:
            "12 psychic damage, P < AVERAGE, dazed and frightened (save ends)",
          high: "16 psychic damage, P < STRONG, dazed and frightened (save ends)",
        }}
        effect="Until the end of the encounter or you are dying, the first time in a turn that the target damages another creature, they take 20 damage."
      />

      <Ability
        title="Soul Realm (11 Balance)"
        subtitle="The boundary between this world and the spirit realm grows thin. Within your reach, souls shimmer exposed."
        keywords="Area, Magic"
        actionType="Maneuver"
        range="2 aura"
        targets="Each enemy in the area"
        effect="Until the end of the encounter or you are dying, targets have damage weakness 5 while within the area."
      />
    </ColumnPDF>
  </PagePDF>
);

export default Level9;

