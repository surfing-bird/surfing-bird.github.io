import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading2,
  Feature,
  AdvancementTable,
} from "@/components";
import {
  Enweave,
  Blink,
  Runebrand,
  Soulshape,
} from "@/abilities/scion-abilities";

const Page2 = () => (
  <PagePDF id="page-2">
    <ColumnPDF>
      <Heading2>Enweave</Heading2>
      <Text>
        Your mastery of balance allows you to channel magic through your weapon.
        You gain the following ability.
      </Text>
      <Enweave />

      <Heading2>1st-Level Art Features</Heading2>
      <Text>
        Your Art grants you one or two features, as shown on the 1st-Level Art
        Features table.
      </Text>
      <AdvancementTable
        title="1st-Level Art Features"
        columns={["Subclass", "Features"]}
        rows={[
          { Subclass: "Blinkblade", Features: "Blink, Phasewalk" },
          { Subclass: "Runewright", Features: "Runebrand" },
          {
            Subclass: "Soulforged",
            Features: "Soulshape, Soulbound",
          },
          // {
          //   Subclass: "Darksworn",
          //   Features: "Vorator Cruciatum, Chain of Torment",
          // },
        ]}
      />
      <Feature title="Phasewalk">
        <Text>
          Whenever you disengage, you may teleport instead of shifting. The
          number of squares you can shift when disengaging is increased by one.
        </Text>
      </Feature>
      <Blink />
    </ColumnPDF>

    <ColumnPDF>
      <Runebrand />
      <Feature title="Soulbound">
        <Text>
          Your Soulblade is more than a weapon - it's an extension of your soul.
          Its appearance reflects the innermost truth of who you are. You are
          never truly separated from it; if it's not in your hands, you can
          summon it instantly as a free maneuver.
        </Text>
        <Text>
          Your Soulforged abilities can only be used with your Soulblade. To
          bond with a new weapon, you must perform a ritual lasting several
          hours to transfer your bound soul fragment from another weapon to it.
          You may bond with as many weapons as a kit grants.
        </Text>
        <Text>
          By default, your Soulblade is sentient and capable of communicating
          with you, though you may choose to forgo this aspect of it.
        </Text>
      </Feature>

      <Soulshape />
      {/* <Feature title="Vorator Cruciatum">
        <Text>You increase your number of Recoveries by 2.</Text>
      </Feature>
      <ChainOfTorment /> */}

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
    </ColumnPDF>
  </PagePDF>
);

export default Page2;
