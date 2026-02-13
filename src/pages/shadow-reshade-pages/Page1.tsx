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

const Page1 = () => (
  <Page id="class-subclass">
    <Column>
      <Title>Shadow Reshade</Title>

      <Heading2>Design Goals (And Who This Is For)</Heading2>
      <TextBlock>
        <Text>
          For this rework and any others I make, I will always attempt to keep
          my changes to a minimum.
        </Text>

        <Text>
          There a few pain points that I wanted to address with this rework. If
          you haven't found these to be an issue in your table - feel free to
          skip document entirely!
        </Text>

        <BulletList>
          <Detail
            detailName="Insight Gain"
            detailValue="The insight discount mechanic feels limiting, making the Shadow lag behind in heroic resource gain."
          />
          <Detail
            detailName="Melee Viability"
            detailValue="There is not enough of an incentive to pick a melee kit as opposed to a ranged one."
          />
          <Detail
            detailName="Overall Balance"
            detailValue="Some abilities feel either too strong or too weak."
          />
        </BulletList>

        <Text>
          This rework aims to address all of these issues, while still keeping
          the core mechanics of the class. Explanations will be provided for
          each change, detailing why it was made.
        </Text>
      </TextBlock>

      <Heading3>Insight in Combat</Heading3>

      <TextBlock>
        <Text>
          At the start of a combat encounter or some other stressful situation
          tracked in combat rounds (as determined by the Director), you gain
          insight equal to your Victories. At the start of each of your turns
          during combat, you gain 1d3 insight.
        </Text>

        <Text>
          Additionally, the first time each combat round that you deal damage
          incorporating 1 or more surges, you gain 1 insight.
        </Text>

        <Text>
          The first time in a combat round that you use an ability with an edge
          or double edge, if it’s a heroic ability, it costs 1 less. Otherwise,
          you gain 1 insight.
        </Text>

        <Text>You lose any remaining insight at the end of the encounter.</Text>

        <Text className="italic">
          The secondary vanilla insight gain is lacklustre. You can't always use
          a heroic every round to make use of it, it discourages saving insight
          for big heroic abilities, and it unnecessarily hurts non-targeted
          heroics. This change should solve all of those issues, while still
          letting you use a heroic ability "before the curve".
        </Text>
      </TextBlock>
    </Column>

    <Column>
      <Heading2>1st-Level Features</Heading2>

      <Heading3>Shadowcraft</Heading3>

      <Text className="mb-0">
        You've chosen to specialize in a particular style of fighting, called a
        Shadowcraft. Choose one of the following Shadowcrafts:
      </Text>

      <BulletList>
        <Detail
          detailName="Ghostshot"
          detailValue="When you make a Ranged weapon power roll against a target that is 8 or more spaces away, you gain a surge which you can use immediately. You have an edge on opposed Agility tests using the hide skill."
        />
        <Detail
          detailName="Darkblade"
          detailValue="You gain a bonus to speed equal to your agility score. You gain an edge on power rolls for melee abilities against enemies that have no adjacent allies, and when make a power roll against an enemy you are flanking you gain a surge you can use immediately. After resolving a melee Strike, you can Disengage as a free triggered action."
        />
        <Detail
          detailName="Crossfade"
          detailValue="When you make a melee or ranged Strike, if you haven’t made a strike of that type since the beginning of your last turn, you gain an edge on the power roll. When you make a ranged Strike against an enemy within 5 squares with an edge, or a melee strike against an enemy with an edge, you can Disengage as a free triggered action after the Strike resolves."
        />
      </BulletList>

      <Text className="italic">
        It's hard to justify running a melee Shadow in vanilla, other than for
        the extra Stamina of a melee kit. This is because gaining edge with
        high-ground is generally easier than flanking, hiding is much easier
        when your position isn't as constrained by having to stay close to your
        enemies, and because ranged generally offers more flexibility in
        targeting. This feature is meant to make the melee and hit-switching
        playstyles more appealing by giving concrete incentives to use them. The
        Ghostshot doesn't get as many bonuses, because being ranged is already a
        significant advantage. Finally, these bonuses overall give you more
        flexibility in gaining edge.
      </Text>

      <Heading3>Swift Shade</Heading3>

      <Text>
        You gain a bonus to the number of squares you can shift when you take
        the Disengage move action equal to your Agility score.
      </Text>

      <Text className="italic">
        This ability enhances your chosen Shadowcraft and I'm No Threat, while
        encouraging a more hit-and-run playstyle for the Shadow.
      </Text>
    </Column>
  </Page>
);

export default Page1;
