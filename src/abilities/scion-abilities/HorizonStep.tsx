import { Ability } from "@/components";

export const HorizonStep = () => (
  <Ability
    title="Horizon Step (5 Balance)"
    subtitle="None can escape your reach."
    keywords="Melee, Strike, Weapon, Magic"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "14 + A damage",
      middle: "18 + A damage",
      high: "23 + A damage",
    }}
    effect="You may teleport to up to 15 squares before this strike."
  />
);
