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
      <Title>Alternate Tests</Title>
      <Heading2>Design Goals</Heading2>
      <TextBlock>
        <ol className="list-decimal pl-6 mt-[-4px]">
          <li>
            <Text>
              Encapsulate difficulty within the 'Effect' segment, instead of
              tying it to one of three tables, allowing more granualrity in
              difficulty.
            </Text>
          </li>
          <li>
            <Text>
              Encapsulate level of risk within the 'Risk' segment, instead of
              tying it to one of three tables, allowing more granularity in
              risk.
            </Text>
          </li>
          <li>
            <Text>
              Uncouple success from difficulty. A test may be difficult but
              low-risk, or vice versa, rather than having those two factors
              hard-coupled. In addition, this means players may still suffer
              consequences even when they optimize their odds of success,
              whereas in the existing system abilities and perks can optimize
              risk away.
            </Text>
          </li>
        </ol>
      </TextBlock>

      <Heading2>Test Procedure</Heading2>
      <Text className="italic mb-2 mt-[-2px]">
        For the record, this procedure is a modifierd version of the action
        procedure from Mythic Bastionland, because I like how simple and concise
        it is. However, if you are familiar with the 'Action Roll' from Blades
        in the Dark, you could use its framing of position and effect here
        instead, which in this framework are encapsulated by the Risk and Effect
        questions.
      </Text>
      <TextBlock>
        <Text>
          When the players take action which the director deterimnes requires a
          test, the director and players work down this list together, with the
          director being the final arbiter:
        </Text>

        <ol className="list-decimal pl-6 mt-[-4px]">
          <li>
            <Text>
              <span className="font-bold">Intent:</span> What are you trying to
              do?
            </Text>
          </li>
          <li>
            <Text>
              <span className="font-bold">Leverage:</span> What makes it
              possible? Established fiction, backgrounds, careers, skills,
              abilities, features, perks, may all be taken into account.
            </Text>
          </li>

          {/* <li>
            <Text>
              <span className="font-bold">Cost:</span> Would it use a resource,
              or have a side-effect?
            </Text>
          </li> */}

          <li>
            <Text>
              <span className="font-bold">Effect:</span> Considering the
              Leverage, how effective would this action be at achieving the
              Intent?
            </Text>
          </li>

          <li>
            <Text>
              <span className="font-bold">Risk:</span> What's at risk? If there
              is no risk, skip the risk die (see below), or even skip the test
              entirely.
            </Text>
          </li>
        </ol>

        <Text>
          Once the above has been established through conversation, the player
          rolls two seperate rolls. The action roll, and the risk roll.
        </Text>
      </TextBlock>
    </Column>

    <Column>
      <TextBlock>
        <Heading4>Action Roll</Heading4>
        <Text>
          This action roll determines the success or failure of the action. This
          roll uses a standard power roll (2d10), adding the director's chosen
          characteristic of the hero based on the nature of the task, and if
          applicable, a skill bonus as chosen by the player, in addition to
          applying edges and banes according to any factors in the fiction or
          otherwise. Importantly, just because a result reads 'success', it does
          not mean that the Intent has been achieved, but rather than the
          established Effect is achieved. The player should be aware of the
          potential effect before the roll is made.
        </Text>
        <BulletList>
          <Text>
            <span className="font-bold">1-11:</span> Failure.
          </Text>
          <Text>
            <span className="font-bold">12-16:</span> Reduced success.
          </Text>
          <Text>
            <span className="font-bold">17-20:</span> Success.
          </Text>
          <Text>
            <span className="font-bold">Natural 19 or 20:</span> Success with a
            reward.
          </Text>
        </BulletList>
      </TextBlock>
      <TextBlock>
        <Heading4>Risk Roll</Heading4>
        <Text>
          The risk roll determines whether the hero suffers the consequences of
          the established Risk. If the hero applies a skill to the action roll,
          the player rolls 2d6 and take the highest result. If they don't apply
          a skill, the player rolls a single d6.
        </Text>
        <BulletList>
          <Text>
            <span className="font-bold">1-3:</span> Consequences suffered.
          </Text>
          <Text>
            <span className="font-bold">4-6:</span> Consequences avoided.
          </Text>
        </BulletList>
      </TextBlock>

      {/* <TextBlock>
        <Heading4>Risk Roll (Version 2, emphasizes randomness)</Heading4>
        <Text>
          The risk roll determines whether the hero suffers the consequences of
          the established Risk. The player rolls a single d6.
        </Text>
        <BulletList>
          <Text>
            <span className="font-bold">1-3:</span> Consequences suffered.
          </Text>
          <Text>
            <span className="font-bold">4-6:</span> Consequences avoided.
          </Text>
        </BulletList>
      </TextBlock> */}
    </Column>
  </Page>
);

export default Page1;
