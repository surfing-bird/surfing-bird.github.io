import { PagePDF, ColumnPDF, Text, Heading2, Heading3 } from "@/components";
import {
  SevenfoldForm,
  Singularity,
  UnlimitedBladeworks,
  SplitTheWorldAsunder,
  MasterWrit,
  FluxOverdrive,
  AdamantSeal,
} from "@/abilities";

const Page9 = () => (
  <PagePDF id="page-9">
    <ColumnPDF>
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
      <UnlimitedBladeworks />
      <SplitTheWorldAsunder />
    </ColumnPDF>

    <ColumnPDF>
      <Heading2>9th-Level Features</Heading2>
      <Text>As a 9th-level scion, you gain the following features.</Text>
      <Heading2>9th-Level Art Ability</Heading2>
      <Text>Your scion Art grants your choice of one of two abilities.</Text>

      <Heading3>9th-Level Blinkblade Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <FluxOverdrive />
      <FluxOverdrive />

      <Heading3>9th-Level Runewright Ability</Heading3>
      <Text>Choose one of the following abilities.</Text>
      <MasterWrit />
      <AdamantSeal />
    </ColumnPDF>
  </PagePDF>
);

export default Page9;
