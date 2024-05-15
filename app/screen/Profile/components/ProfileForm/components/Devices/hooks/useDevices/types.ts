import { DeviceType } from 'expo-device';

export type DeviceInfoType = {
  deviceName: string | null;
  modelName: string | null;
  deviceType: DeviceType | null;
  brand: string | null;
  designName: string | null;
  osBuildId: string | null;
  osVersion: string | null;
  supportedCpuArchitectures: string[] | null;
  osInternalBuildId: string | null;
  manufacturer: string | null;
}

export type DeviceData = {
  id: string;
  deviceName: string | null;
  lastDateLogin: Date;
}

export type DeviceDataList = DeviceData[];
