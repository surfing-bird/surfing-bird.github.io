import React from "react";
import { Heading5 } from "./Heading5";
import { Subtitle } from "./Subtitle";
import { Text } from "./Text";
import { PowerRoll } from "./PowerRoll";
import { TierResultsTable } from "./TierResultsTable";
import { AbilitySection } from "./AbilitySection";
import { validateTierResults } from "../utils/validation";
import Target from "/icons/target.svg";
import Range from "/icons/distance.svg";

// ---- Types ----
type ActionType =
  | "Main action"
  | "Maneuver"
  | "Free maneuver"
  | "Triggered action"
  | "Free triggered action";

interface TierResults {
  low: string;
  middle: string;
  high: string;
}

interface AbilityProps {
  title: string;
  subtitle: string;
  keywords: string;
  actionType: ActionType;
  range: string;
  targets: string;
  addedStats?: ("Might" | "Agility" | "Reason" | "Intuition" | "Presence")[];
  tierResults?: TierResults;
  effect?: string | React.ReactNode;
  effectBeforeResult?: boolean;
  trigger?: string | React.ReactNode;
  spend?: React.ReactNode;
  className?: string;
}

// ---- Action Type → Color Map ----
const actionTypeColors: Record<ActionType, string> = {
  "Main action": "bg-red-100",
  Maneuver: "bg-blue-100",
  "Free maneuver": "bg-blue-100/50",
  "Triggered action": "bg-green-100",
  "Free triggered action": "bg-green-100/50",
};

export function Ability({
  title,
  subtitle,
  keywords,
  actionType,
  range,
  targets,
  addedStats,
  tierResults,
  effect,
  effectBeforeResult = false,
  trigger,
  spend,
  className = "",
}: AbilityProps) {
  const hasTierResults = validateTierResults(
    addedStats,
    tierResults?.low,
    tierResults?.middle,
    tierResults?.high
  );

  const sortedKeywords = keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .sort()
    .join(", ");

  return (
    <div className={`bg-gray-100 p-2 ${className}`}>
      {/* Header section with background depending on action type */}
      <div
        className={`flex flex-row items-stretch border-1 border-gray-300 ${actionTypeColors[actionType]}`}
      >
        {/* <div
          style={{
            width: "1px",
            borderRadius: "2px",
            background: "black",
            minHeight: "100%",
          }}
        /> */}
        <div className="flex-1 px-3 py-1">
          {/* Title */}
          <Heading5>{title}</Heading5>

          {/* Subtitle */}
          <Subtitle className="mt-[2px]">{subtitle}</Subtitle>

          {/* Horizontal rule */}
          <hr className="ability-hr mt-[2px]" />

          {/* Keywords and Action Type */}
          <div className="flex justify-between items-center mt-1">
            <Text>
              <strong>{sortedKeywords}</strong>
            </Text>
            <Text>
              <strong>{actionType}</strong>
            </Text>
          </div>

          {/* Range and Targets */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-[2px]">
              <img src={Range} alt="Range" className="w-[10px] h-[10px]" />
              <Text>{range}</Text>
            </div>
            <div className="flex items-center space-x-[2px]">
              <img src={Target} alt="Target" className="w-[10px] h-[10px]" />
              <Text>{targets}</Text>
            </div>
          </div>
        </div>
      </div>

      {/* Power Roll and Tier Results */}
      {hasTierResults && (
        <>
          {effectBeforeResult && (
            <AbilitySection trigger={trigger} effect={effect} />
          )}

          <PowerRoll addedStats={addedStats!} />
          <TierResultsTable results={tierResults!} />

          {!effectBeforeResult && (
            <AbilitySection trigger={trigger} effect={effect} spend={spend} />
          )}
        </>
      )}

      {/* If no tier results */}
      {!hasTierResults && (
        <AbilitySection trigger={trigger} effect={effect} spend={spend} />
      )}
    </div>
  );
}
