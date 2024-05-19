import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";

export function Sorting() {
  const {
    theme: {
      colors: {
        element1,
      },
    },
  } = useTheme();

  return (
    <TouchableOpacity onPress={() => {}}>
      <FontAwesome
        name="sort"
        size={24}
        color={element1}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    
  },
});
