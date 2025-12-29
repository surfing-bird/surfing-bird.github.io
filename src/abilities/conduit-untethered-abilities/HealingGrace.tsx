import { Ability, TextBlock, Text, BulletList, Detail } from "@/components";

export const HealingGrace = () => (
  <Ability
    title="Healing Grace"
    subtitle="Your divine energy restores the righteous."
    keywords="Healing"
    actionType="Maneuver"
    range="Ranged 10"
    targets="Self or one ally"
    effect="The target can spend a Recovery"
    spend={
      <TextBlock className="!space-y-1">
        <Detail
          detailName="Spend 1 Piety"
          detailValue="You can target one additional ally within distance. "
        />
        <Detail
          detailName="Spend 1+ Piety"
          detailValue="For each piety spent, choose one of the following enhancements:"
        />
        <BulletList>
          <Text>
            You can end one effect on a target that is ended by a saving throw
            or that ends at the end of their turn.
          </Text>
          <Text>A prone target can stand up.</Text>
          <Text>A target can spend 1 additional Recovery.</Text>
        </BulletList>
      </TextBlock>
    }
  />
);
