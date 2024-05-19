import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";

export function InfoScreen() {
  const {
    theme: {
      colors: {
        element1,
      },
    },
  } = useTheme();

  return (
    <TouchableOpacity onPress={() => {}}>
      <MaterialCommunityIcons
        name="information-outline"
        size={24}
        color={element1}
      />
    </TouchableOpacity>
  );
}
