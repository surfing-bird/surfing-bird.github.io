import { Ability, TextBlock, Text, Detail } from "@/components";

export const ImNoThreat = () => (
  <Ability
    title="Im No Threat"
    subtitle="Taking on an illusory countenance gives you an advantage on subterfuge."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect={
      <TextBlock>
        <Text>
          You envelop yourself in an illusion that makes you appear
          nonthreatening and harmless to your enemies. While this illusion
          lasts, your strikes gain an edge, strikes against you suffer a bane,
          and if they have associated potency effect, it's potency is decreased
          by 1.
        </Text>

        <Text>
          The illusion ends when you harm another creature, when you physically
          interact with a creature, when you use this ability again, or when you
          end the illusion (no action required). If you end this illusion by
          harming another creature, you gain 1 surge.
        </Text>
      </TextBlock>
    }
    spend={
      <Detail
        detailName="Spend 1 Insight"
        detailValue="Choose a creature whose size is no more than
1 greater than yours and who is within 10 squares. This ability’s
illusion makes you appear as that creature. This illusion covers your
entire body, including clothing and armor, and alters your voice to
sound like that of the creature. You gain an edge on tests made to
convince the creature’s allies that you are the creature."
      />
    }
  />
);
