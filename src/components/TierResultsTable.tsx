import React from "react";
import { Text } from "./Text";
import { processTierResultText } from "../utils/textProcessing";
import T1 from "/icons/power-roll-t1.svg";
import T2 from "/icons/power-roll-t2.svg";
import T3 from "/icons/power-roll-t3.svg";

interface TierResults {
  low: string;
  middle: string;
  high: string;
}

interface TierResultsTableProps {
  results: TierResults;
}

export const TierResultsTable: React.FC<TierResultsTableProps> = ({
  results,
}) => {
  return (
    <div className="space-y-0.25">
      {/* ≤11 row */}
      <div className="flex gap-2 items-center justify-center">
        <img src={T1} alt="T1" className="w-[27px] h-[12px] mb-[-2px]" />
        <Text className="grow shrink basis-0">
          {processTierResultText(results.low)}
        </Text>
      </div>

      {/* 12-16 row */}
      <div className="flex gap-2 items-center justify-center">
        <img src={T2} alt="T2" className="w-[27px] h-[12px] mb-[-2px]" />
        <Text className="grow shrink basis-0">
          {processTierResultText(results.middle)}
        </Text>
      </div>

      {/* 17+ row */}
      <div className="flex gap-2 items-center justify-center">
        <img src={T3} alt="T3" className="w-[27px] h-[12px] mb-[-2px]" />
        <Text className="grow shrink basis-0">
          {processTierResultText(results.high)}
        </Text>
      </div>
    </div>
  );
};
