import {
  Page,
  Column,
  Block,
  Text,
  Title,
  Heading2,
  TextBlock,
  BulletList,
  Detail,
  AdvancementTable,
} from "@/components";
import {
  DramaticMonologue,
  PowerChord,
  StarPower,
  Riposte,
  TurnaboutIsFairPlay,
  Harmonize,
} from "@/abilities/troubadour-abilities";

const Page1 = () => (
  <Page id="class-subclass">
    <Column>
      <Title>Troubadour Retold</Title>

      <Heading2>Design Goals (And Who This Is For)</Heading2>
      <TextBlock>
        <Text>
          There a few pain points that I wanted to address with this rework. If
          you haven't found these to be an issue in your table - feel free to
          skip document entirely!
        </Text>

        <BulletList>
          <Detail
            detailName="Poor Routines"
            detailValue="Some routines are very underwhelming."
          />
          <Detail
            detailName="Subclass Balance"
            detailValue="Virtuoso is the best subclass by a decent margin."
          />
          <Detail
            detailName="Imbalanced Heroic Abilities"
            detailValue="The 5-HR heroics on offer are imbalanaced, with Dramatic Reversal being by far the best option."
          />
        </BulletList>

        <Text>
          This rework aims to address all of these issues, while still keeping
          the core identity of the class. Explanations will be provided for each
          each change, detailing why it was made.
        </Text>
      </TextBlock>

      {/* <Heading3>Drama in Combat</Heading3>
      <TextBlock>
        <Text>
          At the start of a combat encounter or some other stressful situation
          tracked in combat rounds, you gain lorem equal to your Victories. At
          the start of each of your turns during combat, you gain 1d3 lorem.
        </Text>

        <Text>
          Additionally, the first time each combat round that you deal damage
          incorporating 1 or more surges, you gain 1 lorem.
        </Text>

        <Text>
          The first time in a combat round that you use an ability with an edge
          or double edge, if it's a heroic ability, it costs 1 less. Otherwise,
          you gain 1 lorem.
        </Text>

        <Text>You lose any remaining lorem at the end of the encounter.</Text>

        <Text className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </Text>
      </TextBlock> */}

      <AdvancementTable
        title="1st-Level Class Act Features"
        columns={["Subclass", "Class Act Features"]}
        rows={[
          {
            Subclass: "Auteur",
            "Class Act Features": "Dramatic Monologue",
          },
          {
            Subclass: "Duelist",
            "Class Act Features": "Star Power",
          },
          {
            Subclass: "Virtuoso",
            "Class Act Features": "Power Chord",
          },
        ]}
      />

      <Block>
        <DramaticMonologue />
        <Text className="italic">
          Dramatic Monologue is simply underwhelming in vanilla, so I made it
          affect 2 allies at base.
        </Text>
      </Block>

      <Block>
        <PowerChord />
        <Text className="italic">
          Power Chord's area is a bit absurd. I toned it down to be more
          reasonable for a maneuver.
        </Text>
      </Block>

      <Block>
        <StarPower />
        <Text className="italic">
          Star Power is criminally uninteractive in vanilla. You just... Use it
          at the start of your turn, basically every turn. This version makes
          you consider when and how to use it, and helps it stay relevant as
          your odds of getting a tier 2 outcome increase as you level up.
        </Text>
      </Block>
    </Column>

    <Column>
      <AdvancementTable
        title="Class Act Triggered Actions"
        columns={["Subclass", "Class Act Triggered Action"]}
        rows={[
          {
            Subclass: "Auteur",
            "Class Act Triggered Action": "Turnabout Is Fair Play",
          },
          { Subclass: "Duelist", "Class Act Triggered Action": "Riposte" },
          { Subclass: "Virtuoso", "Class Act Triggered Action": "Harmonize" },
        ]}
      />

      <Block>
        <Riposte />
        <Text className="italic">
          I simply increased the range of this ability to make it more usable.
        </Text>
      </Block>

      <Block>
        <TurnaboutIsFairPlay />
        <Text className="italic">
          Not being able to negate double edges and banes only on the spend
          feels a bit bad, so I moved that effect to the base effect.
        </Text>
      </Block>

      <Block>
        <Harmonize />
        <Text className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium.
        </Text>
      </Block>
    </Column>
  </Page>
);

export default Page1;
