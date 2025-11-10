import { Ability, TextBlock, Text, Detail } from "@/components";

export const Blink = () => (
  <Ability
    title="Blink"
    subtitle="…And you miss it."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect={
      <TextBlock>
        <Text>You teleport up to 7 squares.</Text>
      </TextBlock>
    }
    spend={
      <Detail
        detailName="Spend 5 Balance"
        detailValue="If used immediately after performing an ability that targets only one enemy, you may repeat that ability at your target destination without needing to spend the base cost as long as it costs 5 balance or fewer."
      />
    }
  />
);

