import {
  Page,
  Column,
  Text,
  Heading2,
  Heading4,
  TextBlock,
} from "@/components";

const Page1 = () => (
  <Page id="class-subclass">
    <Column>
      <TextBlock>
        <Heading2>Prayer</Heading2>
        <Text>
          Your god answers a prayer with enhancements to your body and mind.
          Choose one of the following prayers. You can change your prayer along
          with your ward (see Conduit Ward below) by praying to your god as a
          respite activity. (Quick Build: Prayer of Steel.)
        </Text>

        <Heading4>Prayer of Destruction</Heading4>
        <Text>
          Your god infuses wrath within your being. You gain a +1 bonus to
          rolled damage with magic abilities. When you use a magic area ability
          you can increase the ability’s area by 1 until the end of the
          encounter. If the area is a line, you only increase the size of the
          smaller dimension by two.
        </Text>

        <Heading4>Prayer of Soldier’s Skill</Heading4>
        <Text>
          Your god gives your mind the training of a soldier. You can use and
          gain the benefits of a kit (See Chapter 6: Kits for more information).
          You don't gain a ward alongisde your prayer, the range of your ranged
          magic abilities is reduced by 5, and you choose one conduit signature
          ability instead of two.
        </Text>

        <Heading4>Prayer of Speed</Heading4>
        <Text>
          Your god blesses your flesh and infuses it with divine quickness. You
          gain a +3 bonus to speed and to the distance you can shift when you
          take the Disengage move action. When you disengage, you can teleport
          instead of shifting.
        </Text>

        <Heading4>Prayer of Steel</Heading4>
        <Text>
          Your god fills your body with the light of creation, making you harder
          to hurt and move. You gain a +6 bonus to Stamina, and this bonus
          increases by 6 at 4th, 7th, and 10th levels. Additionally, you gain a
          +1 bonus to stability.
        </Text>
      </TextBlock>

      <Text className="italic">
        The base prayers (and similar features on other classes) are imbalanced.
        The Prayer of Steel is the strongest one, and it's not even close. In
        terms of kit math, it gets an equivalent of 4 points, whereas the +1
        damage on Prayer of Destruction would cost 1 point, and the +2 ranged
        distance on Prayer of Distance is worth 0.5 a point. In addition, the
        Prayer of Soldier's Skill is lacklustre considering you don't get any
        abilities with the Weapon tag, so the +1 damage bonus only does anything
        on free strikes. I've attempted to balance the various prayers, and
        rework Soldier's Skill to be more viable - and to feel more like a
        hybrid.
      </Text>
    </Column>

    <Column>{""}</Column>
  </Page>
);

export default Page1;
