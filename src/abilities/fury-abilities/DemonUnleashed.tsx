import { Ability, Text, Highlight } from "@/components";

export const DemonUnleashed = () => (
  <Ability
    title="Demon Unleashed (7 Ferocity)"
    subtitle="Foes tremble at the sight of you."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect={
      <Text>
        <strong>Effect:</strong> Until the end of the encounter or until you are
        dying, each enemy who starts their turn within range 3 of you and has{" "}
        <Highlight>{"P < STRONG"}</Highlight> is frightened until the end of
        their turn.
      </Text>
    }
  />
);
