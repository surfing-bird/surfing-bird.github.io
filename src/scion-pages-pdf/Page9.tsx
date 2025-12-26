import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading2,
  Heading3,
  Feature,
  AdvancementTable,
  Heading4,
} from "@/components";
import {
  SevenfoldForm,
  Singularity,
  UnlimitedBladeworks,
  SplitTheWorldAsunder,
} from "@/scion-abilities";

const Page9 = () => (
  <PagePDF id="page-9">
    <ColumnPDF>
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

      <Heading3>Eternal Master</Heading3>
      <Text>
        The master's path is that of endless study. Whenever you take a respite,
        choose any heroic ability of an ally's class. You gain this heroic
        ability until your next respite, which can be paid for using the Heroic
        Resource of your class. You can't use a heroic ability that requires a
        class feature you don't have.
      </Text>

      <Heading3>Unravel Weakness</Heading3>
      <Text>
        Whenever you deal typed damage to an enemy, you may spend 2 balance to
        inflict the target with weakness 5 to that damage type (save ends). The
        weakness is imposed after the damage is resolved.
      </Text>

      <Heading2>8th-Level Features</Heading2>
      <Text>As an 8th-level scion, you gain the following features.</Text>

      <Heading4 className="text-center">8th-Level Scion Art Features</Heading4>
      <AdvancementTable
        columns={["Subclass", "Features"]}
        rows={[
          { Subclass: "Blinkblade", Features: "Phase Field" },
          { Subclass: "Runewright", Features: "Grand Rune" },
          { Subclass: "Soulforged", Features: "Soul Manifest" },
        ]}
      />

      <Feature title="Phase Field">
        <Text>
          Whenever you teleport by any means, you don't require line of sight to
          the target location. Additionally, any ally adjacent to you may use
          Blink as a maneuver with this benefit, but cannot use its spend
          effect.
        </Text>
      </Feature>

      <Feature title="Grand Rune">
        <Text>
          When a Runebrand is detonated, it applies its effect to every enemy
          within range 4 of it, instead of within range 3. In addition, your
          Runebrand ability now has a 'Ranged 5' range.
        </Text>
      </Feature>

      <Feature title="Soul Manifest">
        <Text>
          Choose a Soulshape form, its effects are now permanent. When it is
          chosen when using Soulshape, the bonuses increase further. You may
          change the chosen form for this feature as a downtime activity.
        </Text>
      </Feature>

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
    </ColumnPDF>

    <ColumnPDF>
      <Heading2>11-Balance Abilities</Heading2>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 11 balance to use.
      </Text>

      <SevenfoldForm />
      <Singularity />
      <UnlimitedBladeworks />
      <SplitTheWorldAsunder />
    </ColumnPDF>
  </PagePDF>
);

export default Page9;
