import { Ability } from "@/components";

export const CrescentArc = () => (
  <Ability
    title="Crescent Arc"
    subtitle="A precise arc cuts through your foes with the grace of moonlight."
    keywords="Area, Magic, Melee, Weapon"
    actionType="Main action"
    range="3 wall within 1"
    targets="Each enemy in the area"
    addedStats={["Agility"]}
    tierResults={{
      low: "2 damage",
      middle: "5 damage",
      high: "7 damage",
    }}
    effect="The wall area is only used for targeting. Each increase to the wall's length is doubled."
  />
);

