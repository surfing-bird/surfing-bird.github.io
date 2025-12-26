import { Ability } from "@/components";

export const PhaseAssault = () => (
  <Ability
    title="Phase Assault (5 Balance)"
    subtitle="You blink between foes, each reappearance marked by a precise, cutting strike."
    keywords="Melee, Strike, Weapon, Magic"
    actionType="Main action"
    range="Special"
    targets="Special"
    addedStats={["Agility"]}
    tierResults={{
      low: "3 damage",
      middle: "6 damage",
      high: "9 damage",
    }}
    effect="Choose a target within range 5, teleport to an unoccupied space adjacent to it. Repeat this effect up to 3 more times. The same target cannot be chosen more than once. Then, apply the power roll result to all chosen targets."
  />
);
