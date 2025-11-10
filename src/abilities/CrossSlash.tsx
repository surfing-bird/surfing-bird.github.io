import { Ability } from "@/components";

export const CrossSlash = () => (
  <Ability
    title="Cross Slash (7 Balance)"
    subtitle="You cleave the air in all directions, blades of force radiating from your stance."
    keywords="Melee, Weapon, Magic, Area"
    actionType="Main action"
    range="four 5 × 1 lines within 1"
    targets="Each enemy in the area"
    addedStats={["Agility"]}
    tierResults={{
      low: "6 damage",
      middle: "10 damage",
      high: "14 damage",
    }}
    effect="Overlapping lines are treated as a single area."
  />
);

