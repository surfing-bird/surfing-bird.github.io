import { PagePDF, ColumnPDF, Text, Heading3, Heading2 } from "@/components";

const Page11 = () => (
  <PagePDF id="page-11">
    <ColumnPDF>
      <Heading2>10th-Level Features</Heading2>
      <Text>As a 10th-level scion, you gain the following features.</Text>

      <Heading3>Characteristic Increase</Heading3>
      <Text>Your Agility and Reason scores each increase to 5.</Text>

      <Heading3>Enduring Enweave</Heading3>
      <Text>
        Whenever you Enweave, the effect chosen applies to all targets of your
        next weapon ability, rather than the first one.
      </Text>

      <Heading3>Harmony</Heading3>
      <Text>
        You have an epic resource called harmony. Each time you finish a
        respite, you gain harmony equal to the XP you gain. You can spend any
        number of harmony to gain balance (no action required). When you do, 1
        harmony becomes 3 balance. Harmony remains until you convert it to
        balance.
      </Text>

      <Heading3>Legacy Unbroken</Heading3>
      <Text>
        You are considered a master that can be learned from using the Learn
        from a Master research project. Anyone that makes a Learn from a Master
        project roll using you as the source doubles the project points gained
        from the roll.
      </Text>

      <Heading3>Perfect Balance</Heading3>
      <Text>
        When you gain balance at the start of each of your turns during combat,
        you gain 4 balance instead of 3.
      </Text>

      <Heading3>Perk</Heading3>
      <Text>You gain one perk of your choice.</Text>

      <Heading3>Skill</Heading3>
      <Text>You gain one skill of your choice.</Text>
    </ColumnPDF>

    <ColumnPDF>{""}</ColumnPDF>
  </PagePDF>
);

export default Page11;
