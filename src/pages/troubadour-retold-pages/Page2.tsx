import { Page, Column, Heading2, Text, Block } from "@/components";
import {
  DramaticReversal,
  FakeYourDeath,
  FlipTheScript,
  MethodActing,
} from "@/abilities/troubadour-abilities";

const Page2 = () => (
  <Page id="heroic-abilities">
    <Column>
      <Heading2>Rebalanced Heroic Abilities</Heading2>

      <Block>
        <DramaticReversal />
        <Text className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Block>

      <Block>
        <FakeYourDeath />
        <Text className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Block>
    </Column>

    <Column>
      <Block>
        <MethodActing />
        <Text className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </Text>
      </Block>

      <Block>
        <FlipTheScript />
        <Text className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </Text>
      </Block>
    </Column>
  </Page>
);

export default Page2;
