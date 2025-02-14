import Text from "../../Component/atoms/Text";
import { COLORS } from "../../utils/Colors";
import Button from "../../Component/atoms/Button";
import { JungeFont, SquadaOneFont } from "../../utils/fonts";

export default function Home() {
  return (
    <div>
      <Text
        fontFamily={SquadaOneFont}
        fontSize={26}
        color={COLORS.primary}
        lineHeight={25}
      >
       NAME
      </Text>
      <Text
        fontFamily={JungeFont}
        fontSize={26}
        color={COLORS.primary}
        lineHeight={25}
      >
        Whereas recognition of the inherent dignity
      </Text>
      <Button title="DONE" />
    </div>
  );
}
