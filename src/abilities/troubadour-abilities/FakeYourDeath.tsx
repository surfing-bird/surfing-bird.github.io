import { Ability } from "@/components";

export const FakeYourDeath = () => (
  <Ability
    title="Fake Your Death (5 Drama)"
    subtitle="O happy dagger, this is thy sheath!"
    keywords="Magic"
    actionType="Free triggered action"
    range="Self"
    targets="Self"
    trigger="You take damage."
    effect="You take half the triggering damage. You then turn invisible and create a magical illusion of your corpse falling in your space, and can use the hide maneuver even if observed. While you are invisible this way, you gain a +3 bonus to speed and you ignore difficult terrain. The illusion and your invisibility last until the end of your next turn, or until the illusion is interacted with, you take damage, or you use a main action or a maneuver."
  />
);
