import { PointsProps } from "./types";
import { Circle, G, Text as SVGText } from 'react-native-svg';
import { format } from 'date-fns';
import { useTheme } from "@rneui/themed";

export function Points({
  x,
  y,
  data,
  dates,
  onPress,
  selectedIndex,
}: PointsProps) {
  const {
    theme: {
      colors: {
        element1,
      }
    }
  } = useTheme();

  return (
    <G>
      {data.map((value, index) => (
        <G key={index}>
          <Circle
            cx={x(index)}
            cy={y(value)}
            r={6}
            fill="#0652DD"
            onPress={() => onPress(index)}
          />
          {selectedIndex === index && (
            <SVGText
              x={x(index)}
              y={y(value) - 10}
              fill={element1}
              fontSize="10"
              textAnchor="middle"
            >
              {format(dates[index], 'MMM d')}
            </SVGText>
          )}
        </G>
      ))}
    </G>
  )
};