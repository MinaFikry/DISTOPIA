import { COLORS } from "../../../utils/Colors";
import Text from "../Text";
import { ButtonProps } from "./types";
import styles from "./button.module.css";

export default function Button({
  title,
  onClick,
  customContainerStyle = "",
  CustomTexStyle,
  textFontSize = 24,
  TextColor = COLORS.light,
  TextLineHeight,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${customContainerStyle}${styles.DefaultButtonStyle}`}
      {...otherProps}
    >
      <Text
        style={CustomTexStyle}
        fontSize={textFontSize}
        color={TextColor}
        lineHeight={TextLineHeight}
      >
        {title}
      </Text>
    </button>
  );
}
