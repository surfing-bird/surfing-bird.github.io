import { Ability } from "@/components";

export const RuneOfSiphoning = () => (
  <Ability
    title="Rune of Siphoning (9 Balance)"
    subtitle="You brand a foe with a vicious rune, siphoning the life out of them with every attack."
    keywords="Magic, Melee"
    actionType="Maneuver"
    range="Melee 1"
    targets="One creature"
    effect="Until the end of the encounter or you are dying, whenever you or any ally uses an ability to deal rolled damage to the target, the ability deals extra damage equal to twice your Reason, and the creature dealing the damage gains temporary stamina equal to twice your Reason score. When a creature targeted by this ability is reduced to 0 Stamina, you can use a free triggered action to move the rune to a new target within range 5 of the previous target."
  />
);

