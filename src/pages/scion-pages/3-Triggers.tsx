import {
  Page,
  Column,
  Text,
  Heading2,
  AdvancementTable,
} from "@/components";
import {
  FlickerStep,
  EnsnaringRune,
  BladesWill,
  // PainIsPower,
} from "@/abilities/scion-abilities";

const Triggers = () => (
  <Page id="triggers">
    <Column>
      <Heading2>Art Triggered Action</Heading2>
      <Text>
        Your Art grants you a triggered action, as shown on the Scion Triggered
        Action table.
      </Text>

      <AdvancementTable
        title="Art Triggered Action"
        columns={["Subclass", "Features"]}
        rows={[
          { level: "", Subclass: "Blinkblade", Features: "Flicker Step" },
          { level: "", Subclass: "Runewright", Features: "Ensnaring Rune" },
          { level: "", Subclass: "Soulforged", Features: "Blade's Will" },
          // { level: "", Subclass: "Darksworn", Features: "Pain Is Power" },
        ]}
      />

      <FlickerStep />
    </Column>

    <Column>
      <EnsnaringRune />
      <BladesWill />

      {/* <PainIsPower /> */}
    </Column>
  </Page>
);

export default Triggers;
