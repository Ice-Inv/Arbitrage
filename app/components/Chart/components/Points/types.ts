export type PointsProps = {
  x: (index: number) => number;
  y: (value: number) => number;
  data: number[];
  dates: Date[];
  onPress: (index: number) => void;
  selectedIndex: number | null;
}
