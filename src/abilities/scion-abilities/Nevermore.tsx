import { Ability } from "@/components";

export const Nevermore = () => (
  <Ability
    title="Nevermore (9 Balance)"
    subtitle="Their minds twist as they are gripped by an deep, loathing despair."
    keywords="Ranged, Magic, Area"
    actionType="Main action"
    range="5 cube within 10"
    targets="Each enemy in the area"
    addedStats={["Reason"]}
    tierResults={{
      low: "6 psychic damage; I < WEAK, sapped and slowed (save ends)",
      middle: "9 psychic damage; I < AVERAGE, sapped and slowed (save ends)",
      high: "13 psychic damage; I < STRONG, sapped and slowed (save ends)",
    }}
  />
);
