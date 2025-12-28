import { Ability, TextBlock, Text, BulletList, Detail } from "@/components";

export const Soulshape = () => (
  <Ability
    title="Soulshape"
    subtitle="By reshaping the bound fragment of your soul, you persuade your Soulblade to take on a new form."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect={
      <TextBlock>
        <Text>
          Choose a modified form for your Soulblade, each granting a
          distinct effect until the start of your next turn:
        </Text>
        <BulletList>
          <Detail
            detailName="Expansive"
            detailValue="Melee weapon abilities have their area increased by 1. If the area is a line, increase the size of the larger dimension by 2 instead."
          />
          <Detail
            detailName="Powerful"
            detailValue="Melee weapon abilities with rolled damage have their damage increased by your Reason score. If the ability force moves a target, the forced movement distance gains a bonus equal to your Reason score."
          />
          <Detail
            detailName="Resonant"
            detailValue="Melee weapon abilities have their potency increased by 1."
          />
          <Detail
            detailName="Reaching"
            detailValue="Melee weapon abilities have their distance increased by double your Reason."
          />
        </BulletList>
      </TextBlock>
    }
    spend={
      <Detail
        detailName="Spend 2 Balance"
        detailValue="Any numeric benefit of the chosen form is doubled in value."
      />
    }
  />
);

