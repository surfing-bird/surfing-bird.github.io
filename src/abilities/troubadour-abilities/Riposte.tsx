import { Ability, Detail } from "@/components";

export const Riposte = () => (
  <Ability
    title="Riposte"
    subtitle="I'd have brought treats had I known I'd be fighting a dog."
    keywords="Melee, Triggered"
    actionType="Triggered action"
    range="Melee 3"
    targets="Self or one ally"
    trigger="The target takes damage from a melee ability."
    effect="You can shift a number of squares equal to your Presence score. If the target is you, or if you end this shift adjacent to the target, you make a melee free strike against the creature who made the triggering ability."
    spend={
      <Detail
        detailName="Spend 1 Drama"
        detailValue="You or the target may shift a number of squares equal to your Presence score."
      />
    }
  />
);
