import { Ability } from "@/components";

export const SanguineThread = () => (
  <Ability
    title="Sanguine Thread (3 Balance)"
    subtitle="Your blade draws a line through flesh, and a thread of life follows - woven back into your form."
    keywords="Melee, Strike, Weapon, Magic"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "4 + A damage",
      middle: "7 + A damage",
      high: "11 + A damage",
    }}
    effect="You gain temporary Stamina equal to half the damage dealt by this ability."
  />
);

