import { Page, Column, Text, Heading2, Ability } from "@/components";

const Level8ElevenHR = () => (
  <Page id="level-8-eleven-hr">
    <Column>
      <Heading2>11-Balance Abilities</Heading2>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 11 balance to use.
      </Text>

      {/* <Ability
        title="Calamitous Strike (11 Balance)"
        subtitle="Find relief, the end comes swiftly for you."
        keywords="Magic, Melee, Weapon, Strike"
        actionType="Main action"
        range="Melee 1"
        targets="One non-leader, non-solo creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "If the target is winded, they are destroyed (see effect).",
          middle:
            "If the target is winded, they are destroyed (see effect). Otherwise, they are reduced to half their Stamina.",
          high: "If the target is winded, they are destroyed (see effect). Otherwise, they take damage equal to half their Stamina.",
        }}
        effect="Destroyed: When a creature is destroyed, its Stamina is reduced to 0, and any of their abilities that is triggered by being reduced to 0 Stamina is ignored."
      /> */}

      <Ability
        title="Sevenfold Form (11 Balance)"
        subtitle="A chorus of cuts. A crescendo. Silence."
        keywords="Magic, Melee, Weapon, Strike"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Reason"]}
        tierResults={{
          low: "7 x 5 damage",
          middle: "7 x 6 damage",
          high: "7 x 7 damage",
        }}
        effect="Each instance of damage is considered a separate strike."
      />

      <Ability
        title="Singularity (11 Balance)"
        subtitle="You rend the fabric of reality, leaving a yawning void that demands to be filled."
        keywords="Area, Magic, Weapon"
        actionType="Main action"
        range="5 burst"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "3 damage; pull 3, M < WEAK, slowed (save ends)",
          middle: "6 damage; pull 5, M < AVERAGE, slowed (save ends)",
          high: "9 damage; pull 7, M < STRONG, slowed (save ends)",
        }}
      />
    </Column>

    <Column>
      <Ability
        title="Unlimited Bladeworks (11 Balance)"
        subtitle="You summon a mighty host of spectral blades, unleashing them in a relentless barrage."
        keywords="Area, Magic, Ranged"
        actionType="Main action"
        range="Five 3 cubes within 10"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "6 damage;",
          middle: "9 damage;",
          high: "13 damage;",
        }}
        effect="Until the end of the encounter or you are dying, you may make an additional power roll targeting a single 3 cube within 10 at the start of each of your turns."
      />

      <Ability
        title="Split The World Asunder (11 Balance)"
        subtitle="You reave space itself in twain, leaving remnants of pure, impenetrable force in the wake of your slash."
        keywords="Area, Magic, Weapon, Melee"
        actionType="Main action"
        range="two 10 × 1 walls within 10"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "4 damage",
          middle: "6 damage",
          high: "10 damage",
        }}
        effect="Until the start of your next turn, the area projects a 10-square high impenetrable sheet of force both above and below it,
        which blocks line of effect and can't be moved through by any means other than teleportation.
        Creatures caught in the area are pushed to either side of the wall they are caught in, chosen by you."
      />
    </Column>
  </Page>
);

export default Level8ElevenHR;
