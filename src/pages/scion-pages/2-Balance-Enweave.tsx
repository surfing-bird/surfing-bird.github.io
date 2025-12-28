import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  TextBlock,
} from "@/components";
import { Enweave } from "@/abilities/scion-abilities";

const BalanceEnweave = () => (
  <Page id="balance-enweave">
    <Column>
      {/* --- BALANCE --- */}
      <Heading2>Balance</Heading2>

      <TextBlock>
        <Text>
          You can align movement, feeling, and intent to a single purpose,
          cultivating a heroic resource called balance.
        </Text>
      </TextBlock>

      <Heading3>Balance in Combat</Heading3>

      <TextBlock>
        <Text>
          At the start of a combat encounter or some other stressful situation
          tracked in combat rounds (as determined by the Director), you gain
          balance equal to your Victories. At the start of each of your turns
          during combat, you gain 2 balance.
        </Text>

        <Text>
          Additionally, the first time in a combat round that you or an ally
          within 10 squares of you uses an ability with a Weapon tag, you gain 1
          balance. The first time in a combat round that you or an ally within
          10 squares of you uses an ability with a Magic tag, you gain 1
          balance.
        </Text>
      </TextBlock>

      <Heading3>Balance Outside of Combat</Heading3>

      <TextBlock>
        <Text>
          Though you can’t gain balance outside of combat, you can use your
          heroic abilities and effects that cost balance without spending it.
          Whenever you use an ability or effect outside of combat that costs
          balance, you can’t use that same ability or effect outside of combat
          again until you gain at least 1 Victory or finish a Respite.
        </Text>

        <Text>
          If you use an ability outside of combat that lets you spend unlimited
          balance on its effect, you can use it as if you had spent an amount of
          balance on it equal to your Victories.
        </Text>
      </TextBlock>

      <Heading2>Kit</Heading2>
      <Text>You can use and gain the benefits of a kit.</Text>
    </Column>

    <Column>
      <Heading2>Enweave</Heading2>
      <Text>
        Your mastery of balance allows you to channel magic through your weapon.
        You gain the following ability.
      </Text>

      <Enweave />
    </Column>
  </Page>
);

export default BalanceEnweave;
