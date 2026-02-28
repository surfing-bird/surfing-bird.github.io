import { Ability } from "@/components";

export const YouAreAlreadyDead = () => (
  <Ability
    title="You Are Already Dead (7 Ferocity)"
    subtitle="Slash. Walk away."
    keywords="Melee, Strike, Weapon"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    effect="At the end of the target's next turn, they take damage equal to 20 + 10 times your level."
  />
);
