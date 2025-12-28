import { Ability } from "@/components";

export const EssenceLance = () => (
  <Ability
    title="Essence Lance"
    subtitle="You hurl a lance of force that pierces not flesh, but the core of their being."
    keywords="Ranged, Strike, Magic"
    actionType="Main action"
    range="Ranged 10"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "6 + R psychic damage",
      middle: "8 + R psychic damage",
      high: "11 + R psychic damage",
    }}
    effect="The target's characteristic scores are treated as lower by 1 for the sake of resisting potencies (save ends)."
  />
);

