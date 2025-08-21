import { TextBlock } from "./TextBlock";

interface DetailProps {
  detailName: string;
  detailValue: string | React.ReactNode;
  className?: string;
}

export function Detail({
  detailName,
  detailValue,
  className = "",
}: DetailProps) {
  return (
    <TextBlock>
      <span className={`text-[10px] ${className}`}>
        <strong>{detailName}: </strong>
        <span>{detailValue}</span>
      </span>
    </TextBlock>
  );
}
