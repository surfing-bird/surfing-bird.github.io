import { Ability, Detail } from "@/components";

export const CleverTrick = () => (
  <Ability
    title="Clever Trick"
    subtitle="You sow a moment of confusion in combat, to your enemy’s peril."
    keywords="Magic"
    actionType="Triggered action"
    range="Self"
    targets="Self"
    trigger="Another creature damages you with a strike."
    effect="You take half the triggering damage. Choose an enemy within distance of the triggering strike, including the enemy who targeted you. They take half the damage of the triggering strike."
    spend={
      <Detail
        detailName="Spend 1 Insight"
        detailValue="The chosen enemy is subject to any effects associated with the triggering strike."
      />
    }
  />
);
