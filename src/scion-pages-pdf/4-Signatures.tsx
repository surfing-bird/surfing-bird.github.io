import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading2,
  Heading4,
  Ability,
} from "@/components";

const Signatures = () => (
  <PagePDF id="signatures">
    <ColumnPDF>
      <Heading2>Scion Abilities</Heading2>
      <Text>
        You wield a seamless fusion of martial grace and arcane power, flowing
        through battle with speed and precision.
      </Text>

      <Heading4>Signature Ability</Heading4>
      <Text>
        Select one signature ability from the options below. Signature abilities
        can be used at will.
      </Text>

      <Ability
        title="Essence Lance"
        subtitle="You hurl a lance of force that pierces not flesh, but the core of their being."
        keywords="Ranged, Strike, Magic"
        actionType="Main action"
        range="Ranged 10"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "6 + R psychic damage",
          middle: "8 + R psychic damage",
          high: "11 + R psychic damage",
        }}
        effect="The target's characteristic scores are treated as lower by 1 for the sake of resisting potencies (save ends)."
      />

      <Ability
        title="Still Edge"
        subtitle="You cut into your foe, leaving potential energy in their form - threatening to snap into explosive motion."
        keywords="Magic, Melee, Weapon, Strike"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "3 + A damage",
          middle: "6 + A damage",
          high: "9 + A damage",
        }}
        effect="If the target willingly moves before the end of their next turn, they take damage equal to twice your Reason score."
      />

      <Ability
        title="Blade Barrier"
        subtitle="A sphere of shimmering force unfurls around you as you harry your foe."
        keywords="Magic, Area"
        actionType="Main action"
        range="1 burst"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "2 damage, push 1",
          middle: "3 damage, push 1",
          high: "5 damage, push 1",
        }}
        effect="This ability ignores stability. Gain damage immunity equal to your Reason until the end of your next turn."
      />
    </ColumnPDF>

    <ColumnPDF>
      <Ability
        title="Aether Lash"
        subtitle="With a flick of your blade, you etch a line of invisible force, preparing to strike."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="One creature or object"
        addedStats={["Agility"]}
        tierResults={{
          low: "2 + A damage",
          middle: "5 + A damage",
          high: "8 + A damage",
        }}
        effectBeforeResult
        effect="Before choosing the target of this ability and resolving the power roll,
              choose a creature or object within range 5. Either vertical pull 4
              the target, or vertical pull 4 yourself from the creature or object's space.
              When a creature is pulled into the air this way, they do not fall
              down until the end of your turn, and lose all stability while in
              the air."
      />

      <Ability
        title="Crescent Arc"
        subtitle="A precise arc cuts through your foes with the grace of moonlight."
        keywords="Area, Magic, Melee, Weapon"
        actionType="Main action"
        range="3 wall within 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "2 damage",
          middle: "5 damage",
          high: "7 damage",
        }}
        effect="The wall area is only used for targeting. Each increase to the wall's length is doubled."
      />

      <Ability
        title="Fury's Call"
        subtitle="Their anger betrays them."
        keywords="Magic, Melee, Weapon, Strike"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "3 + A damage",
          middle: "6 + A damage",
          high: "9 + A damage",
        }}
        effect="The target must make an opportunity attack against you as a free triggered action if they are able.
        If they do, you gain 2 surges which you may use on this ability."
      />
    </ColumnPDF>
  </PagePDF>
);

export default Signatures;
