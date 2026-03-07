import { Ability, TextBlock, Text, BulletList, Detail } from "@/components";

export const DramaticMonologue = () => (
  <Ability
    title="Dramatic Monologue"
    subtitle="It doesn't need to make sense. Just say it with emotion."
    keywords="Magic, Ranged"
    actionType="Maneuver"
    range="Ranged 10"
    targets="Special"
    effect={
      <TextBlock>
        <Text>
          <strong>Effect:</strong> Choose one of the following effects:
        </Text>
        <BulletList className="mt-[-0.5rem]">
          <Text>
            You orate a rousing tale of victory. Two allies within distance gain
            an edge on the next power roll they make before the start of your
            next turn.
          </Text>
          <Text>
            You weave a tale of high-stakes heroics. Two allies within distance
            gain 1 surge.
          </Text>
          <Text>
            You insult a foe where they're most vulnerable. Two enemies within
            distance takes a bane on the next power roll they make before the
            end of their next turn.
          </Text>
        </BulletList>
        <Detail
          detailName="Spend 1 Drama"
          detailValue="You can choose three targets for the chosen effect."
          className="mt-[-0.3rem]"
        />
      </TextBlock>
    }
  />
);
