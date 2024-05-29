import { View, Text, StyleSheet } from "react-native";
import { FilterGridProps } from "./types";
import { useTheme } from "@rneui/themed";

export function FilterGrid({
  children,
  label = '',
  style = {},
}: FilterGridProps) {
  const {
    theme: {
      colors: {
        element1,
      },
    },
  } = useTheme();

  return (
    <View style={{ ...styles.root, ...style }}>
      {label && (
        <Text
          style={{
            ...styles.filterLabel,
            color: element1,
          }}
        >
          {label}
        </Text>
      )}

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },
  content: {
    flexDirection: 'row',
    columnGap: 12,
  },
});
