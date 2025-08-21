import type { ReactNode } from "react";
import { Heading4 } from "./Heading4";
import { TextBlock } from "./TextBlock";

interface FeatureProps {
  title: ReactNode;
  children: ReactNode[] | ReactNode;
  className?: string;
}

export function Feature({ title, children, className = "" }: FeatureProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <Heading4>{title}</Heading4>
      <TextBlock>{children}</TextBlock>
    </div>
  );
}
