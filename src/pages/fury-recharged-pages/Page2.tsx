import { Page, Column, Heading2, Text } from "@/components";
import { ThunderRoar, YouAreAlreadyDead } from "@/abilities/fury-abilities";

const Page2 = () => (
  <Page id="class-subclass">
    <Column>
      <Heading2>Rebalanced Abilities</Heading2>
      <ThunderRoar />

      <Text className="italic">
        With Berserker's and Reaver's (and Stormwight's) forced movement buffs, Thunder Roar is
        incredibly strong 5-HR heroic. I've toned it down to be a
        tad more reasonable, while still being very strong.
      </Text>
    </Column>

    <Column>
      <YouAreAlreadyDead />
      <Text className="italic">
        Vanilla You Are Already Dead is the best 7-HR ability in the game, and
        one of the strongest heroics in the game in general. Since Elite monster
        Stamina goes up to 260, this ability might as well read 'Deal 260 damage
        at the end of the target's next turn.' Hopefully this version is more
        sane while still being a good pick.
      </Text>
    </Column>
  </Page>
);

export default Page2;
