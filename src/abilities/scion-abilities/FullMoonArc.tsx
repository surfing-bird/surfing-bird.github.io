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
      low: "2 damage; A < WEAK, bleeding (save ends)",
      middle: "4 damage; A < AVERAGE, bleeding (save ends)",
      high: "6 damage; A < STRONG, bleeding (save ends)",
    }}
  />
);
