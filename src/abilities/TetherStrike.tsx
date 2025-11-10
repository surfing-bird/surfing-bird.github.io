import { Ability } from "@/components";

export const TetherStrike = () => (
  <Ability
    title="Tether Strike (9 Balance)"
    subtitle="Space twists at the point of contact, inextricably entangling you to your foe."
    keywords="Magic, Melee, Strike, Weapon"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "14 + A damage",
      middle: "18 + A damage",
      high: "23 + A damage",
    }}
    effect="You are tethered to the target by a spatial knot until the end of the encounter. At the beginning of each of your turns, you may choose to teleport to any unoccupied space adjacent to the tethered target.
    In addition, if the target is not a solo or leader, whenever you teleport by any means, you can also teleport the target to any unoccupied space adjacent to your target location. When using this ability, you may choose to forgo the power roll and resulting damage and use it as a free maneuver instead."
  />
);

