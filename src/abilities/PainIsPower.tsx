import { Ability, Detail } from "@/components";

export const PainIsPower = () => (
  <Ability
    title="Pain Is Power"
    subtitle="You take another's pain - drawing strength from it."
    keywords="Magic"
    actionType="Triggered action"
    range="Ranged 10"
    targets="Self or an ally"
    trigger="The target takes damage."
    effect="You take the damage instead of the target, halving it if you wish. You gain an edge on your next power roll."
    spend={
      <Detail
        detailName="Spend 1+ Balance"
        detailValue="For each balance spent, deal your Reason in damage to yourself, and double your Reason in damage to the triggering creature."
      />
    }
  />
);

