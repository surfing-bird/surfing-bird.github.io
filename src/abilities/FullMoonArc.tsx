import { Ability } from "@/components";

export const FullMoonArc = () => (
  <Ability
    title="Full Moon Arc (3 Balance)"
    subtitle="Your blade traces a perfect circle in red."
    keywords="Melee, Weapon"
    actionType="Main action"
    range="Burst 1"
    targets="Each enemy in the area"
    addedStats={["Agility"]}
    tierResults={{
      low: "6 damage",
      middle: "9 damage",
      high: "13 damage",
    }}
  />
);
