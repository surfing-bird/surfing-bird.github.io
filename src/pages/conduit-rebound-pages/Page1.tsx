import {
  Page,
  Column,
  Text,
  Title,
  Heading2,
  Heading3,
  TextBlock,
  BulletList,
  Detail,
} from "@/components";
import { HealingGrace } from "@/abilities/conduit-untethered-abilities/HealingGrace";

const Page1 = () => (
  <Page id="class-subclass">
    <Column>
      <Title>Conduit Untethered</Title>

      <Heading2>Design Goals (And Who This Is For)</Heading2>
      <TextBlock>
        <Text>
          There a few pain points that I wanted to address with this rework. If
          you haven't found these to be an issue in your table - feel free to
          skip document entirely!
        </Text>

        <BulletList>
          <Detail
            detailName="Piety Gain"
            detailValue="The risk of praying is too low in comparison to the piety gain, such that you almost always choose to pray."
          />
          <Detail
            detailName="Healing Grace"
            detailValue="Healing Grace is so overhwelmingly strong that it outclasses all other healing abilities, making it pointless to pick any of them up."
          />
        </BulletList>

        <Text>
          This rework aims to address all of these issues, while still keeping
          the core mechanics of the class. Explanations will be provided for
          each change, detailing why it was made.
        </Text>
      </TextBlock>

      <Heading3>Piety in Combat</Heading3>

      <TextBlock>
        <Text>
          At the start of a combat encounter or some other stressful situation
          tracked in combat rounds (as determined by the Director), you gain
          piety equal to your Victories. At the start of each of your turns
          during combat, you gain 1d3 piety.
        </Text>

        <Text>
          Additionally, you can gain more piety by praying to the gods—but
          beware! Doing so can easily draw their ire, as the gods hate to be
          annoyed. Before you roll to gain piety at the start of your turn, you
          can pray (no action required). If you do, your roll gains the
          following additional effects:.
        </Text>

        <BulletList>
          <Text>
            If the roll is a 1, you gain 1 additional piety but anger the gods!
            You take psychic damage equal to 1d6 + your level, which can’t be
            reduced in any way.
          </Text>

          <Text>
            If the roll is a 2, you gain 1 additional piety and can activate a
            domain effect of your choice (see below), but anger the gods! You
            take psychic damage equal to 1d6 + your level, which can’t be
            reduced in any way.
          </Text>

          <Text>
            If the roll is a 3, you gain 2 additional piety and can activate a
            domain effect of your choice (see below).
          </Text>
        </BulletList>

        <Text>
          If you did not pray on your previous turn this encounter, you can pray
          without rolling, automatically gaining the benefits of having rolled a
          3.
        </Text>

        <Text>You lose any remaining piety at the end of the encounter.</Text>

        <Text className="italic">
          In vanilla, praying is a non-choice. Sure, you might not pray if the
          combat is almost over anyway, or you are really low on Stamina, but
          other than that - you simply always pray. The gain is too much, and
          the risk is too low. In this variation, I hope to make it so praying
          is a conscious choice, rather than an automatic one. You might pray
          every turn if you truly need the extra piety, but you could also
          choose to stagger the praying to avoid the risk of suffering damage.
        </Text>
      </TextBlock>
    </Column>

    <Column>
      <Heading2>Healing Grace</Heading2>

      <Text>
        You have the following ability, which you can use once on your turn.
      </Text>

      <HealingGrace />

      <Text className="italic">
        Healing Grace is incredibly strong. In fact, it's so strong that it
        makes it kind of pointless to pick any other healing abilities up, in
        addition to making your party able to win fights it has no business
        surviving. In this variation, I hope to make it so Healing Grace is a
        bit more balanced - it still can massively heal and cleanse a couple of
        PCs, but it can't stabilize the entire party on its own, making
        abilities like Sermon of Grace more viable pickups.
      </Text>
    </Column>
  </Page>
);

export default Page1;
