import { Ability } from "@/components";

export const WritOfBinding = () => (
  <Ability
    title="Writ of Binding (5 Balance)"
    subtitle="Arcane chains erupt from the ground, coling around your foe."
    keywords="Magic, Ranged"
    actionType="Main action"
    range="Ranged 5"
    targets="One creature"
    addedStats={["Reason"]}
    tierResults={{
      low: "6 damage; M < WEAK, restrained (save ends)",
      middle: "10 damage; M < AVERAGE, restrained (save ends)",
      high: "14 damage; M < STRONG, restrained (save ends)",
    }}
    effect="While restrained this way, the target cannot teleport by any means."
  />
);

