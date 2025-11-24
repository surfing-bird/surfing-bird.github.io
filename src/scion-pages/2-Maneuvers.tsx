import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  AdvancementTable,
  Feature,
} from "@/components";
import { Blink, Runebrand, Soulshape } from "@/abilities";

const Maneuvers = () => (
  <Page id="maneuvers">
    <Column>
      <Heading2>1st-Level Art Features</Heading2>
      <Text>
        Your Art grants you one or two features, as shown on the 1st-Level Art
        Features table.
      </Text>
      <Heading3 className="text-center">1st-Level Art Features</Heading3>
      <AdvancementTable
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
          Whenever you disengage, you may teleport instead of shifting. The number of squares you can shift when disengaging is increased by one.
        </Text>
      </Feature>

      <Blink />

      <Runebrand />
    </Column>

    <Column>
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
      </Feature> */}

      {/* <ChainOfTorment /> */}
    </Column>
  </Page>
);

export default Maneuvers;
