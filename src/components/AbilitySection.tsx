import React from "react";
import { Detail } from "./Detail";
import { processTierResultText } from "@/utils/textProcessing";

interface AbilitySectionProps {
  trigger?: string | React.ReactNode;
  effect?: string | React.ReactNode;
  spend?: React.ReactNode;
}

export const AbilitySection: React.FC<AbilitySectionProps> = ({
  trigger,
  effect,
  spend,
}) => {
  let processedTrigger: React.ReactNode;
  let processedEffect: React.ReactNode;

  if (typeof trigger === "string") {
    processedTrigger = processTierResultText(trigger);
  } else {
    processedTrigger = trigger;
  }

  if (typeof effect === "string") {
    processedEffect = processTierResultText(effect);
  } else {
    processedEffect = effect;
  }

  const triggerSection = trigger && (
    <div className="mt-1">
      {typeof processedTrigger === "string" ? (
        <Detail detailName="Trigger" detailValue={processedTrigger} />
      ) : (
        processedTrigger
      )}
    </div>
  );

  const effectSection = effect && (
    <div className="mt-1">
      {typeof processedEffect === "string" ? (
        <Detail detailName="Effect" detailValue={processedEffect} />
      ) : (
        processedEffect
      )}
    </div>
  );

  const spendSection = spend && <div className="mt-1">{spend}</div>;

  return (
    <>
      {triggerSection}
      {triggerSection && effectSection && <div className="my-1" />}
      {effectSection}
      {(triggerSection || effectSection) && spendSection && (
        <div className="my-1" />
      )}
      {spendSection}
    </>
  );
};
