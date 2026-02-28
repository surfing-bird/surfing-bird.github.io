import { Ability } from "@/components";

export const BloodForBlood = () => (
  <Ability
    title="Blood for Blood! (5 Ferocity)"
    subtitle="See how well they fight after you've bled them dry."
    keywords="Melee, Strike, Weapon"
    actionType="Main action"
    range="Melee 1"
    targets="Two creatures or objects"
    addedStats={["Might"]}
    tierResults={{
      low: "4 + M damage; M < WEAK , bleeding (save ends)",
      middle: "6 + M damage; M < AVERAGE, bleeding (save ends)",
      high: "10 + M damage; M < STRONG, bleeding (save ends)",
    }}
    effect="You can deal 1d6 damage to yourself to deal an extra 1d6 damage to the targets."
  />
);
