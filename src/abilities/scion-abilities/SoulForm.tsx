import { Ability } from "@/components";

export const SoulForm = () => (
  <Ability
    title="Soul Form (5 Balance)"
    subtitle="Your Soulblade takes its true form, flaring with power."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect="Choose a Soulshape form. You gain its effect with its numeric values doubled, and cannot choose it when using Soulshape until the end of the encounter."
  />
);

