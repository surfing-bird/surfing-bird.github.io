import { Ability } from "@/components";

export const SpiritRend = () => (
  <Ability
    title="Spirit Rend (5 Balance)"
    subtitle="You carve through your foe's spirit, leaving their mind reeling."
    keywords="Melee, Strike, Weapon, Magic"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "4 + A psychic damage; I < WEAK, dazed (save ends)",
      middle: "8 + A psychic damage; I < AVERAGE, dazed (save ends)",
      high: "12 + A psychic damage; I < STRONG, dazed (save ends)",
    }}
    effect="While dazed this way, the target's characteristic scores are treated as lower by 1 for the sake of resisting potencies."
  />
);
