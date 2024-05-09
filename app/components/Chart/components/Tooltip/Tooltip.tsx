import { View, Text, StyleSheet } from 'react-native';
import { TooltipProps } from "./types";
import { useTheme } from '@rneui/themed';

export function Tooltip({ value, date }: TooltipProps) {
  const {
    theme: {
      colors: {
        green1,
        green3,
        red1,
        red3,
      },
    }
  } = useTheme();

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.title}>История доходности</Text>

      {value !== null && date !== null && (
        <View style={{
          ...styles.tooltip,
          backgroundColor: value > 2 ? green3 : red3,
        }}>
          <Text
            style={{
              ...styles.tooltipText,
              color: value > 0 ? green1 : red1,
            }}
          >
            {(value > 0 ? `+${value}` : value) ?? 'N/A'}$ {date ?? 'N/A'}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 15, fontWeight: 'bold' },
  tooltip: {
    padding: 8,
    borderRadius: 5,
  },
  tooltipText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  infoContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
