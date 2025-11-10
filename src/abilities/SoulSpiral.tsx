import { Ability } from "@/components";

export const SoulSpiral = () => (
  <Ability
    title="Soul Spiral (5 Balance)"
    subtitle="Your Soulblade unfurls in a violent spiral, crashing through foes."
    keywords="Melee, Area, Weapon, Magic"
    actionType="Main action"
    range="2 burst"
    targets="Each enemy in the area"
    addedStats={["Agility"]}
    tierResults={{
      low: "5 damage",
      middle: "8 damage; push 1",
      high: "11 damage; push 3",
    }}
  />
);

