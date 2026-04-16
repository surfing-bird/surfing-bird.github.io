import { Ability } from "@/components";

export const FlipTheScript = () => (
  <Ability
    title="Flip the Script (5 Drama)"
    subtitle="You try a different take on events, justifying the new locations everyone ended up in."
    keywords="Area, Magic"
    actionType="Maneuver"
    range="3 burst"
    targets="Self and each ally in the area"
    effect="Each target can teleport up to 5 squares. Any teleported target can end one effect on themselves that is ended by a saving throw or that ends at the end of their turn. You can change your routine."
  />
);
