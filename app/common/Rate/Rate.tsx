import { useTheme } from "@rneui/themed";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import { MainGradient } from "../MainGradient";
import {NAVIGATE} from "../../constants";
import {useNavigation} from "@react-navigation/native";

export function Rate() {
  const { navigate } = useNavigation();
  const {
    theme: {
      colors: {
        element2,
      }
    }
  } = useTheme();

  function handleNavigate() {
    navigate(NAVIGATE.Rates);
  }

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <MainGradient style={styles.root}>
        <Text
          style={{
            ...styles.text,
            color: element2,
          }}
        >
          Premium
        </Text>
      </MainGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 34,
    width: 130,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#000',
  },
  text: {
    lineHeight: 34,
    fontWeight: "700",
    fontSize: 16,
  },
});
