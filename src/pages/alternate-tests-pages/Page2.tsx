import {
  Page,
  Column,
  Text,
  Title,
  Heading2,
  TextBlock,
  BulletList,
  Heading4,
} from "@/components";

const Page1 = () => (
  <Page>
    <Column>
      <Heading2>Examples</Heading2>

      <TextBlock>
        <Heading4>High Effect, Low Risk — Chandelier Interception</Heading4>
        <div className="gap-1">
          <Text>
            <span className="font-bold">Intent:</span> Swing from a chandelier
            to intercept a fleeing duke.
          </Text>
          <Text>
            <span className="font-bold">Leverage:</span> Acrobat with Athletics.
          </Text>
          <Text>
            <span className="font-bold">Effect (High):</span> Completely stop
            the duke’s escape.
          </Text>
          <Text>
            <span className="font-bold">Risk (Low):</span> Minor harm from a
            fall.
          </Text>
        </div>

        <BulletList>
          <Text>
            <span className="font-bold">Failure:</span> Miss entirely; the duke
            escapes.
          </Text>
          <Text>
            <span className="font-bold">Reduced:</span> Reach him but in a poor
            position.
          </Text>
          <Text>
            <span className="font-bold">Success:</span> Cleanly intercept and
            halt him.
          </Text>
          <Text>
            <span className="font-bold">21+:</span> Intercept and gain clear
            advantage (disarm, pin, etc.).
          </Text>
        </BulletList>

        <Text>
          <span className="font-bold">If Risk fails:</span> Suffer minor harm
          from a bad landing.
        </Text>
      </TextBlock>

      <TextBlock>
        <Heading4>Low Effect, High Risk — Holding the Stone Door</Heading4>
        <div className="gap-1">
          <Text>
            <span className="font-bold">Intent:</span> Hold a collapsing stone
            door for allies.
          </Text>
          <Text>
            <span className="font-bold">Leverage:</span> Great Strength, no
            skill.
          </Text>
          <Text>
            <span className="font-bold">Effect (Low):</span> Hold it only
            briefly, even on full success.
          </Text>
          <Text>
            <span className="font-bold">Risk (High):</span> Crushed or broken
            limb.
          </Text>
        </div>

        <BulletList>
          <Text>
            <span className="font-bold">Failure:</span> Cannot hold it at all.
          </Text>
          <Text>
            <span className="font-bold">Reduced:</span> Stall it for a
            heartbeat.
          </Text>
          <Text>
            <span className="font-bold">Success:</span> Hold it just long enough
            for escape.
          </Text>
          <Text>
            <span className="font-bold">21+:</span> Hold it long enough to dive
            clear yourself.
          </Text>
        </BulletList>

        <Text>
          <span className="font-bold">If Risk fails:</span> Suffer a serious
          crushing injury.
        </Text>
      </TextBlock>

      <TextBlock>
        <Heading4>Medium Effect, Medium Risk — Rally the Militia</Heading4>
        <div className="gap-1">
          <Text>
            <span className="font-bold">Intent:</span> Rally frightened
            villagers against undead raiders.
          </Text>
          <Text>
            <span className="font-bold">Leverage:</span> Knight with Leadership
            skill.
          </Text>
          <Text>
            <span className="font-bold">Effect (Medium):</span> The villagers
            will stand and fight for this battle.
          </Text>
          <Text>
            <span className="font-bold">Risk (Medium):</span> If morale breaks,
            panic spreads.
          </Text>
        </div>

        <BulletList>
          <Text>
            <span className="font-bold">Failure:</span> They refuse to fight.
          </Text>
          <Text>
            <span className="font-bold">Reduced:</span> A handful stand; most
            hesitate.
          </Text>
          <Text>
            <span className="font-bold">Success:</span> The militia holds the
            line.
          </Text>
          <Text>
            <span className="font-bold">21+:</span> They fight fiercely and
            remain loyal afterward.
          </Text>
        </BulletList>

        <Text>
          <span className="font-bold">If Risk fails:</span> Panic spreads;
          cohesion suffers even if they fight.
        </Text>
      </TextBlock>
    </Column>

    <Column>
      <TextBlock>
        <Heading4>High Effect, Medium Risk — Banishing the Demon</Heading4>
        <div className="gap-1">
          <Text>
            <span className="font-bold">Intent:</span> Banish a manifested demon
            with a ritual.
          </Text>
          <Text>
            <span className="font-bold">Leverage:</span> Occult scholarship with
            ritual tools.
          </Text>
          <Text>
            <span className="font-bold">Effect (High):</span> Completely banish
            it from this realm.
          </Text>
          <Text>
            <span className="font-bold">Risk (Medium):</span> Arcane backlash.
          </Text>
        </div>

        <BulletList>
          <Text>
            <span className="font-bold">Failure:</span> The ritual collapses.
          </Text>
          <Text>
            <span className="font-bold">Reduced:</span> Weaken or delay it.
          </Text>
          <Text>
            <span className="font-bold">Success:</span> The demon is banished.
          </Text>
          <Text>
            <span className="font-bold">21+:</span> Banished and its true sigil
            is revealed.
          </Text>
        </BulletList>

        <Text>
          <span className="font-bold">If Risk fails:</span> Suffer arcane harm
          or lingering corruption.
        </Text>
      </TextBlock>

      <TextBlock>
        <Heading4>Low Effect, Low Risk — Studying Ancient Runes</Heading4>
        <div className="gap-1">
          <Text>
            <span className="font-bold">Intent:</span> Decipher worn runes on a
            wall.
          </Text>
          <Text>
            <span className="font-bold">Leverage:</span> Scholar background.
          </Text>
          <Text>
            <span className="font-bold">Effect (Low):</span> Learn only a
            fragmentary clue.
          </Text>
          <Text>
            <span className="font-bold">Risk (Low):</span> Minor mental strain.
          </Text>
        </div>

        <BulletList>
          <Text>
            <span className="font-bold">Failure:</span> No insight gained.
          </Text>
          <Text>
            <span className="font-bold">Reduced:</span> Misinterpret part of it.
          </Text>
          <Text>
            <span className="font-bold">Success:</span> Gain a small but useful
            clue.
          </Text>
          <Text>
            <span className="font-bold">21+:</span> Gain the clue plus context.
          </Text>
        </BulletList>

        <Text>
          <span className="font-bold">If Risk fails:</span> Suffer minor fatigue
          or headache.
        </Text>
      </TextBlock>

      <TextBlock>
        <Heading4>No Risk — Crafting a Banner</Heading4>
        <div className="gap-1">
          <Text>
            <span className="font-bold">Intent:</span> Craft a ceremonial war
            banner.
          </Text>
          <Text>
            <span className="font-bold">Effect:</span> Produce a banner of
            varying quality.
          </Text>
          <Text>
            <span className="font-bold">Risk:</span> None.
          </Text>
        </div>

        <BulletList>
          <Text>
            <span className="font-bold">Failure:</span> Poorly made.
          </Text>
          <Text>
            <span className="font-bold">Reduced:</span> Serviceable.
          </Text>
          <Text>
            <span className="font-bold">Success:</span> Fine craftsmanship.
          </Text>
          <Text>
            <span className="font-bold">21+:</span> Masterwork — grants
            advantage.
          </Text>
        </BulletList>

        <Text>No Risk Roll is made.</Text>
      </TextBlock>

      <TextBlock>
        <Heading4>Trivial Effect — No Roll</Heading4>
        <Text>
          <span className="font-bold">Intent:</span> Climb a sturdy ladder in
          calm conditions.
        </Text>
        <Text>
          The Effect is trivial and there is no meaningful Risk. No roll is
          made.
        </Text>
      </TextBlock>
    </Column>
  </Page>
);

export default Page1;
