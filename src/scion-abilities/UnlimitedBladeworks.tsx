import { Ability } from "@/components";

export const UnlimitedBladeworks = () => (
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
);

