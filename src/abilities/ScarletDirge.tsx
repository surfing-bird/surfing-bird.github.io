import { Ability } from "@/components";

export const ScarletDirge = () => (
  <Ability
    title="Scarlet Dirge (5 Balance)"
    subtitle="A curse of burning blood - upon death, their body bursts in a crimson shower."
    keywords="Melee, Area, Weapon, Magic"
    actionType="Main action"
    range="Melee 1"
    targets="One enemy creature"
    effect="A target who is not a minion, leader, or solo creature and who is winded
      at the end of its next turn is reduced to 0 Stamina. When it dies either this way
      or beforehand, the target explodes in a shower of burning blood, dealing twice your
      Reason score in damage to all enemies within range 3 of it."
    addedStats={["Agility"]}
    tierResults={{
      low: "5 + A damage",
      middle: "9 + A damage",
      high: "12 + A damage",
    }}
  />
);

