import { Ability, Text, Highlight } from "@/components";

export const DemonUnleashed = () => (
  <Ability
    title="Demon Unleashed (7 Ferocity)"
    subtitle="Foes tremble at the sight of you."
    keywords="Magic"
    actionType="Maneuver"
    range="2 Burst"
    targets="Self"
    effect={
      <Text>
        <strong>Effect:</strong> Each target moves half their speed away from
        you, and is <Highlight>{"I < AVERAGE"}</Highlight> frightened until the
        end of their next turn.
      </Text>
    }
  />
);
