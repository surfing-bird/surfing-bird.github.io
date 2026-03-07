import { Ability } from "@/components";

export const DramaticReversal = () => (
  <Ability
    title="Dramatic Reversal (5 Drama)"
    subtitle="Give the audience a surprise."
    keywords="Area, Magic"
    actionType="Main action"
    range="3 burst"
    targets="Self and each ally in the area"
    addedStats={["Presence"]}
    tierResults={{
      low: "4 targets in the area can shift 1 square and make a free strike that gains a bane.",
      middle:
        "4 targets in the area can shift 2 square and make a free strike.",
      high: "4 targets in the area can shift 2 square and make a free strike that gains an edge.",
    }}
  />
);
