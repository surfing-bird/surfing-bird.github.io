import { Ability } from "@/components";

export const MethodActing = () => (
  <Ability
    title="Method Acting (5 Drama)"
    subtitle="They're so hurt by your performance, you start to believe it yourself."
    keywords="Melee, Strike, Weapon"
    actionType="Main action"
    range="Melee 1"
    targets="One creature"
    addedStats={["Agility"]}
    tierResults={{
      low: "5 + A damage; P < WEAK, dazed (save ends)",
      middle: "8 + A damage; P < AVERAGE, dazed (save ends)",
      high: "12 + A damage; P < STRONG, dazed (save ends)",
    }}
    effect="You can become bleeding (save ends) to make the target bleeding (save ends)."
  />
);
