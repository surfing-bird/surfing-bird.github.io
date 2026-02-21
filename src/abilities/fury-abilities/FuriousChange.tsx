import { Ability, Text } from "@/components";

export const FuriousChange = () => (
  <Ability
    title="Furious Change"
    subtitle="In your anger, you revert to a more bestial form."
    keywords="Transform"
    actionType="Triggered action"
    range="Self"
    targets="Self"
    trigger="You lose Stamina and are not dying."
    effect="You gain temporary Stamina equal to three times your Might score and can enter your animal form or hybrid form."
    spend={
      <Text>
        <span className="font-bold">Spend 1 Ferocity:</span> If you are not
        dying, you can spend a Recovery.
      </Text>
    }
  />
);
