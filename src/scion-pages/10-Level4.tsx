import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  TextBlock,
  Detail,
} from "@/components";

const Level4 = () => (
  <Page id="level-4">
    <Column>
      <Heading2>4th-Level Features</Heading2>
      <Text>As a 4th-level scion, you gain the following features.</Text>

      <Heading3>Characteristic Increase</Heading3>
      <Text>Your Agility and Reason scores each increase to 3.</Text>

      <Heading3>Perk</Heading3>
      <Text>You gain one perk of your choice.</Text>

      <Heading3>Skill</Heading3>
      <Text>You gain one skill of your choice.</Text>

      <Heading3>Elemental Attunement</Heading3>
      <TextBlock>
        <Text>
          Through rigorous training and refinement of your magical senses,
          you've learned to perceive the subtle resonance of elemental forces.
          You automatically sense whether any creature within 10 squares has
          damage immunity or damage weakness to acid, cold, corruption, fire,
          lightning, poison, or sonic damage and the value of that immunity or
          weakness. Additionally, you automatically sense any source of one of
          those damage types within 10 squares, such as a fire or a source of
          elemental power.
        </Text>
      </TextBlock>
    </Column>

    <Column>
      <Heading3>Eternal Student</Heading3>
      <TextBlock>
        <Text>
          Project points earned towards the Learn from a Master project are
          doubled. If you begin the 'acquire ability' project goal, you may use
          an ally as the project source.
        </Text>
      </TextBlock>

      <Heading3>Shifting Balance</Heading3>
      <div>
        <Text>
          You gain an additional way to gain balance, depending on your Art:
        </Text>

        <div className="flex flex-col gap-1">
          <Detail
            detailName="Blinkblade"
            detailValue="You gain 2 balance the first time in an encounter that you or an ally within 10 squares teleports or shifts."
          />
          <Detail
            detailName="Runewright"
            detailValue="You gain 2 balance the first time in an encounter that a creature within 10 squares is affected by an effect that is ended by a saving throw."
          />
          <Detail
            detailName="Soulforged"
            detailValue="You gain 2 balance the first time in an encounter that you or an ally within 10 squares uses a heroic ability."
          />
          <Detail
            detailName="Darksworn"
            detailValue="You gain 2 balance the first time in an encounter that you take damage."
          />
        </div>
      </div>
    </Column>
  </Page>
);

export default Level4;
