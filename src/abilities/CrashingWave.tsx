import { Ability } from "@/components";

export const CrashingWave = () => (
  <Ability
    title="Crashing Wave (5 Balance)"
    subtitle="Leaping skyward, you crash down with the weight of the ocean."
    keywords="Area, Melee, Magic, Weapon"
    actionType="Main action"
    range="3 cube within 1"
    targets="Each enemy in the area"
    addedStats={["Agility"]}
    tierResults={{
      low: "6 damage; push 2",
      middle: "9 damage; push 4",
      high: "13 damage; push 6",
    }}
    effect="You can jump up to 2 squares before resolving the power roll. The targets are force moved one at a time, starting with the targets nearest to you, and can be pushed into other targets in the area."
  />
);

