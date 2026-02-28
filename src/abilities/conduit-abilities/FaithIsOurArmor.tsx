import { Ability } from "@/components";

export const FaithIsOurArmor = () => (
  <Ability
    title="Faith Is Our Armor (5 Piety)"
    subtitle="The heroes’ armor glows with golden light, granting divine protection."
    keywords="Magic, Ranged"
    actionType="Maneuver"
    range="Ranged 10"
    targets="Four allies"
    effect="Each target gains temporary Stamina equal to their level multiplied by
          5. You can target yourself instead of one ally with this ability."
  />
);
