import { Ability } from "@/components";

export const SevenfoldForm = () => (
  <Ability
    title="Sevenfold Form (11 Balance)"
    subtitle="A chorus of cuts. A crescendo. Silence."
    keywords="Magic, Melee, Weapon, Strike"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Reason"]}
    tierResults={{
      low: "7 x 5 damage",
      middle: "7 x 6 damage",
      high: "7 x 7 damage",
    }}
    effect="Each instance of damage is considered a separate strike."
  />
);

