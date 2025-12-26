import { Ability } from "@/components";

export const StillEdge = () => (
  <Ability
    title="Still Edge"
    subtitle="You cut into your foe, leaving potential energy in their form - threatening to snap into explosive motion."
    keywords="Magic, Melee, Weapon, Strike"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "3 + A damage",
      middle: "6 + A damage",
      high: "9 + A damage",
    }}
    effect="If the target willingly moves before the end of their next turn, they take damage equal to twice your Reason score."
  />
);

