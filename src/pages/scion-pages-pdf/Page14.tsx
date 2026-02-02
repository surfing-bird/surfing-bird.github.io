import {
  PagePDF,
  ColumnPDF,
  Text,
  Heading1,
  Heading2,
  Heading4,
  Detail,
  Subtitle,
  Heading3,
  Highlight,
} from "@/components";

const Page13 = () => (
  <PagePDF id="page-13">
    <ColumnPDF>
      <Heading1>Leveled Treasures</Heading1>
      <Heading2>Leveled Weapon Treasures</Heading2>

      <div className="my-1" />

      <div className="flex flex-col gap-0">
        <Heading4>Hoversword</Heading4>
        <Subtitle className="mt-[2px]">
          The blade gently hovers horizontally, awaiting its rider.
        </Subtitle>

        <div className="flex flex-col my-2">
          <Detail detailName="Keywords" detailValue="Light Weapon, Magic" />
          <Detail
            detailName="Item Prerequisites"
            detailValue="Meteorite shard, anti-gravity matter"
          />
          <Detail
            detailName="Project Source"
            detailValue="Texts or lore in Anjali"
          />
          <Detail
            detailName="Project Roll Characteristic"
            detailValue="Agility, Intuition, or Reason"
          />
          <Detail detailName="Project Goal" detailValue="450" />
        </div>

        <div className="flex flex-col gap-2">
          <Text>
            <strong>1st Level:</strong> Any weapon ability that deals rolled
            damage using this weapon gains a +1 damage bonus. Once per turn,
            when you become adjacent to an enemy, you can deal damage to it
            equal to either your Might or Agility score. Additionally, you
            gently hover while riding the sword, allowing you to ignore
            difficult and dangerous terrain on the ground.
          </Text>

          <Text>
            <strong>5th Level:</strong> The weapon’s damage bonus increases to
            +2. When you deal damage by becoming adjacent to an enemy, they are{" "}
            <Highlight>{"A < AVERAGE"}</Highlight>, prone. Additionally, you can
            fly. If you don’t end your turn on the ground, you fall.
          </Text>

          <Text>
            <strong>9th Level:</strong> The weapon’s damage bonus increases to
            +3. You can deal damage by moving adjacent to an enemy once per turn
            per enemy instead of once per turn. Additionally, you no longer need
            to end your turn on the ground to avoid falling.
          </Text>
        </div>
      </div>

      <div className="my-1" />

      <div className="flex flex-col gap-0">
        <Heading4>Blade of Lasting Consequences</Heading4>
        <Subtitle className="mt-[2px]">
          The simple facade of this blade is betrayed by its surprising weight.
        </Subtitle>

        <div className="flex flex-col gap-0 my-2">
          <Detail detailName="Keywords" detailValue="Medium Weapon, Magic" />
          <Detail
            detailName="Item Prerequisites"
            detailValue="Adamantine chunk, a memento signifying remorse"
          />
          <Detail
            detailName="Project Source"
            detailValue="Texts or lore in Khelt"
          />
          <Detail
            detailName="Project Roll Characteristic"
            detailValue="Agility, Intuition, or Reason"
          />
          <Detail detailName="Project Goal" detailValue="450" />
        </div>

        <div className="flex flex-col gap-2">
          <Text>
            <strong>1st Level:</strong> Any weapon ability that deals rolled
            damage using this weapon gains a +1 damage bonus. Additionally, if
            you inflict an effect that is ended by a saving throw using this
            weapon, it is ended by a roll of 8 or higher.
          </Text>

          <Text>
            <strong>5th Level:</strong> The weapon’s damage bonus increases to
            +2. Additionally, the potency of your abilities applied by this
            weapon is increased by 1.
          </Text>

          <Text>
            <strong>9th Level:</strong> The weapon’s damage bonus increases to
            +3. Additionally, whenever a creature would end an effect that you
            have inflicted using this weapon it instead ends at the end of their
            next turn.
          </Text>
        </div>
      </div>
    </ColumnPDF>

    <ColumnPDF>
      {/* Leveled Treasure: Shade-maker 
*SHADE-FRIEND*
A shifting shroud of dusk clings to this armor, swallowing light with a whisper.
*Keywords*: Light Armor, Magic
*Item Prerequisites*: Cloth spun from void-silk, essence of shadow
*Project Source*: Texts or lore in Khelt
*Project Roll Characteristic*: Agility, Intuition, or Will
*Project Goal*: 450
*1st Level*: While you wear this armor, you have a +6 bonus to Stamina. As a maneuver, you can create a cube 3 pool of shadow within 10 squares that provides concealment to allies which lasts until the end of combat, or 1 minute. You can use 1 of your heroic resource to create it as a free maneuver. Additionally, while you are concealed, you can hide even if you are being observed. 
*5th Level*: The armor’s bonus to Stamina increases to +12. You have Corruption Immunity 5.  The area of the pool of shadow increases to 4 cube. You can create the pool of shadow as a free maneuver with no cost. You must gain 1 victory point before being able to do this again. 
*9th Level*: The armor’s bonus to Stamina increases to +21.  You have Corruption Immunity 10. The area of the pool of shadow increases to 5 cube. You can now create the pool of shadow as a free maneuver once per turn with no cost./}
*/}
      <div className="flex flex-col gap-0">
        <Heading4>Shade-maker</Heading4>

        <Subtitle className="mt-[2px]">
          A shifting shroud of dusk clings to this armor, swallowing light with
          a whisper.
        </Subtitle>
        <div className="flex flex-col gap-0 my-2">
          <Detail detailName="Keywords" detailValue="Light Armor, Magic" />
          <Detail
            detailName="Item Prerequisites"
            detailValue="Cloth spun from void-silk, essence of shadow"
          />
          <Detail
            detailName="Project Source"
            detailValue="Texts or lore in Khelt"
          />
          <Detail
            detailName="Project Roll Characteristic"
            detailValue="Agility, Intuition, or Reason"
          />
          <Detail detailName="Project Goal" detailValue="450" />
        </div>

        <div className="flex flex-col gap-2">
          <Text>
            <strong>1st Level:</strong> While you wear this armor, you have a +6
            bonus to Stamina. Additionally, while you are concealed, you can
            hide even if you are being observed. As a maneuver, you can create a
            cube 3 pool of shadow within 10 squares that provides concealment to
            allies which lasts until the end of combat, or 1 minute. You must
            gain 1 Victory to be able to use this ability again.
          </Text>
          <Text>
            <strong>5th Level:</strong> The armor’s bonus to Stamina increases
            to +12. You have Corruption Immunity 5. The area of the pool of
            shadow increases to 4 cube. You can create the pool of shadow as a
            free maneuver.
          </Text>
          <Text>
            <strong>9th Level:</strong> The armor’s bonus to Stamina increases
            to +21. You have Corruption Immunity 10. The area of the pool of
            shadow increases to 5 cube. You no longer need to gain 1 Victory to
            use this ability again, but can only use it once per turn.
          </Text>
        </div>
      </div>

      <Heading1>Titles</Heading1>
      <Heading2>2nd-Echelon Titles</Heading2>

      <div className="my-1" />

      <Heading3>Student of the Art</Heading3>

      <div className="flex flex-col gap-2 mt-2">
        <Subtitle>
          It seems a lifetime since I've tasted defeat. For you, I'll make an
          exception.
        </Subtitle>
        <Detail
          detailName="Prerequisite"
          detailValue="You triumph in single-combat against the scion of an art, and they have agreed to teach you a portion of their art as a result."
        />
        <Detail
          detailName="Effect"
          detailValue="Choose one of the following benefits:"
        />

        <div className="flex flex-col gap-0">
          <Text>
            <i>Enweave:</i> You learn the scion's Enweave maneuver.
          </Text>
          <Text>
            <i>Blink:</i> You learn the blinkblade scion's Blink maneuver
          </Text>
          <Text>
            <i>Runebrand:</i> You learn the runewright scion's Runebrand
            maneuver.
          </Text>
          <Text>
            <i>Soulshape:</i> You learn the soulforged scion's Soulshape
            maneuver.
          </Text>
        </div>

        <Text>
          When you use any of these benefits, you can use your own heroic
          resource for it, but you can't spend additional balance unless you
          have the balance class feature.
        </Text>
      </div>
    </ColumnPDF>
  </PagePDF>
);

export default Page13;
