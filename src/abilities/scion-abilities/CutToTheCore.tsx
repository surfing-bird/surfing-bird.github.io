import { Ability } from "@/components";

export const CutToTheCore = () => (
  <Ability
    title="Cut to the Core"
    subtitle="You cut through your foe's defenses, leaving them vulnerable."
    keywords="Melee, Strike, Weapon, Magic"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "3 + A damage;",
      middle: "5 + A damage;",
      high: "8 + A damage;",
    }}
    effect="The target's characteristic scores are treated as lower by 1 for the sake of resisting potencies until the end of their next turn."
  />
);
