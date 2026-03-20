import { Page, Column, Text, Heading2 } from "@/components";
import { CleverTrick, ImNoThreat } from "@/abilities/shadow-abilities";

const Page2 = () => (
  <Page id="class-subclass">
    <Column>
      <Heading2>1st-Level College Features</Heading2>
      <Text>
        Your shadow college grants you one or two features, as shown on the
        1st-Level College Features table.
      </Text>

      <ImNoThreat />

      <Text className="italic">
        The vanilla I'm No Threat's effect is too vague - it's unclear what the
        effect of the illusion actually is. This version attempts to make the
        effect more concrete. It lets you move around without provoking attacks
        of opportunity and makes it less appealing to hit you over your allies,
        while keeping the edge and surge bonuses which are a core part of every
        Shadow's game-plan.
      </Text>
    </Column>

    <Column>
      <Heading2>College Triggered Action</Heading2>
      <Text>
        Your shadow college grants you a triggered action, as shown on the
        College Triggered Actions table.
      </Text>

      <CleverTrick />

      <Text className="italic">
        Clever Trick is much too big of a value swing in vanilla. You get to
        completely nullify an attack, which is already well worth a triggered
        action costing 1 Insight, but to add insult to injury - you can also
        redirect it! It can literally be used to redirect a solo's attack
        against itself. This version makes this ability more reasonable, while
        still being powerful.
      </Text>

      <Text className="italic text-sm text-gray-500 mt-20">
        For a complete rework of most of Shadow's abilities, check out Exocist's
        complementary extension to this rework →{" "}
        <a
          href="https://docs.google.com/document/d/12hvWaEtvp6jGYQzfnaE16fzRBwPl4Y35fCgdMRRiFs8"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          Shadow Rework: Ability Rework (by Exocist)
        </a>
      </Text>
    </Column>
  </Page>
);

export default Page2;
