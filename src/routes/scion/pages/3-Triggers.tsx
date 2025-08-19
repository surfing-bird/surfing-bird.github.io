import {
  Page,
  Column,
  Text,
  Heading2,
  Heading4,
  AdvancementTable,
  Ability,
  Detail,
} from "@/components";

const Triggers = () => (
  <Page id="triggers">
    <Column>
      <Heading2>Art Triggered Action</Heading2>
      <Text>
        Your Art grants you a triggered action, as shown on the Scion Triggered
        Action table.
      </Text>

      <Heading4 className="text-center">Art Triggered Action</Heading4>
      <AdvancementTable
        columns={["Subclass", "Features"]}
        rows={[
          { level: "", Subclass: "Blinkblade", Features: "Flicker Step" },
          { level: "", Subclass: "Runewright", Features: "Ensnaring Rune" },
          { level: "", Subclass: "Soulforged", Features: "Blade's Will" },
          { level: "", Subclass: "Darksworn", Features: "Pain Is Power" },
        ]}
      />

      <Ability
        title="Flicker Step"
        subtitle="You instinctively teleport to avoid danger."
        keywords="Magic"
        actionType="Triggered action"
        range="Self"
        targets="Self"
        trigger="You take damage."
        effect="You take half the damage, you can then teleport up to 4 squares after the triggering effect resolves."
        spend={
          <Detail
            detailName="Spend 1+ Balance"
            detailValue="You teleport an additional 2 squares for each balance spent."
          />
        }
      />

      <Ability
        title="Ensnaring Rune"
        subtitle="Your foe steps on one of your many traps."
        keywords="Magic"
        actionType="Triggered action"
        range="Ranged 10"
        targets="1 enemy"
        trigger="The target moves."
        effect="The target takes damage equal to triple your Reason score."
        spend={
          <Detail
            detailName="Spend 1 Balance"
            detailValue="If the target has I < AVERAGE, they are slowed (EoT)."
          />
        }
      />
    </Column>

    <Column>
      <Ability
        title="Blade's Will"
        subtitle="As if moving by its own accord, your Soulblade parries and ripostes."
        keywords="Melee, Weapon, Magic"
        actionType="Triggered action"
        range="Ranged 5"
        targets="Self or one ally"
        trigger="A creature deals damage to the target."
        effect="You can shift a number of squares equal to your Reason score.
                If the target is you, or if you end this shift adjacent to the target, the target takes half the damage."
        spend={
          <Detail
            detailName="Spend 2 Balance"
            detailValue="Make a melee free strike against the creature that damaged the target."
          />
        }
      />

      <Ability
        title="Pain Is Power"
        subtitle="You take another’s pain - drawing strength from it."
        keywords="Magic"
        actionType="Triggered action"
        range="Ranged 10"
        targets="Self or an ally"
        trigger="The target takes damage."
        effect="You take the damage instead of the target, halving it if you wish. You gain an edge on your next power roll."
        spend={
          <Detail
            detailName="Spend 1+ Balance"
            detailValue="For each balance spent, deal your Reason in damage to yourself, and double your Reason in damage to the triggering creature."
          />
        }
      />
    </Column>
  </Page>
);

export default Triggers;
