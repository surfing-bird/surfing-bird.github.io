import { Ability } from "@/components";

export const SoulRupture = () => (
  <Ability
    title="Soul Rupture (11 Balance)"
    subtitle="Fraying apart your foe's soul, you impose a debilitating weakness."
    keywords="Melee, Strike, Weapon, Magic"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "10 + A damage; P < WEAK, damage weakness 10 (save ends)",
      middle: "14 + A damage; P < AVERAGE, damage weakness 10 (save ends)",
      high: "20 + A damage; P < STRONG, damage weakness 10 (save ends)",
    }}
    effect="Whenever the creature is dealt rolled damage while they have this damage weakness, it is increased by 1. When this condition would end, the damage weakness is instead lowered by 5. When it is lowered to zero or lower, the condition ends."
  />
);
