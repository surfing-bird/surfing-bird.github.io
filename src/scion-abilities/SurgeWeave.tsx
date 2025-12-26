import { Ability } from "@/components";

export const SurgeWeave = () => (
  <Ability
    title="Surge Weave (9 Balance)"
    subtitle="You weave power through your weapon and unleash it in a sculpted surge of energy."
    keywords="Weapon, Area, Magic"
    actionType="Main action"
    range="15 wall within 1"
    targets="Every enemy in the area"
    addedStats={["Agility"]}
    tierResults={{
      low: "4 damage",
      middle: "8 damage",
      high: "14 damage",
    }}
    effect="Choose any Enweave effect without an area. It is applied to all enemies within the area. The wall does not persist after the ability resolves."
  />
);

