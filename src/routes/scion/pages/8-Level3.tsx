import {
  Page,
  Column,
  Text,
  Heading2,
  Ability,
  Feature,
} from "@/components";

const Level3 = () => (
  <Page id="level-3">
    <Column>
      <Heading2>3rd-Level Features</Heading2>
      <Text>As a 3rd-level scion, you gain the following features.</Text>

      {/* <Heading3>Mystic Shield</Heading3>
      <Text>You gain the following ability.</Text>

      <Ability
        title="Mystic Shield (3 Balance)"
        subtitle="An incandescent targe springs to life, a split second from impact."
        keywords="Magic"
        actionType="Free Triggered action"
        range="Self"
        targets="Self"
        effect={
          <TextBlock>
            <Text>
              <strong>Trigger:</strong> You take damage.
            </Text>
            <Text>
              <strong>Effect:</strong> You take half the damage.
            </Text>
          </TextBlock>
        }
      /> */}

      <Feature title="Cascading Enweave">
        <Text>
          When using Enweave, you may spend 2 balance to make the chosen effect
          apply to an additional target within range 5 of the target of your
          next melee weapon ability. You may choose to use this spend effect
          more than once - if you do, each additional target needs to be within
          range 5 of the previous affected target.
        </Text>
      </Feature>

      <Heading2>7-Balance Abilities</Heading2>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 7 balance to use.
      </Text>

      <Ability
        title="Cross Slash"
        subtitle="You cleave the air in all directions, blades of force radiating from your stance."
        keywords="Melee, Weapon, Magic, Area"
        actionType="Main action"
        range="four 5x1 lines within 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "6 damage",
          middle: "10 damage",
          high: "14 damage",
        }}
      />

      <Ability
        title="Godspeed"
        subtitle="You surge with arcane power, moving with impossible speed."
        keywords="Magic"
        actionType="Free Maneuver"
        range="Self"
        targets="Self"
        effect="For the rest of the combat encounter, you have an additional maneuver per turn and gain a +5 bonus to speed."
      />
    </Column>

    <Column>
      <Ability
        title="Judgment Edge"
        subtitle="A final, measured cut."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "10 + A damage",
          middle: "14 + A damage",
          high: "20 + A damage",
        }}
        effect="If the target of this ability is reduced to 0 stamina, refund the balance cost."
      />

      <Ability
        title="Spectral Blades"
        subtitle="You summon spectral blades, suspended in poise, released with but a thought."
        keywords="Magic"
        actionType="Maneuver"
        range="Self"
        targets="Self"
        effect="Place a d6 die set to 6 to track this effect.
        Once a turn you may reduce the die by any amount up to its current value.
        Then, distribute that many spectral blades among enemies within range 5 as you choose.
        You cannot assign more than one blade per enemy. Each blade deals 2 + your Reason in damage.
        In addition, whenever an enemy in range 5 is affected by a potency effect, you may reduce the die by 1 to increase the potency by 1."
      />
    </Column>
  </Page>
);

export default Level3;
