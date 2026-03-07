import { Ability, Detail } from "@/components";

export const Harmonize = () => (
  <Ability
    title="Harmonize"
    subtitle="Give the chorus a little punch."
    keywords="Ranged, Triggered"
    actionType="Triggered action"
    range="Ranged 5"
    targets="One ally"
    trigger="The target uses a non-heroic ability that targets only one enemy."
    effect="The target can choose one additional target for the triggering ability. Any damage dealt to the additional target is sonic damage."
    spend={
      <Detail
        detailName="Spend 1+ Drama"
        detailValue="You can trigger this ability when a target uses a heroic ability that has a Heroic Resource cost equal to the amount of drama spent."
      />
    }
  />
);
