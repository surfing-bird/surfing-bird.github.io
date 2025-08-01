import {
  Page,
  Column,
  Text,
  Heading2,
  Heading4,
  AdvancementTable,
  TextBlock,
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
    </Column>

    <Column>
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
            detailValue="If the target has I < average, they are slowed (EoT)."
          />
        }
      />

      <Ability
        title="Blade's Will"
        subtitle="As if moving by its own accord, your Soulblade parries and ripostes."
        keywords="Melee, Weapon, Magic"
        actionType="Triggered action"
        range="Melee 1"
        targets="Self or one ally"
        trigger="A creature deals damage to the target."
        effect="If the target is an ally, you may change the 
              target of the triggering ability to yourself.
              The target takes half the damage. If the damage
              has any potency effect associated with it, the potency is
              decreased by 1."
        spend={
          <Detail
            detailName="Spend 2 Balance"
            detailValue="Make a melee free strike against the creature that damaged the target."
          />
        }
      />
    </Column>
  </Page>
);

export default Triggers;
