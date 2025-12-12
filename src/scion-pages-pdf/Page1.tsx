import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading2,
  Heading3,
  BulletList,
  AdvancementTable,
  TextBlock,
  Detail,
} from "@/components";

const Page1 = () => (
  <PagePDF id="level-1">
    <ColumnPDF>
      <Heading2>Basics</Heading2>
      <div className="flex flex-col gap-1">
        <Detail
          detailName="Starting Characteristics"
          detailValue="You start with an Agility of 2 and a Reason of 2, and can choose
    one of the following arrays for your other characteristic scores:"
        />

        <BulletList>
          <Text>2, -1, -1</Text>
          <Text>1, 1, -1</Text>
          <Text>1, 0, 0</Text>
        </BulletList>

        <div className="flex flex-col gap-2">
          <Detail detailName="Potency" detailValue="Reason" />

          <Detail detailName="Starting Stamina at 1st Level" detailValue="21" />

          <Detail
            detailName="Stamina Gained at 2nd and Higher Levels"
            detailValue="9"
          />
          <Detail detailName="Recoveries" detailValue="8" />

          <Detail
            detailName="Skills"
            detailValue="Magic and Strategy, plus choose any two skills from the exploration skill group."
          />
        </div>
      </div>
      <Heading2>1st-Level Features</Heading2>
      <Text>As a scion, you gain the following features.</Text>
      <Heading3>Art</Heading3>
      <TextBlock>
        <Text>
          Each scion is a single, carefully chosen inheritor of a different Art.
          The masters of each Art hold different ideals, and choose their scions
          according to their adherence to these ideals - and their capability to
          uphold them.
        </Text>
        <Text>
          You were trained in an Art chosen from the following options, each of
          which grants you a skill.
        </Text>
      </TextBlock>
      <Heading3>Blinkblade</Heading3>
      <TextBlock>
        <Text>
          The Blinkblade is a master of teleportation magic, using it to blink
          in and out of reach with uncanny speed - difficult to catch, and
          harder still to escape. You gain the Gymnastics skill.
        </Text>

        <Text className="mx-auto">
          <p style={{ fontFamily: "Cinzel Decorative" }}>
            No cage can hold me. I choose my path.
          </p>
        </Text>
      </TextBlock>
      <Heading3>Runewright</Heading3>
      <TextBlock>
        <Text>
          The Runewright wields the ancient craft of runebranding to sear
          volatile runes onto living beings and shape the battlefield through
          groundlaid writs. You gain the Mechanics skill.
        </Text>

        <Text className="mx-auto">
          <p style={{ fontFamily: "Cinzel Decorative" }}>
            Knowledge is power. I carve order out of chaos.
          </p>
        </Text>
      </TextBlock>
      <Heading3>Soulforged</Heading3>
      <TextBlock>
        <Text>
          The Soulforged binds a fragment of their soul into a chosen weapon,
          forging a sentient extension of their will - a Soulblade. Through this
          bond, they shape and empower their blade, adapting its form and
          function to meet the shifting demands of battle. You gain the
          Empathize skill.
        </Text>

        <Text className="mx-auto">
          <p style={{ fontFamily: "Cinzel Decorative" }}>
            I am the soul of my blade. I bring justice for all.
          </p>
        </Text>

        <Text className="mt-2">
          Your Art is your subclass, and your choice of Art determines many of
          the features you'll gain as you gain new levels
        </Text>
      </TextBlock>
      {/* <Heading3>Darksworn</Heading3>
      <TextBlock>
        <Text>
          The Darksworn embraces forbidden power - blood magic, curses, and the
          power of pain. They bleed so their foes may suffer, sacrificing
          vitality to bring ruin to all those who stand in their way. You gain
          the Intimidate skill.
        </Text>

        <Text className="italic">
          Pain is a weapon. I will stop at nothing.
        </Text>
      </TextBlock> */}
    </ColumnPDF>

    <ColumnPDF>
      {/* --- ADVANCEMENT TABLE --- */}
      <Heading3 className="text-center">Scion Advancement</Heading3>
      <AdvancementTable
        showLevel={true}
        columns={["Features", "Abilities", "Art Abilities"]}
        rows={[
          {
            level: "1",
            Features:
              "Art, Balance, Kit, Enweave, Art Features, Art Triggered Action, Scion Abilities",
            Abilities: "Signature, 3, 5",
            "Art Abilities": "—",
          },
          {
            level: "2",
            Features: "Art Feature, Perk, Art Ability",
            Abilities: "Signature, 3, 5",
            "Art Abilities": "5",
          },
          {
            level: "3",
            Features: "Cascading Enweave, 7-Balance Ability",
            Abilities: "Signature, 3, 5, 7",
            "Art Abilities": "5",
          },
          {
            level: "4",
            Features:
              "Characteristic Increase, Perk, Skill, Elemental Attunement, Eternal Student, Shifting Balance",
            Abilities: "Signature, 3, 5, 7",
            "Art Abilities": "5",
          },
          {
            level: "5",
            Features: "Art Features, 9-Balance Ability",
            Abilities: "Signature, 3, 5, 7, 9",
            "Art Abilities": "5",
          },
          {
            level: "6",
            Features: "Masterstroke, Perk, Art Ability",
            Abilities: "Signature, 3, 5, 7, 9",
            "Art Abilities": "5, 9",
          },
          {
            level: "7",
            Features:
              "Characteristic Increase, Immaculate Balance, Eternal Master, Unravel Weakness, Skill",
            Abilities: "Signature, 3, 5, 7, 9",
            "Art Abilities": "5, 9",
          },
          {
            level: "8",
            Features: "Art Features, 11-Balance Ability",
            Abilities: "Signature, 3, 5, 7, 9, 11",
            "Art Abilities": "5, 9",
          },
          {
            level: "9",
            Features: "Flow Like Water, Art Ability",
            Abilities: "Signature, 3, 5, 7, 9, 11",
            "Art Abilities": "5, 9, 11",
          },
          {
            level: "10",
            Features:
              "Characteristic Increase, Enduring Enweave, Harmony, Legacy Unbroken, Perfect Balance",
            Abilities: "Signature, 3, 5, 7, 9, 11",
            "Art Abilities": "5, 9, 11",
          },
        ]}
      />

      <Heading2>Balance</Heading2>
      <TextBlock>
        <Text>
          You can align movement, feeling, and intent to a single purpose,
          cultivating a heroic resource called balance.
        </Text>
      </TextBlock>
      <Heading3>Balance in Combat</Heading3>
      <TextBlock>
        <Text>
          At the start of a combat encounter or some other stressful situation
          tracked in combat rounds (as determined by the Director), you gain
          balance equal to your Victories. At the start of each of your turns
          during combat, you gain 2 balance.
        </Text>

        <Text>
          Additionally, the first time in a combat round that you or an ally
          within 10 squares of you uses an ability with a Weapon tag, you gain 1
          balance. The first time in a combat round that you or an ally within
          10 squares of you uses an ability with a Magic tag, you gain 1
          balance.
        </Text>
      </TextBlock>
      <Heading3>Balance Outside of Combat</Heading3>
      <TextBlock>
        <Text>
          Though you can't gain balance outside of combat, you can use your
          heroic abilities and effects that cost balance without spending it.
          Whenever you use an ability or effect outside of combat that costs
          balance, you can't use that same ability or effect outside of combat
          again until you gain at least 1 Victory or finish a Respite.
        </Text>

        <Text>
          If you use an ability outside of combat that lets you spend unlimited
          balance on its effect, you can use it as if you had spent an amount of
          nerve on it equal to your Victories.
        </Text>
      </TextBlock>
      <Heading2>Kit</Heading2>
      <Text>
        You can use and gain the benefits of a kit.
      </Text>
    </ColumnPDF>
  </PagePDF>
);

export default Page1;
