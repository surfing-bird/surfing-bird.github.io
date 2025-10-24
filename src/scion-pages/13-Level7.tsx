import { Page, Column, Text, Heading2, Heading3 } from "@/components";

const Level7 = () => (
  <Page id="level-7">
    <Column>
      <Heading2>7th-Level Features</Heading2>
      <Text>As a 7th-level scion, you gain the following features.</Text>

      <Heading3>Characteristic Increase</Heading3>
      <Text>
        All of your characteristics increase by 1, to a maximum score of 4.
      </Text>

      <Heading3>Immaculate Balance</Heading3>
      <Text>
        At the start of each of your turns during combat, you gain 3 balance
        instead of 2.
      </Text>

      <Heading3>Skill</Heading3>
      <Text>You gain a skill of your choice.</Text>
    </Column>

    <Column>
      <Heading3>Eternal Master</Heading3>
      <Text>
        The master's path is that of endless study. Whenever you take a respite,
        choose a heroic ability of an ally's class. You gain this heroic
        ability, which can be paid for using the Heroic Resource of your class.
        You can't use a heroic ability that requires a class feature you don't
        have.
      </Text>

      <Heading3>Unravel Weakness</Heading3>
      <Text>
        Whenever you deal typed damage to an enemy, you may spend 3 balance to
        inflict the target with weakness 5 to that damage type (save ends). The
        weakness is imposed after the damage is resolved.
      </Text>
    </Column>
  </Page>
);

export default Level7;
