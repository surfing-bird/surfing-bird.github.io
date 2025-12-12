import { PagePDF, Text, Heading2 } from "@/components";

const Intro = () => (
  <PagePDF id="level-1">
    <div className="flex flex-col gap-2 mx-auto">
      <Heading2>An Ending</Heading2>
      <div className="flex flex-col gap-2">
        <Text className="leading-tight">
          His blade was slick with red. His breath came ragged, heavy.
        </Text>
        <Text className="leading-tight">
          <span className="italic">Compose yourself</span>, his master’s voice
          echoed in his mind, <span className="italic">Breath is a river.</span>
        </Text>
        <Text className="leading-tight">
          Caelith tried to steel himself, to use the ancient mantras drilled
          into him, but it was not working. Not this time.
        </Text>
        <Text className="leading-tight">
          He was safe, he knew – for he won. But this did not feel like a
          victory.
        </Text>
        <Text className="leading-tight">
          This day had been one of many endings, and there were still more to
          come.
        </Text>
        <Text className="leading-tight">
          His downed foe’s breaths grew shallower. They too would soon end.
        </Text>
        <Text className="leading-tight">
          “It didn’t have to come to this. You forced my hand. You knew my
          oath.” Caelith’s voice broke.
        </Text>
        <Text className="leading-tight">
          “There is always a choice,” Talin rasped from the temple's floor to
          Caelith’s back.
        </Text>
        <Text className="leading-tight">
          It had begun to rain, drops of water gently tapping the ground.
        </Text>
        <Text className="leading-tight">
          “Not for me. I am my oath,” Caelith responded weakly, those last words
          barely making their way out of his throat.
        </Text>
        <Text className="leading-tight">
          <span className="italic">Grief is deep waters.</span> Deep waters
          indeed, and he felt himself beginning to drown.
        </Text>
        <Text className="leading-tight">
          “You and your stupid words. ‘I bring justice for all,’” he intoned
          sarcastically. “This would have been justice!” coughed Caelith’s
          former friend, blood forming around his mouth. “You just wouldn’t
          listen, you never did.”
        </Text>
        <Text className="leading-tight">
          He, too, was having a hard time speaking, if for different reasons
          entirely.
        </Text>
        <Text className="leading-tight">
          “I did listen. I listened all too well. You have strayed far, old
          friend. I am sorry… truly.”
        </Text>
        <Text className="leading-tight">This was justice. It had to be.</Text>
        <Text className="leading-tight">
          “You have ended this Art,” Talin spat, “and our friendship, and my
          life” – words beginning to slur – “what would your master have said?”
        </Text>
        <Text className="leading-tight">
          He struck that last blow with all his venom.
        </Text>
        <Text>
          A fire lit in Caelith’s stomach, bright against the void inside him,
          and he instinctively tried to suffocate it.{" "}
          <span className="italic">Rage is blindness.</span>
        </Text>
        <Text className="leading-tight">
          Caelith ended an ancient, time-honored tradition, an Art that would
          never be practiced again.
        </Text>
        <Text className="leading-tight">
          Its uniqueness, its elegance, its artistry and beauty – it would all
          pass from this world, and in time be forgotten, as many Arts already
          had. As his friend would, soon enough.
        </Text>
        <Text className="leading-tight">
          His master would not have been pleased, he admitted to himself, but
          were the words he spoke – the oath he gave – not more important?
        </Text>
        <Text className="leading-tight">
          “He’d have done the same,” Caelith spoke at last, his long pause
          betraying his front of confidence.
        </Text>
        <Text className="leading-tight">No response came.</Text>
        <Text className="leading-tight">
          He looked at the ground behind him, at the friend he would not face as
          he drew his last breath, at the friend he killed – there was no life
          there.
        </Text>
        <Text className="leading-tight">Alone again. Another ending.</Text>
        <Text className="leading-tight">
          “Perhaps it is time for a beginning,” he whispered to himself.
        </Text>
      </div>
    </div>
    {/* <ColumnPDF>
      <Heading2>The Scion</Heading2>
      <div className="flex flex-col gap-2">
        <Text className="leading-tight">
          His blade was slick with red. His breath came ragged, heavy.
        </Text>
        <Text className="leading-tight">
          <span className="italic">Compose yourself</span>, his master’s voice
          echoed in his mind, <span className="italic">Breath is a river.</span>
        </Text>
        <Text className="leading-tight">
          Caelith tried to steel himself, to use the ancient mantras drilled
          into him, but it was not working. Not this time.
        </Text>
        <Text className="leading-tight">
          He was safe, he knew – for he won. But this did not feel like a
          victory.
        </Text>
        <Text className="leading-tight">
          This day had been one of many endings, and there were still more to
          come.
        </Text>
        <Text className="leading-tight">
          His downed foe’s breaths grew shallower. They too would soon end.
        </Text>
        <Text className="leading-tight">
          “It didn’t have to come to this. You forced my hand. You knew my
          oath.” Caelith’s voice broke.
        </Text>
        <Text className="leading-tight">
          “There is always a choice,” Talin rasped from the temple's floor to
          Caelith’s back.
        </Text>
        <Text className="leading-tight">
          It had begun to rain, drops of water gently tapping the ground.
        </Text>
        <Text className="leading-tight">
          “Not for me. I am my oath,” Caelith responded weakly, those last words
          barely making their way out of his throat.
        </Text>
        <Text className="leading-tight">
          <span className="italic">Grief is deep waters.</span> Deep waters
          indeed, and he felt himself beginning to drown.
        </Text>
        <Text className="leading-tight">
          “You and your stupid words. ‘I bring justice for all,’” he intoned
          sarcastically. “This would have been justice!” coughed Caelith’s
          former friend, blood forming around his mouth. “You just wouldn’t
          listen, you never did.”
        </Text>
        <Text className="leading-tight">
          He, too, was having a hard time speaking, if for different reasons
          entirely.
        </Text>
        <Text className="leading-tight">
          “I did listen. I listened all too well. You have strayed far, old
          friend. I am sorry… truly.”
        </Text>
        <Text className="leading-tight">This was justice. It had to be.</Text>
        <Text className="leading-tight">
          “You have ended this Art,” Talin spat, “and our friendship, and my
          life” – words beginning to slur – “what would your master have said?”
        </Text>
        <Text className="leading-tight">
          He struck that last blow with all his venom.
        </Text>
        <Text>
          A fire lit in Caelith’s stomach, bright against the void inside him,
          and he instinctively tried to suffocate it.{" "}
          <span className="italic">Rage is blindness.</span>
        </Text>
        <Text className="leading-tight">
          Caelith ended an ancient, time-honored tradition, an Art that would
          never be practiced again.
        </Text>
        <Text className="leading-tight">
          Its uniqueness, its elegance, its artistry and beauty – it would all
          pass from this world, and in time be forgotten, as many Arts already
          had. As his friend would, soon enough.
        </Text>
        <Text className="leading-tight">
          His master would not have been pleased, he admitted to himself, but
          were the words he spoke – the oath he gave – not more important?
        </Text>
        <Text className="leading-tight">
          “He’d have done the same,” Caelith spoke at last, his long pause
          betraying his front of confidence.
        </Text>
        <Text className="leading-tight">No response came.</Text>
        <Text className="leading-tight">
          He looked at the ground behind him, at the friend he would not face as
          he drew his last breath, at the friend he killed – there was no life
          there.
        </Text>
        <Text className="leading-tight">Alone again. Another ending.</Text>
        <Text className="leading-tight">
          “Perhaps it is time for a beginning,” he whispered to himself.
        </Text>
      </div>
    </ColumnPDF>
    <ColumnPDF>{""}</ColumnPDF> */}
  </PagePDF>
);

export default Intro;
