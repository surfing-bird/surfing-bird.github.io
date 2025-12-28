import { Ability } from "@/components";

export const FallingStar = () => (
  <Ability
    title="Falling Star (9 Balance)"
    subtitle="You pierce the firmament, then plunge to the earth with stellar force."
    keywords="Area, Magic, Weapon"
    actionType="Main action"
    range="Special"
    targets="Special"
    addedStats={["Reason"]}
    tierResults={{
      low: "5 damage; A < WEAK, dazed (save ends)",
      middle: "8 damage; A < AVERAGE, dazed (save ends)",
      high: "11 damage; A < STRONG, dazed (save ends)",
    }}
    effect="You are removed from the battlefield, then re-enter, landing in an unoccupied space within range 10 without requiring line of sight to it. Make one power roll that targets each enemy within range 3 of the space where you land. The ground in or directly beneath all squares in range 3 of you drops 2 squares."
  />
);
