import { Ability, Detail } from "@/components";

export const Blink = () => (
  <Ability
    title="Blink"
    subtitle="…And you miss it."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect="You teleport up to 6 squares. You may break up this movement once with a main action, splitting it into two teleports."
    spend={
      <Detail
        detailName="Spend 5 Balance"
        detailValue="If the above movement is split into two teleports, you may repeat the main action used to break it apart at the destination of the second teleport so long as it was a strike ability that costs 3 or fewer balance."
      />
    }
  />
);
