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
      low: "2 + A damage",
      middle: "5 + A damage",
      high: "8 + A damage",
    }}
    effectBeforeResult
    effect="Before choosing the target of this ability and resolving the power roll,
          choose a creature or object within range 5. Either vertical pull 4
          the target, or vertical pull 4 yourself from the creature or object's space.
          When a creature is pulled into the air this way, they do not fall
          down until the end of your turn, and lose all stability while in
          the air."
  />
);

