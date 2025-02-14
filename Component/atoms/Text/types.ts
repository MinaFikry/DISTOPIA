import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  style?: React.CSSProperties;
  textStyle?: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  lineHeight?: number;
}
