import { Ability } from "@/components";

export const Singularity = () => (
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
);

