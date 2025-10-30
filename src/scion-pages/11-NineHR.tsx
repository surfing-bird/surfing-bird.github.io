import { Page, Column, Text, Heading2, Ability } from "@/components";

const NineHR = () => (
  <Page id="nine-hr">
    <Column>
      <Heading2>9-Balance Abilities</Heading2>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 9 balance to use.
      </Text>
      <Ability
        title="Surge Weave (9 Balance)"
        subtitle="You weave power through your weapon and unleash it in a sculpted surge of energy."
        keywords="Weapon, Area, Magic"
        actionType="Main action"
        range="15 wall within 1"
        targets="Every enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "4 damage",
          middle: "8 damage",
          high: "14 damage",
        }}
        effect="Choose any Enweave effect without an area. It is applied to all enemies within the area. The wall does not persist after the ability resolves."
      />

      <Ability
        title="Tempest Flurry (9 Balance)"
        subtitle="You unleash a storm of strikes in blinding rhythm."
        keywords="Magic"
        actionType="Main action"
        range="Self"
        targets="Self"
        effect="You can use up to three signature abilities. You may shift up to 3 squares either before or after each usage."
      />
    </Column>

    <Column>
      <Ability
        title="Falling Star (9 Balance)"
        subtitle="You pierce the firmament, then plunge to the earth with stellar force."
        keywords="Area, Magic, Weapon"
        actionType="Main action"
        range="Special"
        targets="Special"
        addedStats={["Reason"]}
        tierResults={{
          low: "5 damage; A < weak, dazed (save ends)",
          middle: "8 damage; A < average, dazed (save ends)",
          high: "11 damage; A < strong, dazed (save ends)",
        }}
        effect="You are removed from the battlefield, then re-enter, landing in an unoccupied space within range 10 without requiring line of sight to it. Make one power roll that targets each enemy within range 3 of the space where you land. The ground in or directly beneath all squares in range 3 of you drops 2 squares."
      />

      <Ability
        title="Inferno Helix (9 Balance)"
        subtitle="Flames whirl in step with your dance, spiraling outward in staccato."
        keywords="Area, Magic, Weapon"
        actionType="Main action"
        range="3 burst"
        targets="All enemies in the area"
        addedStats={["Reason"]}
        tierResults={{
          low: "6 fire damage",
          middle: "10 fire damage",
          high: "14 fire damage",
        }}
        effect="Until the start of your next turn, the first time on a turn that an enemy within range 5 of you takes damage, you can shift up to a distance equal to your Reason score.
        If you end this shift adjacent to the enemy, it takes fire damage equal to your double your Reason score."
      />
    </Column>
  </Page>
);

export default NineHR;
