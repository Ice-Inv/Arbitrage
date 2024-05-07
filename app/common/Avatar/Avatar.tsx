import { View, Text } from "react-native";
import { AvatarProps } from "./types";
import { useTheme } from "@rneui/themed";

export function Avatar({
  name,
  size = 'small',
}: AvatarProps) {
  const isSmall = size === 'small'
  const {
    theme: {
      mode,
      colors: {
        main1,
        element1,
        element2,
      },
    }
  } = useTheme();

  return (
    <View
      style={{
        borderRadius: 9999,
        backgroundColor: main1,
        width: isSmall ? 36 : 48,
        height: isSmall ? 36 : 48,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: mode === "light" ? element2 : element1,
          fontSize: isSmall ? 18 : 30,
          lineHeight: isSmall ? 36 : 48,
          fontWeight: "700",
          textTransform: 'uppercase',
        }}
      >
        {name?.slice(0, 1)}
      </Text>
    </View>
  )
}