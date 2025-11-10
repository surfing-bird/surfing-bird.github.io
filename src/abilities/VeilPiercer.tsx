import { Ability } from "@/components";

export const VeilPiercer = () => (
  <Ability
    title="Veil Piercer (3 Balance)"
    subtitle="You lance through a veil of mist, fading from sight."
    keywords="Ranged, Strike, Magic"
    actionType="Main action"
    range="Ranged 10"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "8 + R damage",
      middle: "12 + R damage",
      high: "16 + R damage",
    }}
    effect="Create a 1 burst area of mist which provides concealment to allies that lasts until the end of your next turn. Allies inside the mist can hide even while observed."
  />
);

