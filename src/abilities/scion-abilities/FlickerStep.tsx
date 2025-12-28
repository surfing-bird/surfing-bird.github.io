import { Ability, Detail } from "@/components";

export const FlickerStep = () => (
  <Ability
    title="Flicker Step"
    subtitle="You instinctively teleport to avoid danger."
    keywords="Magic"
    actionType="Triggered action"
    range="Self"
    targets="Self"
    trigger="You take damage."
    effect="You take half the damage, you can then teleport up to 4 squares after the triggering effect resolves."
    spend={
      <Detail
        detailName="Spend 1+ Balance"
        detailValue="You teleport an additional 2 squares for each balance spent."
      />
    }
  />
);

