import { Ability } from "@/components";

export const AetherLash = () => (
  <Ability
    title="Aether Lash"
    subtitle="With a flick of your blade, you etch a line of invisible force, preparing to strike."
    keywords="Melee, Strike, Weapon, Magic"
    actionType="Main action"
    range="Melee 1"
    targets="One creature or object"
    addedStats={["Agility"]}
    tierResults={{
      low: "3 + A damage",
      middle: "5 + A damage",
      high: "8 + A damage",
    }}
    effectBeforeResult
    effect="Before choosing the target of this ability and resolving the power roll,
          choose a creature or object within range 5, then either vertical pull 4 the chosen creature or object,
          or vertical pull yourself 4 the chosen from the creature or object's space. When a creature is pulled into the air this way and they can't fly,
          you may choose to make it stay aloft until the end of your turn."
  />
);
