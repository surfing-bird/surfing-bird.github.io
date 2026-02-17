import { Ability, TextBlock, Text, BulletList } from "@/components";

export const Aegis = () => (
  <Ability
    title="Aegis"
    subtitle="You utter a prayer that grants divine protection to an ally."
    keywords="Magic, Ranged"
    actionType="Maneuver"
    range="Ranged 10"
    targets="One ally"
    effect={
      <TextBlock>
        <Text>
          <strong>Effect:</strong> The target is warded by you until the end of
          the encounter, you use this ability again, you willingly end this
          effect (no action required), or another Censor wards the target.
        </Text>

        <Text>
          Oncer per round, when an ally warded by you is the target of an enemy's main
          action, you can use a free triggered action to deal holy damage to
          that enemy equal to twice your Presence score.
        </Text>

        <Text>
          When an ally warded by you spends a recovery or ends an effect that is
          ended by a saving throw or ends at the end of their turn, you can use
          a free triggered action to use this ability on a new target.
        </Text>

        <Text>
          Additionally, you can spend 1 wrath to take the following free
          triggered actions:
        </Text>
        <BulletList>
          <Text>
            When a warded ally would become dying, they may spend a recovery.
          </Text>
          <Text>
            When a warded ally would be affected by a potency effect, the
            potency is reduced by 1.
          </Text>
          <Text>
            When a warded ally would move, they may shift instead, ignoring
            difficult terrain.
          </Text>
          <Text>
            When a creature warded by you within 10 squares makes a power roll,
            you cause them to gain an edge on the roll.
          </Text>
        </BulletList>
      </TextBlock>
    }
  />
);
