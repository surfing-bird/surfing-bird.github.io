import { Ability } from "@/components";

export const SoulWave = () => (
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
  />
);

