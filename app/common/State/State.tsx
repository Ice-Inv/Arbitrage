import { View, Text, StyleSheet } from "react-native";
import { StateProps } from "./types";
import { useTheme } from "@rneui/themed";

export function State({
  label,
  isState,
}: StateProps) {
  const {
    theme: {
      colors: {
        green1,
        red1,
        green3,
        red3,
      },
    },
  } = useTheme();

  return (
    <View style={{ ...styles.root, backgroundColor: isState ? green3 : red3 }}>
      <Text style={{ ...styles.stepLabel, color: isState ? green1 : red1 }}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 100,
    alignItems: 'center',
    width: '100%',
  },
  stepLabel: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
  },
});
