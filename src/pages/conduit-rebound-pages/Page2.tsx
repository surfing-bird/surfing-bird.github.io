import {
  Page,
  Column,
  Text,
  Heading2,
  Heading4,
  TextBlock,
} from "@/components";
import { FaithIsOurArmor } from "@/abilities/conduit-abilities/FaithIsOurArmor";

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
          encounter. If the area is a line, you increase the size of the large
          dimension by two.
        </Text>

        <Heading4>Prayer of Distance</Heading4>
        <Text>
          Your god blesses you with the ability to stretch your divine magic
          farther. Your allies are always considered to be within range and line
          of effect of your magic abilities, and you can use your magic
          abilities as if you were in the same square as any of your allies.
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

    <Column>
      <Heading2>Rebalanced Abilities</Heading2>

      <FaithIsOurArmor />
      <Text className="italic">
        Early on, Faith is Our Armor is much too strong. It's temporary Stamina
        bonus is incredibly potent at reducing recovery attrition for the
        heroes. For perspective, the minimum Stamina a hero can have at 1st
        level is 18, with the maximum being 33 (with Shining Armor, without
        ancestry traits). And so, 15 Temporary Stamina at level 1 is worth more
        than 2 recoveries' worth for some characters. And even for very high
        Stamina characters, 10 Temporary Stamina is almost an entire recovery's
        worth. And to top this all of, this ability can be used outside of
        combat, as a pre-buff. On the flip-side, this ability becomes
        effectively unusable in combat at higher levels, since the temporary
        Stamina it gives gets massively outscaled by hero Stamina, encouraging
        players to either only use it as a pre-buff, or just retrain it for
        something else, which is kind of lame if you ask me. With this version I
        hope to tone down the effectiveness of this ability at early levels,
        while keeping it viable as the party levels.
      </Text>
    </Column>
  </Page>
);

export default Page1;
