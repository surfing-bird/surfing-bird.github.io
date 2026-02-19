import {
  Page,
  Column,
  Text,
  Title,
  Heading2,
  TextBlock,
  BulletList,
  Detail,
  Heading3,
} from "@/components";
import { Aegis } from "@/abilities/censor-reformed-abilities/Aegis";
import { YourLifeIsMine } from "@/abilities/censor-reformed-abilities/YourLifeIsMine";

const Page1 = () => (
  <Page id="class-subclass">
    <Column>
      <Title>Censor Reformed</Title>

      <Heading2>Design Goals (And Who This Is For)</Heading2>
      <TextBlock>
        <Text>
          There a few pain points that I wanted to address with this rework. If
          you haven't found these to be an issue in your table - feel free to
          skip document entirely!
        </Text>

        <BulletList>
          <Detail
            detailName="Tonal Cohesion"
            detailValue="To me, My Life For Yours does not feel like it fits the tone of the Censor. It would fit perfectly on a Paladin class, but feels out of place on a Censor. Hence, this rework adds an alternative triggered action to the class."
          />
          <Detail
            detailName="Alternative Theme"
            detailValue="On the flipside, some might find the inquisitor-like fiction of the Censor to be uncomfortable, or would just want a more 'Paladin' feel to it. Hence, this reworks adds an alternatie maneuver to the class."
          />
          <Detail
            detailName="Subclass Balance"
            detailValue="This rework attempts to rebalance the subclasses so Oracle doesn't feel like the best option."
          />
        </BulletList>

        <Text>
          This rework aims to address all of these issues, while still keeping
          the core identity of the class. Explanations will be provided for each
          each change, detailing why it was made.
        </Text>
      </TextBlock>

      <Heading3>Divine Doctrine</Heading3>
      <Text>
        Your divine doctrine determines the manifestation of your god's will.
        Choose one of the following doctrines:
        <BulletList>
          <Text>
            <span className="font-bold"> Grace:</span> You gain the Aegis
            maneuver and the My Life For Yours triggered ability.
          </Text>
          <Text>
            <span className="font-bold"> Retribution:</span> You gain the
            Judgement maneuver and the Your Life Is Mine triggered ability.
          </Text>
        </BulletList>
      </Text>

      <Heading2>Aegis</Heading2>
      <Text>
        You place a ward of divine protection upon an ally, shielding them with
        the power of your god.
      </Text>

      <Aegis />

      {/* Judgment Order Benefit
The first time on a turn that you use your Judgment ability to judge a
creature, you gain the following benefit based on your order:
¥ Exorcist: You can teleport up to a number of squares equal to twice
your Presence score. This movement must take you closer to the
judged creature. You do not need line of effect to your destination.
¥ Oracle: You can deal holy damage equal to twice your Presence score
to the judged creature.
¥ Paragon: You can vertical pull the judged creature up to a number of
squares equal to twice your Presence score. */}
    </Column>

    <Column>
      <Heading2>Your Life Is Mine</Heading2>
      <Text>
        Your god's wrath flows through you as you punish those who would harm
        the righteous.
      </Text>

      <YourLifeIsMine />

      <Heading2>Judgement Order Benefit</Heading2>
      <Text>
        The first time on a turn that you use your Judgment ability to judge a
        creature, you gain the following benefit based on your order:
      </Text>

      <BulletList className="mt-[-0.5rem]">
        <Text>
          <span className="font-bold">Exorcist:</span> You can teleport to a
          space adjacent to the judged creature. If you were already adjacent,
          that creature is slowed (EoT) instead.
        </Text>
        <Text>
          <span className="font-bold">Oracle:</span> You either gain 2 surges or
          gain temporary Stamina equal to twice your Presence score.
        </Text>
        <Text>
          <span className="font-bold">Paragon:</span> You can vertical pull the
          judged creature up to a number of squares equal to twice your Presence
          score.
        </Text>
      </BulletList>

      <Text className="italic">
        The Oracle spend in vanilla isn't especially on-theme for the Oracle,
        and the Exorcist spend is too situational compared to the other two
        which always have value.
      </Text>

      <Heading2>Aegis Order Benefit</Heading2>
      <Text>
        The first time on a turn that you use your Aegis ability to ward an
        ally, you gain the following benefit based on your order:
      </Text>

      <BulletList className="mt-[-0.5rem]">
        <Text>
          <span className="font-bold">Exorcist:</span> You can either teleport
          to a space adjacent to the warded ally, or the ally can teleport a
          number of squares up to twice your Presence score.
        </Text>
        <Text>
          <span className="font-bold">Oracle:</span> The warded ally gains 2
          surges.
        </Text>
        <Text>
          <span className="font-bold">Paragon:</span> The warded ally may slide
          a number of squares equal to twice your Presence score. They take no
          damage from any resulting collisions.
        </Text>
      </BulletList>
    </Column>
  </Page>
);

export default Page1;
