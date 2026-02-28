import { Ability, Text, Highlight } from "@/components";

export const FaceTheStorm = () => (
  <Ability
    title="Face the Storm! (7 Ferocity)"
    subtitle="Shocked in the face of your naked brutality, your enemy’s instincts take over."
    keywords="Magic"
    actionType="Maneuver"
    range="Self"
    targets="Self"
    effect={
      <Text>
        <strong>Effect:</strong> Until the end of the encounter or until you are
        dying, each creature you make a melee strike against who has{" "}
        <Highlight>{"P < AVERAGE"}</Highlight> is taunted until the end of their
        next turn. Additionally, when you use an ability that deals rolled
        damage against any enemy taunted by you, including as a part of a melee
        strike that would make them taunted, the ability deals extra damage
        equal to twice your Might score and increases its potency by 1.
      </Text>
    }
  />
);
