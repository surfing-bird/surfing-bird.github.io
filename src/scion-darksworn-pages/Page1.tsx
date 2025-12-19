import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading2,
  Heading3,
  BulletList,
  AdvancementTable,
  TextBlock,
  Detail,
  Feature,
  Heading4,
  Heading5,
} from "@/components";
import {
  BlackestNight,
  ChainOfTorment,
  PainIsPower,
  ScarletDirge,
  FurysCall,
} from "@/abilities";

const Page1 = () => (
  <PagePDF id="level-1">
    <ColumnPDF>
      <Heading3>Darksworn</Heading3>
      <TextBlock>
        <Text>
          The Darksworn embraces forbidden power - blood magic, curses, and the
          power of pain. They bleed so their foes may suffer, sacrificing
          vitality to bring ruin to all those who stand in their way. You gain
          the Intimidate skill.
        </Text>

        <Text className="italic">
          Pain is a weapon. I will stop at nothing.
        </Text>
      </TextBlock>

      <Heading3>Signature Abilities</Heading3>
      <Text>
        When you select a signature ability at 1st level, you may also select
        from the following abilities.
      </Text>
      <FurysCall />

      <Heading3>Art Features</Heading3>
      <div />
      <Feature title="Vorator Cruciatum">
        <Text>You increase your number of Recoveries by 2.</Text>
      </Feature>

      <Heading3>Art Maneuver</Heading3>
      <div />
      <ChainOfTorment />

      <Heading3>Art Triggered Action</Heading3>
      <div />
      <PainIsPower />
    </ColumnPDF>

    <ColumnPDF>
      <Heading3>2nd-Level Darksworn Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <BlackestNight />
      <ScarletDirge />

      <Heading4>2nd-Level Art Feature</Heading4>
      <div />
      <Feature title="Sacramentum Sanguis">
        <Text>
          Whenever you deal rolled damage to a creature you may choose to deal
          your Reason in damage to yourself to gain two surges which must be
          used on the triggering ability.
        </Text>
      </Feature>

      <Heading2>4th-Level Features</Heading2>

      <Heading3>Shifting Balance</Heading3>
      <Text>
        You gain 2 balance the first time in an encounter that you take damage.
      </Text>

      <Heading2>5th-Level Features</Heading2>

      <Feature title="Memento Mori">
        <Text>
          If you are winded you can target an additional enemy creature when
          using Chain of Torment.
        </Text>
      </Feature>
    </ColumnPDF>
  </PagePDF>
);

export default Page1;
