import { View, Text } from "react-native";
import { AvatarProps } from "./types";
import { useTheme } from "@rneui/themed";

export function Avatar({
  name,
  size = 'small',
}: AvatarProps) {
  const isSmall = size === 'small'
  const {theme} = useTheme();

  return (
    <View
      style={{
        borderRadius: 9999,
        backgroundColor: theme.colors.main1,
        width: isSmall ? 36 : 48,
        height: isSmall ? 36 : 48,
        marginRight: isSmall ? 12 : undefined,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: theme.colors.element1,
          fontSize: isSmall ? 18 : 20,
          lineHeight: 28,
          fontWeight: "500",
        }}
      >
        {name?.slice(0, 1)}
      </Text>
    </View>
  )
}