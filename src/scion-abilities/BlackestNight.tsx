import { Ability, Text } from "@/components";

export const BlackestNight = () => (
  <Ability
    title="Blackest Night (5 Balance)"
    subtitle="You cloak yourself in lightless gloom."
    keywords="Area, Magic"
    actionType="Maneuver"
    range="3 aura"
    targets="Each enemy in the area"
    effect={
      <Text>
        <span className="font-bold">Effect: </span>
        Until the end of the encounter, each target in the area can only
        affect creatures within the area, and each square of movement it
        takes costs one extra square. You can use the Chain of Torment
        maneuver.
      </Text>
    }
  />
);

