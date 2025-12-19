import { Ability } from "@/components";

export const SeverTheMoment = () => (
  <Ability
    title="Sever the Moment (3 Balance)"
    subtitle="You read the flaw in their stance and cut deep."
    keywords="Melee, Strike, Weapon, Magic"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "6 + A damage",
      middle: "9 + A damage",
      high: "13 + A damage",
    }}
    effect="If the target is suffering from an effect that is ended by a saving throw, this ability deals an additional 10 damage."
  />
);

