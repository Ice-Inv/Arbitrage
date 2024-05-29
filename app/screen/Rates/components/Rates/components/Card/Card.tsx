import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@rneui/themed";
import { Button, MainBox, MainGradient } from "../../../../../../common";
import { CardProps } from "./types";
import Entypo from '@expo/vector-icons/Entypo';

export function Card({
  title,
  description,
  cost,
}: CardProps) {
  const {
    theme: {
      colors: {
        element1,
        element2,
        green1,
        red1,
      }
    }
  } = useTheme();

  return(
    <MainBox>
      <View style={styles.spaceBetween}>
        <Text style={{ ...styles.textRates, color: element1 }}>{title}</Text>
        <View
          style={{
            ...styles.check,
            borderColor: element1,
          }}
        >
          <AntDesign
            name="check"
            size={18}
            color={element1}
          />
        </View>
      </View>
      {description.map((item, key) => (
        <View key={key} style={styles.spaceBetweenRates}>
          <Text style={{ ...styles.textRatesContent, color: element1 }}>{item.text}</Text>
          {item.isAvailability ? (
            <AntDesign name="check" size={24} color={green1} />
          ):(
            <Entypo name="cross" size={24} color={red1} />
          )}
        </View>
      ))}
      <MainGradient style={{ borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16, marginTop: 15, }}>
        <View style={styles.spaceBetween}>
          <Text style={{ ...styles.textRates, color: element2 }}>Цена</Text>
          <Text style={{ ...styles.textRates, color: element2 }}>{cost} руб / мес</Text>
        </View>
      </MainGradient>
      <Button title="Выбрать" onPress={() => {}}/>
    </MainBox>
  );
}

const styles = StyleSheet.create({
  spaceBetween: {
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  spaceBetweenRates: {
    justifyContent: "space-between",
    flexDirection: 'row',
    marginTop: 12,
  },
  textRates: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '700',
  },
  textRatesContent: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    maxWidth: 240,
  },
  check: {
    borderWidth: 1,
    borderRadius: 4,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
