import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading2,
  Heading4,
  AdvancementTable,
} from "@/components";
import {
  EnsnaringRune,
  BladesWill,
  BladeBarrier,
  AetherLash,
  CrescentArc,
  FlickerStep,
} from "@/abilities/scion-abilities";

const Page3 = () => (
  <PagePDF id="page-3">
    <ColumnPDF>
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
      <EnsnaringRune />
      <BladesWill />
      {/* <PainIsPower /> */}
    </ColumnPDF>

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
      <AetherLash />
      <BladeBarrier />
      <CrescentArc />
    </ColumnPDF>
  </PagePDF>
);

export default Page3;
