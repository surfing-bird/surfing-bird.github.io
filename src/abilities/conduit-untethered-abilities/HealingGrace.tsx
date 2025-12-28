import { Ability, TextBlock, Text, BulletList, Detail } from "@/components";

export const HealingGrace = () => (
  <Ability
    title="Healing Grace (1 Piety)"
    subtitle="Your divine energy restores the righteous."
    keywords="Healing"
    actionType="Maneuver"
    range="Ranged 10"
    targets="Self or one ally"
    spend={
      <TextBlock>
        <Detail
          detailName="Spend 1+ Piety"
          detailValue="For each piety spent, choose one of the following enhancements:"
        />
        <BulletList>
          <Text>
            You can target one additional ally within distance. You can only
            choose this enhancement once per turn.
          </Text>
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
