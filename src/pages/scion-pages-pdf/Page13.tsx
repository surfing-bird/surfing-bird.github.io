import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading3,
  Ability,
  Heading4,
  Detail,
} from "@/components";

const Page12 = () => (
  <PagePDF id="page-12">
    <ColumnPDF>
      <Heading3>Iron Fist</Heading3>
      <Text>
        Wreathed in steel, your fists are unyielding weapons of destruction.
      </Text>

      <Heading4>Equipment</Heading4>
      <Text>You wear no armor and wield only your unarmed strikes.</Text>

      <Heading4>Kit Bonuses</Heading4>
      <div className="flex flex-col gap-0">
        <Detail detailName="Stamina Bonus" detailValue="+6 per echelon" />
        <Detail detailName="Speed Bonus" detailValue="+3" />
        <Detail detailName="Melee Damage Bonus" detailValue="+2/+2/+2" />
      </div>

      <Heading4>Signature Ability</Heading4>
      <Ability
        className="mt-2"
        title="Uppercut"
        subtitle="Your fist connects with their chin -- and they go flying."
        keywords="Melee, Weapon, Strike"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Agility", "Might"]}
        tierResults={{
          low: "4 + M or A damage; vertical push 1",
          middle: "6 + M or A damage; vertical push 2",
          high: "8 + M or A damage; vertical push 3",
        }}
      />

      
    </ColumnPDF>

    <ColumnPDF>{""}</ColumnPDF>
  </PagePDF>
);

export default Page12;
