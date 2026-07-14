import { Ability, Detail } from "@/components";

export const Runebrand = () => (
  <Ability
    title="Runebrand (1 Balance)"
    subtitle="You brand a volatile rune on your target, priming it for detonation."
    keywords="Magic"
    actionType="Maneuver"
    range="Melee 1"
    targets="One creature or object"
    effect="When using this ability, choose one of the Enweave effects,
          ignoring the component that changes the damage type of your next
          weapon ability. You brand your target with a rune imbued by the effect you
          chose, priming it for detonation. At the end of your turn, the rune is
          primed. When a rune is primed, the next time the branded target is
          damaged, the rune detonates, applying its effect to the target and each enemy within
          range 2 of it.
          
          If the chosen Enweave effect is 'Gale Strike', you must choose the 'push the target' option, and the branded target is not affected by the detonation, 
          while the other targets are affected as if the branded target was the source of the forced movement."
    spend={
      <Detail
        detailName="Spend 2 Balance"
        detailValue="The rune is immediately primed."
      />
    }
  />
);
