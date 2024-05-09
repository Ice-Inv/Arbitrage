import React from 'react';
import { G, Line } from 'react-native-svg';
import { GridComponentProps } from './types';

export function GridComponent({
  direction = 'HORIZONTAL',
  belowChart = false,
  svg = { stroke: 'grey', strokeWidth: 0.5, opacity: 0.5 },
  ticks = [],
  x = (tick) => tick,
  y = (tick) => tick,
}: GridComponentProps) {
  return (
    <G>
      {ticks.map((tick, index) => {
        const lineProps =
          direction === 'HORIZONTAL'
            ? { x1: 0, x2: '100%', y1: y(tick), y2: y(tick) }
            : { x1: x(tick), x2: x(tick), y1: 0, y2: '100%' };

        return (
          <Line
            key={`grid-line-${index}`}
            {...lineProps}
            {...svg}
          />
        );
      })}
    </G>
  );
}
