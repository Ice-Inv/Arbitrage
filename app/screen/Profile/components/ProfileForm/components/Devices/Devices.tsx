import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@rneui/themed";
import { useDevices } from "./hooks/useDevices";
import { Device } from "./components/Device";

export function Devices() {
  const {
    theme: {
      colors: {
        element1,
        element4,
      }
    }
  } = useTheme();

  const {
    isLoading,
    error,
    deviceList,
  } = useDevices();

  return (
    <View style={{ ...styles.container, backgroundColor: element4 }}>
      <Text style={{ ...styles.label, color: element1 }}>Привязанные устройства</Text>

      <View style={styles.devices}>
        {deviceList.map((device, index) => (
          <Device
            key={device.id}
            device={device}
            index={index}
            handleDeleteDevice={() => {}}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
  },
  devices: {
    marginTop: 12,
  },
});
