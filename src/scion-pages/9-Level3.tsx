import { Page, Column, Text, Heading2, Heading3 } from "@/components";
import {
  CrossSlash,
  Godspeed,
  ReapersEdge,
  SpectralBlades,
} from "@/scion-abilities";

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

      <Heading3>Cascading Enweave</Heading3>
      <Text>
        When using Enweave, you may spend 2 balance to make the chosen effect
        apply to an additional target within range 5 of the target of your next
        melee weapon ability. You may choose to use this spend effect more than
        once - if you do, each additional target needs to be within range 5 of
        the previous affected target.
      </Text>

      <Heading2>7-Balance Abilities</Heading2>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 7 balance to use.
      </Text>

      <CrossSlash />

      <Godspeed />
    </Column>

    <Column>
      <ReapersEdge />

      {/* <Ability
        title="Reaper's Edge (7 Balance)"
        subtitle="There is power in death."
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
        effect="If this ability reduces a creature to 0 Stamina, gain an additional main action this turn."
      /> */}

      <SpectralBlades />
    </Column>
  </Page>
);

export default Level3;
