import { Ability, BulletList, Text, TextBlock } from "@/components";

export const RuneOfPower = () => (
  <Ability
    title="Rune of Strength (9 Balance)"
    subtitle="Your brand your allies with an empowering rune, granting them strength beyond their normal means."
    keywords="Magic, Melee"
    actionType="Maneuver"
    range="Special"
    targets="Two creatures"
    effect={
      <TextBlock>
        <Text>
          <strong>Effect:</strong> Choose up to two targets within the range of
          your Runebrand ability. Until the end of the encounter or you are
          dying, the targets gains the following benefits:
          <BulletList>
            <Text>
              Abilities with rolled damage have their damage increased by your
              Reason score.
            </Text>
            <Text>
              At the beginning of each of their turns, they gain an additional 3
              of their Heroic Resource.
            </Text>
            <Text>
              At the beginning of their turn, they may spend 1 recovery.
            </Text>
            <Text>
              At the beginning of their turn, they end one condition or effect
              on themself that is ended by a saving throw or that ends at the
              end of their turn.
            </Text>
          </BulletList>
        </Text>
      </TextBlock>
    }
  />
);
