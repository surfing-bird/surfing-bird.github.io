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
      low: "Up to 2 targets can shift 2 square and make a free strike.",
      middle: "Up to 3 targets can shift 2 square and make a free strike.",
      high: "Up to 4 targets can shift 2 square and make a free strike.",
    }}
    effect="Each target can spend a recovery."
  />
);
