import { Ability } from "@/components";

export const SoulRealm = () => (
  <Ability
    title="Soul Realm (11 Balance)"
    subtitle="The boundary between this world and the spirit realm grows thin. Within your reach, souls shimmer exposed."
    keywords="Area, Magic"
    actionType="Maneuver"
    range="2 aura"
    targets="Each enemy in the area"
    effect="Until the end of the encounter or you are dying, targets have damage weakness 5 while within the area."
  />
);

