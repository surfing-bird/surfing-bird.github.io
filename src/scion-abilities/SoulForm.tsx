import { Ability } from "@/components";

export const SoulForm = () => (
  <Ability
    title="Soul Form (5 Balance)"
    subtitle="Your Soulblade takes its true form, flaring with power."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect="Until the end of the encounter, whenever you gain the benefit of a Soulshape form, you may choose an additional form to benefit from. You can use the spend effect for no cost on both form benefits. You may use the Soulshape maneuver."
  />
);

