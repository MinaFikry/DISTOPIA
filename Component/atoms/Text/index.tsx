import { COLORS } from "../../../utils/Colors";
import { SquadaOneFont } from "../../../utils/fonts";
import { TextProps } from "./types";

export default function Text({
  children,
  style,
  fontSize = 12,
  color = COLORS.light,
  fontFamily = SquadaOneFont,
  lineHeight,
  ...otherProps
}: TextProps) {
  const textStyle = {
    fontSize,
    color,
    fontFamily,
    lineHeight,
    ...style,
  };

  return (
    <p style={textStyle} {...otherProps}>
      {children}
    </p>
  );
}
