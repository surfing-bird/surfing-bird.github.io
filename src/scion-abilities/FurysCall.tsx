import { Ability } from "@/components";

export const FurysCall = () => (
  <Ability
    title="Fury's Call"
    subtitle="Their anger betrays them."
    keywords="Magic, Melee, Weapon, Strike"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "3 + A damage",
      middle: "6 + A damage",
      high: "9 + A damage",
    }}
    effect="The target must make an opportunity attack against you as a free triggered action if they are able.
    If they do, you gain 2 surges which you may use on this ability."
  />
);

