import { Page, Column, Heading2, Text, Block } from "@/components";
import {
  ThunderRoar,
  BloodForBlood,
  MakePeaceWithYourGod,
  FaceTheStorm,
  YouAreAlreadyDead,
  DemonUnleashed,
  SteelBreaker,
} from "@/abilities/fury-abilities";

const Page2 = () => (
  <Page id="class-subclass">
    <Column>
      <Heading2>Rebalanced Abilities</Heading2>

      <Block>
        <ThunderRoar />
        <Text className="italic">
          With Berserker's and Reaver's (and Stormwight's) forced movement
          buffs, Thunder Roar is incredibly strong 5-HR heroic. I've toned it
          down to be a tad more reasonable, while still being very strong.
        </Text>
      </Block>

      <Block>
        <MakePeaceWithYourGod />
        <Text className="italic">
          Make Peace With Your God! is an awkward ability. Early on, it's hard
          to use in tandem with another heroic due to the high combined HR cost,
          and it isn't worth using on a signature. Later on when your Ferocity
          generation increases, it also becomes easier to achieve a tier 3
          outcome. This version should make it both more flexible in usage and
          scale more smoothly
        </Text>
      </Block>

      <Block>
        <BloodForBlood />
        <Text className="italic">
          Blood for Blood! in vanilla is simply underwhelming, especially when
          compared to Your Entrails Are Your Extrails! which costs 3 Ferocity.
        </Text>
      </Block>
    </Column>

    <Column>
      <Block>
        <DemonUnleashed />
        <Text className="italic">
          Demon Unlease in vanilla is extremely underwhelming. Frightening
          enemeies that are already adjacent to you barely does anything to
          actually hinder their movement, which is the strongest part of the
          frightened condition. Ultimately all it does is give them a bane on
          ability rolls against you, and give you an edge on power rolls against
          them, which is far from being worth a 7-HR maneuver.
        </Text>
      </Block>

      <Block>
        <FaceTheStorm />
        <Text className="italic">
          All I did was clarify that you add the "twice your Might score" damage
          to strikes that apply the taunted condition, which would include
          strikes that benefit from this ability.
        </Text>
      </Block>

      <Block>
        <SteelBreaker />
        <Text className="italic">
          Steel Breaker is an OK ability when you get it, but it scales poorly
          as your Stamina scales to potentially hundreds, losing it's relevance.
          The fact it costs a maneuver is salt on the wound. This version
          removes the awakwardness of it being a maneuver, and makes it scale,
          at the cost of giving a little less temporary Stamina at the level you
          get it.
        </Text>
      </Block>

      <Block>
        <YouAreAlreadyDead />
        <Text className="italic">
          Vanilla You Are Already Dead is the best 7-HR ability in the game, and
          one of the strongest heroics in the game in general. Since Elite
          monster Stamina goes up to 260, this ability might as well read 'Deal
          260 damage at the end of the target's next turn.' Hopefully this
          version is more sane while still being a good pick.
        </Text>
      </Block>
    </Column>
  </Page>
);

export default Page2;
