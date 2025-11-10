import { Ability, TextBlock, Text, BulletList, Detail } from "@/components";

export const WritOfPower = () => (
  <Ability
    title="Writ of Power (5 Balance)"
    subtitle="You brand an arcane writ onto the ground, scorching foes, or soothing allies."
    keywords="Area, Magic"
    actionType="Maneuver"
    range="2 burst"
    targets="Each enemy in the area"
    effect={
      <TextBlock>
        <Text>
          <strong>Effect:</strong> The area remains until the end of the
          encounter or you are dying. Choose one of the following effects to
          apply to the area:
        </Text>
        <BulletList>
          <Detail
            detailName="Writ of Flame"
            detailValue="Each enemy who enters the area for the first time in a combat round or starts their turn there takes damage equal to triple your Reason score."
          />
          <Detail
            detailName="Writ of Sanctuary"
            detailValue="Each ally, or youreslf, who enters the area for the first time in a combat round or starts their turn there may either spend a recovery, or end one effect that is ended by a saving throw or ends at the end of their turn."
          />
        </BulletList>
      </TextBlock>
    }
  />
);

