import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { format } from 'date-fns';
import { ChartProps } from './types';
import { Points } from './components/Points';
import { Tooltip } from './components/Tooltip';
import { Padding } from '../../common';

export function Chart({
  data,
  dates,
}: ChartProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Padding>
      <View style={styles.container}>
        <Tooltip
          value={selectedIndex !== null
            ? data[selectedIndex]
            : null
          }
          date={selectedIndex !== null
            ? format(dates[selectedIndex], 'MMM d, yyyy')
            : null
          }
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <YAxis
            data={data}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{ fill: 'gray', fontSize: 10 }}
            numberOfTicks={5}
            formatLabel={(value) => `${value}`}
          />
          <LineChart
            style={styles.chart}
            data={data}
            svg={{ stroke: '#AD21FB' }}
            contentInset={{ top: 20, bottom: 10, left: 15, right: 15 }}
            curve={shape.curveMonotoneX}
          >
            <Grid />
            <Points
              x={(x) => x}
              y={(y) => y}
              data={data}
              dates={dates}
              onPress={handlePress}
              selectedIndex={selectedIndex}
            />
          </LineChart>
        </View>
      </View>
    </Padding>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
  },
  chart: { height: 200, flex: 1, marginVertical: 10 },
});
