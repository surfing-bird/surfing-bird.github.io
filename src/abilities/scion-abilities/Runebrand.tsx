import { Ability, Detail } from "@/components";

export const Runebrand = () => (
  <Ability
    title="Runebrand (1 Balance)"
    subtitle="You brand a volatile rune on your target, priming it for detonation."
    keywords="Magic"
    actionType="Maneuver"
    range="Melee 1"
    targets="One creature or object"
    effect="When using this ability, choose one of the Enweave effects that can only affect a single target,
          ignoring the component that changes the damage type of your next
          weapon ability. You brand your target with a rune imbued by the effect you
          chose, priming it for detonation. At the end of your turn, the rune is
          primed. When a rune is primed, the next time the branded target is
          damaged, the rune detonates, applying its effect to the target and each enemy within
          range 2 of it. If the branded effect has a push effect, it is
          relative to the branded target's location."
    spend={
      <Detail
        detailName="Spend 2 Balance"
        detailValue="The rune is immediately primed, allowing you to detonate it this turn."
      />
    }
  />
);
