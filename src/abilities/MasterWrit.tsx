import { Ability } from "@/components";

export const MasterWrit = () => (
  <Ability
    title="Master Writ (11 Balance)"
    subtitle="You brand a complex writ on the ground, weaving multiple enchantments at once."
    keywords="Area, Magic"
    actionType="Maneuver"
    range="3 burst"
    targets="Each enemy in the area"
    effect="The area remains until the end of the encounter. Choose three different Enweave effects without an area.
    Each enemy who enters the area for the first time in a combat round or starts their turn there suffers the effect of all chosen Enweave effects."
  />
);

