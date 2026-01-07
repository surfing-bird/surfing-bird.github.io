import { Ability } from "@/components";

export const LightningStrike = () => (
  <Ability
    title="Lightning Flash (5 Balance)"
    subtitle="You become lightning, flashing from one place to another, leaving ruin in your wake."
    keywords="Melee, Weapon, Magic, Area"
    actionType="Main action"
    range="10 × 1 line within 1"
    targets="Each enemy in the area"
    addedStats={["Agility"]}
    tierResults={{
      low: "4 lightning damage",
      middle: "8 lightning damage",
      high: "12 lightning damage",
    }}
    effect="You teleport to a square on the opposite side of the area before making the power roll."
  />
);
