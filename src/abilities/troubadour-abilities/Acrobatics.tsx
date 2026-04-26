import { Ability, TextBlock, Text, BulletList, Detail } from "@/components";

export const Acrobatics = () => (
  <Ability
    title="Acrobatics"
    subtitle="Folks love a good tumble."
    keywords="Area, Magic, Performance"
    actionType="Maneuver"
    range="5 aura"
    targets="Self and each ally in the area"
    //

    // Put this in the effect, and the 3 last lines in bullet list points.
    // Effect: While this performance is active, each target who starts their turn in the area gains the following benefits:
    // They automatically obtain a tier 3 outcome on one test made to jump, tumble, or climb as part of their movement before the end of their turn.
    // You gain a bonus to the number of squares you can shift when you disengage equal to the troubadour’s Presence score.
    // Whenever you fall, you reduce the distance of the fall by a number of squares equal to the troubadour’s Presence score.

    //
    effect={
      <TextBlock>
        <Text>
          <strong>Effect:</strong> While this performance is active, each target
          who starts their turn in the area gains the following benefits:
        </Text>
        <BulletList className="mt-[-0.5rem]">
          <Text>
            They automatically obtain a tier 3 outcome on one test made to jump,
            tumble, or climb as part of their movement before the end of their
            turn.
          </Text>
          <Text>
            You gain a bonus to the number of squares you can shift when you
            disengage equal to the troubadour’s Presence score.
          </Text>
          <Text>
            Whenever you fall, you reduce the distance of the fall by a number
            of squares equal to the troubadour’s Presence score.
          </Text>
        </BulletList>
      </TextBlock>
    }
  />
);
