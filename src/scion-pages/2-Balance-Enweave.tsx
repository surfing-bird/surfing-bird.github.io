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
        targets="Special"
        effect={
          <TextBlock>
            <Text>
              <strong>Effect:</strong> Choose one of the following effects,
              which applies to one target of the next damaging melee weapon
              ability you use:
            </Text>
            <BulletList>
              <Detail
                detailName="Flame Strike"
                detailValue="Damage becomes fire. Deal triple your Reason score in fire damage."
              />
              <Detail
                detailName="Gale Strike"
                detailValue="Damage becomes lightning. You can either push the target, or yourself away from the target, a distance equal to double your Reason score."
              />
              <Detail
                detailName="Freeze Strike"
                detailValue="Damage becomes cold. Deal your Reason score in cold damage. The target is slowed (save ends)."
              />
              <Detail
                detailName="Crimson Strike"
                detailValue="Damage becomes corruption. The target is bleeding (save ends)."
              />
              {/* <Detail
                detailName="Acid Strike"
                detailValue="Damage becomes acid. The target has damage weakness equal to your Reason score (save ends)."
              /> */}
              <Detail
                detailName="Umbral Strike"
                detailValue="Damage becomes psychic. The target has damage weakness equal to your Reason score (save ends).`"
              />
              {/* <Detail
                detailName="Umbral Strike"
                detailValue="Damage becomes psychic. Deal your Reason score in psychic damage, and the target is weakened (save ends)."
              /> */}
              <Detail
                detailName="Explosive Strike"
                detailValue="Damage becomes sonic. Deal your sonic damage equal to your Reason score to each enemy in range 2 of the target."
              />
            </BulletList>
            <Text>
              Effects other than the changing of the damage type are applied
              after the ability is resolved. If you use this ability more than
              once before it applies to an ability, you can choose one of the
              damage types to apply to the affected ability, but apply all of
              the effects.
            </Text>

            <Text>
              You cannot use Enweave more than twice before applying its effect
              to an ability.
            </Text>
          </TextBlock>
        }
        spend={
          <Detail
            detailName="Spend 2 Balance"
            detailValue="This ability becomes a free maneuver instead."
          />
        }
      />
    </Column>
  </Page>
);

export default BalanceEnweave;
