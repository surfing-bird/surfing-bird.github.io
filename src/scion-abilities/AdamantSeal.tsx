import { Ability } from "@/components";

export const AdamantSeal = () => (
  <Ability
    title="Adamant Seal (11 Balance)"
    subtitle="The ultimate expression of sealing magic, ward away the very life force of your enemy."
    keywords="Magic, Ranged"
    actionType="Main action"
    range="Ranged 5"
    targets="One creature"
    addedStats={["Reason"]}
    tierResults={{
      low: "4 damage",
      middle: "6 damage",
      high: "10 damage",
    }}
    effect="Until the end of the encounter or you are dying, the target has damage weakness 5,
    is weakened, can't gain Stamina, and automatically fails all saving throws."
  />
);

