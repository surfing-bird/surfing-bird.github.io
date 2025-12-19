import { Ability, TextBlock, Text, BulletList, Detail } from "@/components";

export const Enweave = () => (
  <Ability
    title="Enweave (1 Balance)"
    subtitle="You weave magic into your weapon, preparing to unleash it with your next strike."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Special"
    effect={
      <TextBlock>
        <Text>
          <strong>Effect:</strong> Choose one of the following effects, which
          applies to one target of the next damaging melee weapon ability you
          use:
        </Text>
        <BulletList>
          <Detail
            detailName="Flame Strike"
            detailValue="Damage becomes fire. The target takes fire damage equal to triple your Reason score."
          />
          <Detail
            detailName="Gale Strike"
            detailValue="Damage becomes lightning. You can either push the target, or yourself away from the target, a distance equal to double your Reason score."
          />
          <Detail
            detailName="Freeze Strike"
            detailValue="Damage becomes cold. The target takes cold damage equal to your Reason score. The target is slowed (save ends)."
          />
          <Detail
            detailName="Crimson Strike"
            detailValue="Damage becomes corruption. The target is bleeding (save ends)."
          />
          <Detail
            detailName="Umbral Strike"
            detailValue="Damage becomes psychic. The target has damage weakness equal to your Reason score (save ends)."
          />
          <Detail
            detailName="Explosive Strike"
            detailValue="Damage becomes sonic. Each enemy in range 2 of the target is dealt sonic damage equal to your Reason score."
          />
        </BulletList>
        <Text>
          Effects other than the changing of the damage type are applied after
          the ability is resolved. If you use this ability more than once before
          it applies to an ability, you can choose one of the damage types to
          apply to the affected ability, but apply all of the effects.
        </Text>

        <Text>
          You cannot use Enweave more than twice before applying its effect to
          an ability.
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
);
