import { Ability } from "@/components";

export const BladeBarrier = () => (
  <Ability
    title="Blade Barrier"
    subtitle="A sphere of shimmering force unfurls around you as you harry your foe."
    keywords="Magic, Area"
    actionType="Main action"
    range="1 burst"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "2 damage, push 1",
      middle: "3 damage, push 1",
      high: "5 damage, push 1",
    }}
    effect="This ability ignores stability. Gain damage immunity equal to your Reason until the end of your next turn."
  />
);

