import { useTheme } from "@rneui/themed";
import { SwitchProps } from "./types";
import { Switch as SwitchRn } from 'react-native-switch';

export function Switch({
  isEnabled,
  handleIsEnabled,
  isDisabled = false,
}: SwitchProps) {
  const {
    theme: {
      colors: {
        green1,
        red1,
        element2,
      },
    },
  } = useTheme();

  return (
    <SwitchRn
      value={isEnabled}
      onValueChange={handleIsEnabled}
      disabled={isDisabled}
      activeText="On"
      inActiveText="Off"
      circleSize={30}
      barHeight={36}
      backgroundActive={green1}
      backgroundInactive={red1}
      circleActiveColor={element2}
      circleInActiveColor={element2}
      circleBorderWidth={0}
      switchWidthMultiplier={3.1}
    />
  );
}
