import { Ability, Detail } from "@/components";

export const StarPower = () => (
  <Ability
    title="Star Power"
    subtitle="Your years of practicing fencing and dancing pay off on the battlefield."
    keywords="—"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect="You can shift 4 squares. During this movement, enemy spaces are not difficult terrain. If you shift through an enemy's space, you get an edge on the next power roll you make against it this turn."
    spend={
      <Detail
        detailName="Spend 1 Drama"
        detailValue="Gain an edge on the next power roll you make this turn."
      />
    }
  />
);
