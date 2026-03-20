import { Ability } from "@/components";

export const BloodDance = () => (
  <Ability
    title="Blood Dance (9 Balance)"
    subtitle="They writhe and squirm to no avail. Their blood betrays them, moving at your command."
    keywords="Magic, Ranged"
    actionType="Main action"
    range="Ranged 10"
    targets="Three enemies"
    addedStats={["Agility"]}
    tierResults={{
      low: "Slide 3",
      middle: "Slide 4",
      high: "Slide 5",
    }}
    effect="The targets uses their signature ability against a creature of
            your choice. This signature ability can target the creature even if it
            usually wouldn’t"
  />
);

// Idea - Blood Fountain - You make a character bleed until the end of the encounter. Any enemies in range of them take some kind of buff.
