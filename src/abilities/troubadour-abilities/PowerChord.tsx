import { Ability } from "@/components";

export const PowerChord = () => (
  <Ability
    title="Power Chord"
    subtitle="Your instrument rings true and your music blows everyone away."
    keywords="Area, Magic"
    actionType="Maneuver"
    range="3 cube within 1"
    targets="Each enemy in the area"
    addedStats={["Presence"]}
    tierResults={{
      low: "Push 1",
      middle: "Push 2",
      high: "Push 3",
    }}
  />
);
