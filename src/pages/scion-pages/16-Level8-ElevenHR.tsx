import { Page, Column, Text, Heading2 } from "@/components";
import {
  SevenfoldForm,
  Singularity,
  UnlimitedBladeworks,
  SplitTheWorldAsunder,
} from "@/abilities/scion-abilities";

const Level8ElevenHR = () => (
  <Page id="level-8-eleven-hr">
    <Column>
      <Heading2>11-Balance Abilities</Heading2>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 11 balance to use.
      </Text>

      {/* <Ability
        title="Calamitous Strike (11 Balance)"
        subtitle="Find relief, the end comes swiftly for you."
        keywords="Magic, Melee, Weapon, Strike"
        actionType="Main action"
        range="Melee 1"
        targets="One non-leader, non-solo creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "If the target is winded, they are destroyed (see effect).",
          middle:
            "If the target is winded, they are destroyed (see effect). Otherwise, they are reduced to half their Stamina.",
          high: "If the target is winded, they are destroyed (see effect). Otherwise, they take damage equal to half their Stamina.",
        }}
        effect="Destroyed: When a creature is destroyed, its Stamina is reduced to 0, and any of their abilities that is triggered by being reduced to 0 Stamina is ignored."
      /> */}

      <SevenfoldForm />

      <Singularity />
    </Column>

    <Column>
      <UnlimitedBladeworks />

      <SplitTheWorldAsunder />
    </Column>
  </Page>
);

export default Level8ElevenHR;
