import {
  Page,
  Column,
  Text,
  Title,
  Heading2,
  Heading3,
  TextBlock,
  Highlight,
  Detail,
  BulletList,
  AdvancementTable,
  Block,
} from "@/components";

const Page1 = () => (
  <Page id="class-subclass">
    <Column>
      <Title>Fury Recharged</Title>

      <Heading2>Design Goals (And Who This Is For)</Heading2>
      <TextBlock>
        <Text>
          There a few pain points that I wanted to address with this rework. If
          you haven't found these to be an issue in your table - feel free to
          skip document entirely!
        </Text>

        <BulletList>
          <Detail
            detailName="Condition Vulnerability"
            detailValue="The Fury, being a melee-only class, is extremely vulnerable to conditions such as slowed, frightened, and dazed. As opposed to the Null, the other melee-only class, it does not get anything to mitigate this weakness (like Reorder)."
          />
          <Detail
            detailName="Enhanced Identity"
            detailValue="Charge feels underutilized on the Fury, so I wanted to make it more of a core mechanic for it (rather than just for the Berserker aspect)."
          />
          <Detail
            detailName="Ferocity Table"
            detailValue="The ferocity table mechanic does not deliver on its intended fantasy. Not spending your Ferocity rather than using heroics is never actually a viable strategy."
          />
          <Detail
            detailName="Balance"
            detailValue="This rework will tone down some underpeforming Fury abilities, such as Thunder Roar and You Are Already Dead, to clear some power-budget for the new features in this package. I also boosted the Stormwight aspect, which feels underpowered compared to the other aspects."
          />
        </BulletList>

        <Text>
          This rework aims to address all of these issues, while still keeping
          the core identity of the class. Explanations will be provided for each
          change, detailing why it was made.
        </Text>
      </TextBlock>

      <Heading2>1st-Level Fury Features</Heading2>

      <Heading3>Unstoppable Force</Heading3>

      <Block>
        <TextBlock>
          <Text>
            Whenever you use the Charge main action, you ignore the effects of
            the slowed and frightened conditions during the movement, and you
            can use a strike signature ability or a strike heroic ability
            instead of a free strike. Additionally, you can jump as part of your
            charge.
          </Text>
        </TextBlock>

        <Text className="italic">
          This feature both makes charge a core mechanic of the Fury, and
          provides it with a thematic answer to their condition vulnerability.
        </Text>
      </Block>

      <Heading3>Primodrial Power</Heading3>

      <Block>
        <TextBlock>
          <Text>
            Whenever you use the Knockback maneuver, the forced movement
            distance gains a bonus equal to your Might score.
          </Text>

          <Text>
            Your speed is not halved if you are grabbing a creature of your size
            or larger, and while grabbing a creature you have a bonus to
            stability equal to your Night score.
          </Text>
        </TextBlock>

        <Text className="italic">
          Instead of reprinting the Knockback buff in every aspect's feature,
          I've consolidated it into one feature. In addition, I wanted to make
          the Grab maneuver more effective on the Fury, and being that being
          force moved is the easiest way to break it, a stability buff makes
          sense here.
        </Text>
      </Block>

      <Heading2>1st-Level Aspect Features</Heading2>

      {/* <Heading3>Primordial Cunning (Reaver)</Heading3>

      <TextBlock>
        <Text>
          Whenver you would push a target with forced movement, you can slide
          them instead. Additionally, you are never surprised.
        </Text>

        <Text>
          As your ferocity grows, you gain benefits as noted on the Growing
          Ferocity table.
        </Text>
      </TextBlock>

      <Heading3>Primordial Strength (Berserker)</Heading3>

      <TextBlock>
        <Text>
          Whenever you push another creature into an object, the creature takes
          extra damage equal to your Might score. Additionally, whenever you
          damage an object with a weapon strike, the strike deals extra damage
          equal to your Might score.
        </Text>

        <Text>
          As your ferocity grows, you gain benefits as noted on the Growing
          Ferocity table.
        </Text>
      </TextBlock> */}

      <Heading3>Primordial Wisdom (Stormwight)</Heading3>
      <Block>
        <TextBlock>
          <Text>
            Whenever you push another creature into another creature, choose one
            of the creatures to take extra damage equal to your Might score. You
            gain additional benefits based on your chosen Stormwight kit.
          </Text>
          <Text>
            As your ferocity grows, you gain benefits as noted on the Growing
            Ferocity table.
          </Text>
        </TextBlock>

        <Text className="italic">
          I've given the Stormwight aspect an additional boost, since its
          various aspect bonuses are generally underwhelming. In truth, the
          Stormwight aspect deserves a more comprehensive overhaul, but I've
          chosen to give it a simple buff in order to keep this rework minimal.
        </Text>
      </Block>
    </Column>

    <Column>
      <Block>
        <Heading3>Growing Ferocity</Heading3>
        <Text>
          As your ferocity grows, you gain benefits as noted on the Growing
          Ferocity table. Each benefit is gained when you reach its Ferocity
          threshold, and only once per encounter. This table replaces the
          aspect-specific ferocity tables for every primodrial aspect.
        </Text>

        <AdvancementTable
          title="Growing Ferocity"
          columns={["Ferocity", "Benefit"]}
          rows={[
            {
              Ferocity: "4",
              Benefit: "Gain a surge.",
            },
            {
              Ferocity: "6",
              Benefit:
                "The next time you use a maneuver, you can use an additional maneuver as a free maneuver on that turn.",
            },
            {
              Ferocity: "8",
              Benefit: "Gain two surges.",
            },
            {
              Ferocity: "10 (4th-level)",
              Benefit:
                "The next time you use a heroic ability it deals additional damage equal to four times your Might score.",
            },
            {
              Ferocity: "12 (7th-level)",
              Benefit:
                "The next time you use a main action, you can use an additional main action as a free maneuver on that turn.",
            },
          ]}
        />

        <Text className="italic">
          The vanilla ferocity table's bonuses fail to entice the player to
          actually avoid using their ferocity, such that the entire table
          itself, apart from the first tier which is effectively always active,
          feels like a tertiary mechanic. Additionally, the very premise of
          wanting to make the player hoard their HR and spend it to enjoy
          passive benefits is fundamentally flawed in my eyes - since it leads
          to less cinematic gameplay. This table attempts to keep the original
          spirit and theme of the original mechanic (holding onto your rage and
          building it up), but making it more enticing to engage in, while still
          allowing the player to feel free to spend their Ferocity once they've
          collected their desired benefit.
        </Text>

        <Text className="italic">
          Given that the 2 Ferocity tier benefits were moved to be a passive for
          each subclass, there is less of a need to have a separate table for
          each aspect. Besides, there are only so many 'instant effect' bonuses
          one can give at tiers 4 and 8 that don't rely on positioning or
          require excessive tracking.
        </Text>
      </Block>

      {/* <AdvancementTable
        title="Growing Ferocity"
        columns={["Ferocity", "Benefit"]}
        rows={[
          {
            Ferocity: "4",
            Benefit: "Gain temporary Stamina equal to your Might score.",
          },
          {
            Ferocity: "6",
            Benefit:
              "The next time you use a maneuver, you can use an additional maneuver as a free maneuver on that turn.",
          },
          {
            Ferocity: "8",
            Benefit: "Gain temporary Stamina equal to twice your Might score.",
          },
          {
            Ferocity: "10 (4th-level)",
            Benefit:
              "The next time you use a main action, you can use an additional main action as a free maneuver on that turn.",
          },
          {
            Ferocity: "12 (7th-level)",
            Benefit:
              "The next time you use a heroic ability it deals additional damage equal to four times your Might score.",
          },
        ]}
      /> */}

      <Heading2>2nd-Level Berserker Aspect Features</Heading2>

      <Heading3>Stampede</Heading3>

      <TextBlock>
        <Text>
          When you use the Charge main action, moving through enemy squares does
          not count as difficult terrain during this movement, and each enemy
          you move through takes damage equal to your Might score and is{" "}
          <Highlight>M &lt; AVERAGE</Highlight> prone.
        </Text>
      </TextBlock>
    </Column>
  </Page>
);

export default Page1;
