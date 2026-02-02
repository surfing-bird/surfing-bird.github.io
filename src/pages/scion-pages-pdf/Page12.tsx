import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading3,
  Heading2,
  Ability,
  Heading4,
  Detail,
} from "@/components";

const Page12 = () => (
  <PagePDF id="page-12">
    <ColumnPDF>
      <Heading2>Kits</Heading2>
      <Heading3>Sword Master</Heading3>
      <Text>
        An artist of the blade, the battlefield is your canvas - each step a
        flourish, each cut a stroke.
      </Text>
      <Heading4>Equipment</Heading4>
      <Text>You wear medium armor and wield a light weapon.</Text>
      <Heading4>Kit Bonuses</Heading4>
      <div className="flex flex-col gap-0">
        <Detail detailName="Stamina Bonus" detailValue="+6 per echelon" />
        <Detail detailName="Speed Bonus" detailValue="+3" />
        <Detail detailName="Melee Damage Bonus" detailValue="+2/+2/+2" />
      </div>
      <Heading4>Signature Ability</Heading4>
      <Ability
        className="mt-2"
        title="Gliding Heron"
        subtitle="You move like water, cutting through foes with a single, fluid motion."
        keywords="Melee, Weapon"
        actionType="Main action"
        range="Melee 1"
        targets="Special"
        addedStats={["Agility", "Might"]}
        tierResults={{
          low: "5 damage",
          middle: "8 damage",
          high: "11 damage",
        }}
        effect="You shift up to 3 squares and make one power roll that targets all enemies that you moved through during the move. Enemies are not treated as difficult terrain for the purpose of this movement. You may not end this movement inside an enemy's square"
      />
      <Heading3>Chain Weaver</Heading3>
      <Text>
        Specializing in the elegant control of a chained weapon such as a
        kusarigama or chain whip, you are able to perform melee attacks at a
        distance, binding your foes and keeping them at bay.
      </Text>
      <Heading4>Equipment</Heading4>
      <Text>You wear light armor and wield a whip.</Text>
      <Heading4>Kit Bonuses</Heading4>
      <div className="flex flex-col gap-0">
        <Detail detailName="Stamina Bonus" detailValue="+3 per echelon" />
        <Detail detailName="Melee Damage Bonus" detailValue="+1/+1/+1" />
        <Detail detailName="Melee Distance Bonus" detailValue="+3" />
      </div>
      <Heading4>Signature Ability</Heading4>
      <Ability
        className="mt-2"
        title="Binding Snake"
        subtitle="You wrap your chain around your foe, holding them in place."
        keywords="Melee, Weapon"
        actionType="Main action"
        range="Melee 4"
        targets="Special"
        addedStats={["Agility", "Might"]}
        tierResults={{
          low: "3 + M or A damage; A < WEAK, grabbed",
          middle: "5 + M or A damage; A < AVERAGE, grabbed",
          high: "8 + M or A damage; A < STRONG, grabbed",
        }}
      />
    </ColumnPDF>

    <ColumnPDF>
      <Heading3>Spear Dancer</Heading3>
      <Text>
        In your hands the spear is more than just a weapon - it is an instrument
        of expression, a tool of of both mobility and power.
      </Text>

      <Heading4>Equipment</Heading4>
      <Text>You wear medium armor and wield a medium weapon.</Text>

      <Heading4>Kit Bonuses</Heading4>
      <div className="flex flex-col gap-0">
        <Detail detailName="Stamina Bonus" detailValue="+6 per echelon" />
        <Detail detailName="Speed Bonus" detailValue="+1" />
        <Detail detailName="Melee Damage Bonus" detailValue="+2/+2/+2" />
        <Detail detailName="Melee Distance Bonus" detailValue="+1" />
      </div>

      <Heading4>Signature Ability</Heading4>
      <Ability
        className="mt-2"
        title="Leaping Swan"
        subtitle="You plant your spear into the earth and launch yourself skyward, twisting through the air before driving down with deadly force."
        keywords="Melee, Weapon, Strike"
        actionType="Main action"
        range="Melee 2"
        targets="One creature"
        addedStats={["Agility", "Might"]}
        tierResults={{
          low: "5 + M or A damage; M < WEAK, prone",
          middle: "8 + M or A damage; M < AVERAGE, prone",
          high: "11 + M or A damage; M < STRONG, prone",
        }}
        effect="You can jump up to 3 squares straight toward the target without provoking attacks of opportunity before this strike."
      />

      <Heading3>Greatblade Adept</Heading3>
      <Text>
        Under your control, the seemingly too-large, clunky blade moves with the
        grace of a feather.
      </Text>

      <Heading4>Equipment</Heading4>
      <Text>You wear medium armor and wield a heavy weapon.</Text>

      <Heading4>Kit Bonuses</Heading4>
      <div className="flex flex-col gap-0">
        <Detail detailName="Stamina Bonus" detailValue="+6 per echelon" />
        <Detail detailName="Speed Bonus" detailValue="+1" />
        <Detail detailName="Melee Distance Bonus" detailValue="+1" />
        <Detail detailName="Melee Damage Bonus" detailValue="0/0/+4" />
      </div>

      <Heading4>Signature Ability</Heading4>
      <Ability
        className="mt-2"
        title="Falling Petal Cut"
        subtitle="Seemingly weightless in the air, your enemy feels the full brunt of your blade."
        keywords="Melee, Weapon, Strike"
        actionType="Main action"
        range="Melee 2"
        targets="One creature"
        addedStats={["Agility", "Might"]}
        tierResults={{
          low: "3 + M or A damage; push 1",
          middle: "6 + M or A damage; push 2",
          high: "13 + M or A damage; push 4",
        }}
      />
    </ColumnPDF>
  </PagePDF>
);

export default Page12;
