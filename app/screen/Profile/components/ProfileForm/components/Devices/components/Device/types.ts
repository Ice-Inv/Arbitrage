import { DeviceData } from "../../hooks/useDevices/types"

export type DeviceProps = {
  device: DeviceData;
  index: number;
  handleDeleteDevice: () => void;
}
