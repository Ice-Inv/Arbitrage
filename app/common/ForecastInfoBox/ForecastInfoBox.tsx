import { Padding } from "../Padding";
import { MainBox } from "../MainBox";
import { useTheme } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";
import { ForecastInfoBoxProps } from "./types";

export function ForecastInfoBox({
  forecastValue,
  mainCurrency,
  mainCurrencyValue,
  dynamicValueFirst,
  dynamicValueSecond,
}: ForecastInfoBoxProps) {
  const {
    theme: {
      colors: {
        element1,
        green1,
        red1,
        green3,
        red3,
      }
    }
  } = useTheme();

  return(
    <Padding style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
      <MainBox>
        <Text style={{ ...styles.title, color: element1 }}>Возможный доход</Text>
        <Text style={{ ...styles.subTitle, color: element1 }}>{forecastValue} {mainCurrency}</Text>
      </MainBox>
      <MainBox>
        <Text style={{ ...styles.title, color: element1 }}>Основная валюта</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ ...styles.subTitle, color: element1 }}>{mainCurrencyValue} {mainCurrency}</Text>
          <View style={{ ...styles.paramContainer, backgroundColor: dynamicValueFirst > 0 ? green3 : red3}}>
            <Text style={{ ...styles.paramContent, color: dynamicValueFirst > 0 ? green1 : red1 }}>
              {(dynamicValueFirst > 0 ? `+${dynamicValueFirst}` : dynamicValueFirst) ?? 'N/A'}
            </Text>
            <Text style={{ ...styles.paramContent, color: dynamicValueFirst > 0 ? green1 : red1 }}>
              {(dynamicValueSecond > 0 ? `+${dynamicValueSecond}` : dynamicValueSecond) ?? 'N/A'}%
            </Text>
          </View>
        </View>
      </MainBox>
    </Padding>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "600",
    marginBottom: 20,
    marginRight: 15,
  },
  subTitle: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "500",
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
})
