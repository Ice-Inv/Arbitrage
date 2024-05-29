import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { InfoScreen, Padding } from "../../../../common";
import { useTheme } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATE } from "../../../../constants";

export function Header() {
  const {
    theme: {
      colors: {
        blue1,
        element1,
      },
    },
  } = useTheme();
  const { navigate } = useNavigation();

  function handleRedirectChains() {
    navigate(NAVIGATE.Chains);
  }

  return (
    <Padding style={styles.root}>
      <View style={styles.info}>
        <Text
          style={{
            ...styles.title,
            color: element1,
          }}
        >
          Фильтры по цепочкам
        </Text>
        <InfoScreen/>
      </View>
      <TouchableOpacity onPress={handleRedirectChains}>
        <Text style={{ ...styles.redirectLabel, color: blue1 }}>
          Отмена
        </Text>
      </TouchableOpacity>
    </Padding>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  redirectLabel: {
    fontSize: 16,
    fontWeight: "700",
    textDecorationLine: 'underline',
    lineHeight: 20,
  }
})
