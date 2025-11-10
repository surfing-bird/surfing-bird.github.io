import { Ability, TextBlock, Text, Detail } from "@/components";

export const ChainOfTorment = () => (
  <Ability
    title="Chain of Torment"
    subtitle="A fell curse creates a link between two creatures, transferring pain from one to the other."
    keywords="Magic"
    actionType="Maneuver"
    range="Ranged 10"
    targets="Self or an ally and one enemy creature"
    effect={
      <TextBlock>
        <Text>
          Until the end of your next turn, whenever the friendly target
          takes damage that was dealt by an ability, the same amount of
          damage is also dealt to each enemy target.
        </Text>
      </TextBlock>
    }
    spend={
      <Detail
        detailName="Spend 1+ Balance"
        detailValue="For each balance spent you may make an enemy within range of this ability taunted (save ends)."
      />
    }
  />
);

