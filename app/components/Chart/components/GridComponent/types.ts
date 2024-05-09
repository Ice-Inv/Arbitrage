export type GridComponentProps = {
  direction?: 'HORIZONTAL' | 'VERTICAL';
  belowChart?: boolean;
  svg?: Partial<{ stroke: string; strokeWidth: number; opacity: number }>;
  ticks?: number[];
  x?: (tick: number) => number;
  y?: (tick: number) => number;
}
