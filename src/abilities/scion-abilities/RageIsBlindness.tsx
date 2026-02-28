import { Ability } from "@/components";

export const RageIsBlindness = () => (
  <Ability
    title="Rage Is Blindness"
    subtitle="Their fury betrays them."
    keywords="Magic, Melee, Weapon, Strike"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "3 + A damage, I < WEAK, taunted (save ends)",
      middle: "6 + A damage, I < AVERAGE, taunted (save ends)",
      high: "9 + A damage, I < STRONG, taunted (save ends)",
    }}
  />
);
