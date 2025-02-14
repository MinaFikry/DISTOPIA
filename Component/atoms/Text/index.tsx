import { COLORS } from "../../../utils/Colors";
import { SquadaOneFont } from "../../../utils/fonts";
import { TextProps } from "./types";

export default function Text({
  children,
  style,
  className = "",
  fontSize = 12,
  color = COLORS.light,
  fontFamily = SquadaOneFont,
  lineHeight,
  ...otherProps
}: TextProps) {
  const textStyle = {
    fontSize,
    color,
    lineHeight,
    ...style,
  };

  return (
    <p className={`${className} ${fontFamily}`} style={textStyle} {...otherProps}>
      {children}
    </p>
  );
}
