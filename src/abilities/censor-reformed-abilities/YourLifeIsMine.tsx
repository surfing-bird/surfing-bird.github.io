import { Ability, Text, Highlight } from "@/components";

export const YourLifeIsMine = () => (
  <Ability
    title="Your Life Is Mine"
    subtitle="You smite down those who would harm your allies."
    keywords="Weapon, Melee"
    actionType="Triggered action"
    range="Melee 3"
    targets="Self or one ally"
    trigger="A creature makes a power roll for a main action against the target."
    effect="You can shift up to a number of squares equal to your Presence score. If you end this shift adjacent to the triggering creature, you may make a melee free strike against it. Resolve this effect before the triggering creature's main action is resolved."
    spend={
      <Text>
        <span className="font-bold">Spend 1 Wrath:</span> If the triggering
        creature has <Highlight>{"P < AVERAGE"}</Highlight>, they are frightened
        (EoT).
      </Text>
    }
  />
);
