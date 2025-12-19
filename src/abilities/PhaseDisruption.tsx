import { Ability } from "@/components";

export const PhaseDisruption = () => (
  <Ability
    title="Phase Disruption (11 Balance)"
    subtitle="You unmoor the target from space itself, such that every strike displaces them with a sudden warp."
    keywords="Magic"
    actionType="Free triggered action"
    range="Ranged 10"
    targets="One enemy"
    trigger="The target is targeted by yourself or an ally."
    effect="The target is phased (save ends). While phased, each time the target is dealt rolled damage, you may teleport them 10 squares in any direction."
  />
);
