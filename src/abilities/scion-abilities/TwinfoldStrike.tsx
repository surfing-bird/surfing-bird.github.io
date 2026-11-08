import { Ability } from "@/components";

export const TwinfoldStrike = () => (
  <Ability
    title="Twinfold Strike"
    subtitle="You strike twice in quick succession."
    keywords="Melee, Weapon, Strike"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "The target takes 3 damage twice.",
      middle: "The target takes 4 damage twice.",
      high: "The target takes 5 damage twice.",
    }}
    effect="Each instance of damage is considered a separate strike."
  />
);

