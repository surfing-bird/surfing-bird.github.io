import { Ability } from "@/components";

export const SpectralBlades = () => (
  <Ability
    title="Spectral Blades (7 Balance)"
    subtitle="You summon spectral blades, suspended in poise, released with but a thought."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect="Place a d6 die set to 6 to track this effect.
    Once on your turn, you may reduce the die by any amount up to its current value.
    Then, distribute that many spectral blades among enemies within range 5 as you choose.
    Each blade deals 4 + your Reason score in damage. You cannot assign more than one blade per enemy.
    In addition, whenever an enemy in range 5 is affected by a potency effect,
    you may reduce the die by 1 to increase the potency of the ability by 1."
  />
);
