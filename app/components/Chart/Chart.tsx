import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { format } from 'date-fns';
import { ChartProps } from './types';
import { Points } from './components/Points';
import { Tooltip } from './components/Tooltip';
import { Padding } from '../../common';
import { GridComponent } from './components/GridComponent';
import { useTheme } from '@rneui/themed';

export function Chart({
  data,
  dates,
}: ChartProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const {
    theme: {
      mode,
      colors: {
        element4,
        bg2,
      }
    }
  } = useTheme();

  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Padding>
      <View style={{
        ...styles.container,
        backgroundColor: mode === "light" ? element4 : bg2,
      }}>
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
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
            <GridComponent />
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
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
  },
  chart: { height: 200, flex: 1, marginVertical: 10 },
});
