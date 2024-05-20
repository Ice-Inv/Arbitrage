import { TouchableHighlight, Text } from "react-native"
import { ButtonProps } from "./types"
import { useTheme } from "@rneui/themed"

export function Button({
  onPress,
  title,
  colors,
  style = {},
  styleText = {},
}: ButtonProps) {
  const {theme} = useTheme();

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors ? colors[1] : theme.colors.main3}
      style={{
        backgroundColor: colors ? colors[0] : theme.colors.main1,
        borderRadius: 8,
        width: '100%',
        marginVertical: 16,
        height: 45,
        ...style,
      }}
    >
      <Text
        style={{
          color: theme.colors.element2,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          lineHeight: 45,
          ...styleText,
        }}
      >
        {title}
      </Text>
    </TouchableHighlight>
  )
}
