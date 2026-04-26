import { Ability, Detail } from "@/components";

export const Riposte = () => (
  <Ability
    title="Riposte"
    subtitle="I'd have brought treats had I known I'd be fighting a dog."
    keywords="Melee, Triggered"
    actionType="Triggered action"
    range="Melee 3"
    targets="Self or one ally"
    trigger="You take damage from a melee ability."
    effect="You can either reduce the damage of the triggering strike by half or make a free strike against the creature who made the triggering strike. You then can shift 2 squares. "
    spend={
      <Detail
        detailName="Spend 2 Drama"
        detailValue="You can reduce the damage of the triggering strike by half and make a free strike against the creature who made the triggering strike. You then can shift 2 squares."
      />
    }
  />
);
