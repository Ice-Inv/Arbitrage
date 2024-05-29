import {MainBox, Padding} from "../../common";
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from "@rneui/themed";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import {LastDealProps} from "./types";

export function LastDeal({
  label,
  value,
  dynamicValueFirst,
  dynamicValueSecond,
}: LastDealProps) {
  const {
    theme: {
      mode,
      colors: {
        element1,
        element2,
        blue1,
        green1,
        green3,
        red1,
        red3,
      }
    }
  } = useTheme();

  return(
    <Padding>
      <MainBox>
        <View style={{ ...styles.container }}>
          <View>
            <Text style={{ ...styles.title, color: element1 }}>
              {label}
            </Text>
            <View style={styles.costContainer}>
              <Text style={{ ...styles.cost, color: element1 }}>
                {value.toFixed(2)} $
              </Text>
              <View style={{ ...styles.paramContainer, backgroundColor: dynamicValueFirst > 0 ? green3 : red3}}>
                <Text style={{ ...styles.paramContent, color: dynamicValueFirst > 0 ? green1 : red1 }}>
                  {(dynamicValueFirst > 0 ? `+${dynamicValueFirst.toFixed(2)}` : dynamicValueFirst.toFixed(2)) ?? 'N/A'}
                </Text>
                <Text style={{ ...styles.paramContent, color: dynamicValueFirst > 0 ? green1 : red1 }}>
                  {(dynamicValueSecond > 0 ? `+${dynamicValueSecond.toFixed(2)}` : dynamicValueSecond.toFixed(2)) ?? 'N/A'}%
                </Text>
              </View>
            </View>
          </View>
          <View style={{ ...styles.borderIcon, backgroundColor: blue1 }}>
            <SimpleLineIcons
              name="briefcase"
              size={24}
              color={mode === 'light' ? element2 : element1}
            />
          </View>
        </View>
      </MainBox>
    </Padding>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
  },
  costContainer: {
    flexDirection: 'row',
    columnGap: 18,
    marginTop: 8,
  },
  cost: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 20,
  },
  paramContainer: {
    flexDirection: 'row',
    columnGap: 5,
    paddingHorizontal: 9,
    borderRadius: 18,
  },
  paramContent: {
    fontSize: 9,
    lineHeight: 20,
    fontWeight: '400',
  },
  borderIcon: {
    borderRadius: 100,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: { height: 200, flex: 1, marginVertical: 10 },
});
