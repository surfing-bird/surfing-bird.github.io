import { Ability, Detail } from "@/components";

export const BladesWill = () => (
  <Ability
    title="Blade's Will"
    subtitle="As if moving by its own accord, your Soulblade parries and ripostes."
    keywords="Melee, Weapon, Magic"
    actionType="Triggered action"
    range="Ranged 5"
    targets="Self or one ally"
    trigger="A creature deals damage to the target."
    effect="You can shift a number of squares equal to your Reason score.
            If the target is you, or if you end this shift adjacent to the target, the target takes half the damage."
    spend={
      <Detail
        detailName="Spend 2 Balance"
        detailValue="Make a melee free strike against the creature that damaged the target."
      />
    }
  />
);

