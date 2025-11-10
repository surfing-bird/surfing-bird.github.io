import { Ability } from "@/components";

export const SplitTheWorldAsunder = () => (
  <Ability
    title="Split The World Asunder (11 Balance)"
    subtitle="You reave space itself in twain, leaving remnants of pure, impenetrable force in the wake of your slash."
    keywords="Area, Magic, Weapon, Melee"
    actionType="Main action"
    range="two 10 × 1 walls within 10"
    targets="Each enemy in the area"
    addedStats={["Agility"]}
    tierResults={{
      low: "4 damage",
      middle: "6 damage",
      high: "10 damage",
    }}
    effect="Until the start of your next turn, the area projects a 10-square high impenetrable sheet of force both above and below it,
    which blocks line of effect and can't be moved through by any means other than teleportation.
    Creatures caught in the area are pushed to either side of the wall they are caught in, chosen by you."
  />
);

