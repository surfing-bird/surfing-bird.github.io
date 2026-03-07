import { Ability } from "@/components";

export const Riposte = () => (
  <Ability
    title="Riposte"
    subtitle="I'd have brought treats had I known I'd be fighting a dog."
    keywords="Melee, Triggered"
    actionType="Triggered action"
    range="Melee 3"
    targets="Self or one ally"
    trigger="The target takes damage from a melee strike."
    effect="The target makes a free strike against the creature who made the triggering strike."
  />
);
