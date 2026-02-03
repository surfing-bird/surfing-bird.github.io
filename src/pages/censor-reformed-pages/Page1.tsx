import {
  Page,
  Column,
  Text,
  Title,
  Heading2,
  Heading3,
  TextBlock,
  BulletList,
  Detail,
} from "@/components";

const Page1 = () => (
  <Page id="class-subclass">
    <Column>
      <Title>Censor Reformed</Title>

      <Heading2>Placeholder Section Title</Heading2>
      <TextBlock>
        <Text>
          This is placeholder text. It exists only to indicate where descriptive
          content will eventually be written. It carries no mechanical or
          narrative meaning.
        </Text>

        <BulletList>
          <Detail
            detailName="Placeholder Item One"
            detailValue="This is placeholder detail text intended to be replaced later."
          />
          <Detail
            detailName="Placeholder Item Two"
            detailValue="This is additional placeholder detail text with no current purpose."
          />
        </BulletList>

        <Text>
          More placeholder text follows here. This paragraph represents
          explanatory or contextual information that has not yet been authored.
        </Text>
      </TextBlock>

      <Heading3>Placeholder Subsection</Heading3>

      <TextBlock>
        <Text>
          Placeholder text describing a system, rule, or concept. All numbers,
          mechanics, and flavor are intentionally omitted.
        </Text>

        <Text>
          Additional placeholder text expanding on the above concept. This text
          does not imply balance decisions or final design intent.
        </Text>

        <BulletList>
          <Text>
            Placeholder bullet point text. Represents a conditional outcome or
            rule.
          </Text>

          <Text>
            Placeholder bullet point text. Represents an alternative outcome or
            rule.
          </Text>
        </BulletList>

        <Text>
          Placeholder text describing an exception, clarification, or edge case.
        </Text>

        <Text>
          Placeholder text indicating the end of a temporary resource or state.
        </Text>

        <Text className="italic">
          Placeholder italicized commentary. This would normally explain design
          reasoning, intent, or philosophy, but currently serves as a visual
          stand-in only.
        </Text>
      </TextBlock>
    </Column>

    <Column>
      <Heading2>Placeholder Ability Section</Heading2>

      <Text>
        Placeholder text introducing an ability, feature, or mechanic that will
        be defined later.
      </Text>

      <TextBlock>
        <Text>
          Placeholder text where an ability component, rules block, or stat
          breakdown would normally appear.
        </Text>
      </TextBlock>

      <Text className="italic">
        Placeholder italicized text for balance notes, comparative analysis, or
        future justification. This content is not final.
      </Text>
    </Column>
  </Page>
);

export default Page1;
