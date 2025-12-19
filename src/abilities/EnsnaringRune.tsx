import { Ability, Text, Highlight } from "@/components";

export const EnsnaringRune = () => (
  <Ability
    title="Ensnaring Rune"
    subtitle="Your foe steps on one of your many traps."
    keywords="Magic"
    actionType="Triggered action"
    range="Ranged 10"
    targets="1 enemy"
    trigger="The target moves."
    effect="The target takes damage equal to triple your Reason score."
    spend={
      <Text>
        <span className="font-bold">Spend 1 Balance:</span>
        If the target has <Highlight>{"I < AVERAGE"}</Highlight>, they are
        slowed (EoT).
      </Text>
    }
  />
);
