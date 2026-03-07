import { Ability, Detail } from "@/components";

export const TurnaboutIsFairPlay = () => (
  <Ability
    title="Turnabout Is Fair Play"
    subtitle="All's fair in love and whatever."
    keywords="Ranged, Triggered"
    actionType="Triggered action"
    range="Ranged 10"
    targets="One creature"
    trigger="The target makes an ability roll that has an edge, a double edge, a bane, or a double bane."
    effect="An edge on the triggering roll becomes a bane, or a double edge is negated. A bane becomes an edge, or a double bane is negated."
    spend={
      <Detail
        detailName="Spend 1 Drama"
        detailValue="An edge on the triggering roll becomes a double bane. A bane becomes a double edge."
      />
    }
  />
);
