import { Ability } from "@/components";

export const ThunderRoar = () => (
  <Ability
    title="Thunder Roar (5 Ferocity)"
    subtitle="You unleash a howl that hurls your enemies back."
    keywords="Area, Melee, Weapon"
    actionType="Main action"
    range="5 × 1 line within 1"
    targets="Each enemy in the area"
    addedStats={["Might"]}
    tierResults={{
      low: "4 damage; push 2",
      middle: "7 damage; push 4",
      high: "11 damage; push 6",
    }}
    effect="The targets are force moved one at a time, starting with the target nearest to you, and can be pushed into other targets in the same line."
  />
);
