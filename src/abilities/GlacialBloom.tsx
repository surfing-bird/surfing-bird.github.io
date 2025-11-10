import { Ability } from "@/components";

export const GlacialBloom = () => (
  <Ability
    title="Glacial Bloom (5 Balance)"
    subtitle="Like a flower in bloom, ice explodes onto your foes."
    keywords="Area, Magic, Ranged"
    actionType="Main action"
    range="3 cube in range 10"
    targets="Each enemy in the area"
    addedStats={["Agility"]}
    tierResults={{
      low: "5 cold damage, A < WEAK, slowed (save ends)",
      middle: "8 cold damage, A < AVERAGE, slowed (save ends)",
      high: "11 cold damage, A < STRONG, restrained (save ends)",
    }}
  />
);

