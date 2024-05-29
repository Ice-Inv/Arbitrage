import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@rneui/themed";
import { useDevices } from "./hooks/useDevices";
import { Device } from "./components/Device";
import { MainBox } from "../../../../../../common";

export function Devices() {
  const {
    theme: {
      colors: {
        element1,
      },
    },
  } = useTheme();

  const {
    isLoading,
    error,
    deviceList,
  } = useDevices();

  return (
    <MainBox>
      <Text
        style={{
          ...styles.label,
          color: element1,
        }}
      >
        Привязанные устройства
      </Text>

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
    </MainBox>
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
