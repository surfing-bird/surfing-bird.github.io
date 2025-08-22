import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  BulletList,
  TextBlock,
  Ability,
  Detail,
} from "@/components";

const BalanceEnweave = () => (
  <Page id="balance-enweave">
    <Column>
      {/* --- BALANCE --- */}
      <Heading2>Balance</Heading2>

      <TextBlock>
        <Text>
          You can align movement, feeling, and intent to a single purpose,
          cultivating a heroic resource called Balance.
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
          Additionally, the first time in a combat round that you use an ability
          with a Weapon tag after using an ability with the Magic tag, or vice
          versa, you gain 1 Balance.
        </Text>

        <Text>
          The first time you spend Balance in a combat round, the cost is
          reduced by one.
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
          nerve on it equal to your Victories.
        </Text>
      </TextBlock>

      <Heading2>Kit</Heading2>
      <Text>
        You can use and gain the benefits of a kit. See Chapter 6: Kits for more
        information.
      </Text>
    </Column>

    <Column>
      <Heading2>Enweave</Heading2>
      <Text>
        Your mastery of Balance allows you to channel magic through your weapon.
        You gain the following ability.
      </Text>

      <Ability
        title="Enweave (1 Balance)"
        subtitle="You weave magic into your weapon, preparing to unleash it with your next strike."
        keywords="Magic, Weapon"
        actionType="Maneuver"
        range="Self"
        targets="Self"
        effect={
          <TextBlock>
            <Text>
              <strong>Effect:</strong> Choose one of the following effects:
            </Text>
            <BulletList>
              <Detail
                detailName="Flame Strike"
                detailValue="Deal triple your Reason score in fire damage."
              />
              <Detail
                detailName="Gale Strike"
                detailValue="Damage becomes lightning. You can either push the target, or yourself away from the target, a distance equal to double your Reason score."
              />
              <Detail
                detailName="Freeze Strike"
                detailValue="Damage becomes cold. The target is slowed (save ends)."
              />
              <Detail
                detailName="Crimson Strike"
                detailValue="Damage becomes corruption. The target is bleeding (save ends)."
              />
              <Detail
                detailName="Acid Strike"
                detailValue="Deal your Reason score in acid damage. Attacks against the target gain an edge (save ends)."
              />
              <Detail
                detailName="Umbral Strike"
                detailValue="Deal your Reason score in psychic damage. The target is weakened (save ends)."
              />
              <Detail
                detailName="Explosive Strike"
                detailValue="Damage becomes sonic. Deal your Reason in sonic damage to each enemy in range 2 of the target."
              />
            </BulletList>
            <Text>
              The chosen effect applies to your weapon ability. It may change
              that ability’s damage type. Any additional effects are applied
              after the ability is resolved, and to one target of your choosing.
              If you use this ability more than once before a weapon ability,
              choose one of the damage types to apply to the affected ability,
              but apply all of the additional effects.
            </Text>
          </TextBlock>
        }
        spend={
          <Detail
            detailName="Spend 2 Balance"
            detailValue="This ability becomes a free maneuver instead. You can only use this spend once per turn."
          />
        }
      />
    </Column>
  </Page>
);

export default BalanceEnweave;
