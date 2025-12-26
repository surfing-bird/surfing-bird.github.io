import { Ability } from "@/components";

export const InfernoHelix = () => (
  <Ability
    title="Inferno Helix (9 Balance)"
    subtitle="Flames whirl in step with your dance, spiraling outward in staccato."
    keywords="Area, Magic, Weapon"
    actionType="Main action"
    range="3 burst"
    targets="All enemies in the area"
    addedStats={["Reason"]}
    tierResults={{
      low: "6 fire damage",
      middle: "10 fire damage",
      high: "14 fire damage",
    }}
    effect="Until the start of your next turn, the first time on a turn that an enemy within range 5 of you takes damage, you can shift up to a distance equal to your Reason score.
    If you end this shift adjacent to the enemy, it takes fire damage equal to your double your Reason score."
  />
);

