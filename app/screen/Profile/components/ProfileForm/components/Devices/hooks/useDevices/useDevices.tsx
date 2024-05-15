import { useEffect, useState } from "react";
import { DeviceDataList, DeviceInfoType } from "./types";
import { DEVICE_INFO_INIT } from "./constants";
import * as Device from 'expo-device';
import { useAuth } from "../../../../../../../../hooks";

export function useDevices() {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoType>(DEVICE_INFO_INIT);
  const [deviceList, setDeviceList] = useState<DeviceDataList>([
    { id: '1', deviceName: 'iPhone 13 mini', lastDateLogin: new Date()},
  ]);

  /**
   * Функция для получения информации об устройстве пользователя
   */
  async function fetchDeviceInfo() {
    const info = {
      deviceName: await Device.deviceName,
      modelName: Device.modelName,
      deviceType: Device.deviceType,
      brand: Device.brand,
      designName: Device.designName,
      osBuildId: Device.osBuildId,
      osVersion: Device.osVersion,
      supportedCpuArchitectures: Device.supportedCpuArchitectures,
      osInternalBuildId: Device.osInternalBuildId,
      manufacturer: Device.manufacturer,
    };
    setDeviceInfo(info);
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchDeviceInfo();
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    deviceList,
  }
}