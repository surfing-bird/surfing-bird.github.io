import { Ability } from "@/components";

export const ReapersEdge = () => (
  <Ability
    title="Reaper's Edge (7 Balance)"
    subtitle="There is power in death."
    keywords="Melee, Strike, Weapon, Magic"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "12 + A damage",
      middle: "18 + A damage",
      high: "24 + A damage",
    }}
    effect="If this ability reduces a creature to 0 Stamina, gain 5 balance."
  />
);

