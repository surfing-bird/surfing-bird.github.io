import { Ability } from "@/components";

export const SoulGaze = () => (
  <Ability
    title="Soul Gaze (9 Balance)"
    subtitle="You peer into your foe's soul, laying bare its true nature - compelling them to do the same."
    keywords="Magic, Ranged"
    actionType="Main action"
    range="Ranged 5"
    targets="One creature"
    addedStats={["Reason"]}
    tierResults={{
      low: "6 psychic damage, P < WEAK, dazed and frightened (save ends)",
      middle:
        "10 psychic damage, P < AVERAGE, dazed and frightened (save ends)",
      high: "16 psychic damage, P < STRONG, dazed and frightened (save ends)",
    }}
    effect="Until the end of the encounter or you are dying, the first time in a turn that the target damages another creature, they take 10 damage."
  />
);
