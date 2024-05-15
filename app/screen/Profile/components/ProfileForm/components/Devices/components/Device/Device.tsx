import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";
import { formattedDate } from "../../../../../../../../utils";
import { DeviceProps } from "./types";

export function Device({
  index,
  device: {
    deviceName,
    lastDateLogin,
  },
  handleDeleteDevice,
}: DeviceProps) {
  const {
    theme: {
      colors: {
        element1,
      }
    }
  } = useTheme();

  return (
    <View style={styles.device}>
      <View style={styles.deviceNameContainer}>
        <Text style={{ ...styles.deviceText, color: element1 }}>
          {index + 1}.
        </Text>
        <Text style={{ ...styles.deviceText, color: element1 }}>
          {deviceName}
        </Text>
      </View>

      <View style={styles.deviceDateContainer}>
        <Text style={{ ...styles.deviceText, color: element1 }}>
          {formattedDate(lastDateLogin)}
        </Text>

        <TouchableOpacity onPress={handleDeleteDevice}>
          <View style={styles.deviceDelete}>
            <MaterialIcons name="delete" size={24} color={element1} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  device: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deviceNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
  },
  deviceDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
  },
  deviceDelete: {
    height: 25,
    width: 25,
  },
  deviceText: {
    fontSize: 15,
    fontWeight: "600",
  }
});
