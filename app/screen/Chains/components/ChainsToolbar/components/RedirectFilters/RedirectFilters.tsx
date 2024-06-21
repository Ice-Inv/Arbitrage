import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MainGradient } from "../../../../../../common";
import { Entypo } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATE } from "../../../../../../constants";

export function RedirectFilters() {
  const {
    theme: {
      colors: {
        element2,
      }
    }
  } = useTheme();
  const { navigate } = useNavigation();

  function handleRedirectFilters() {
    navigate(NAVIGATE.ChainsFilters);
  }

  return (
    <TouchableOpacity onPress={handleRedirectFilters}>
      <MainGradient style={styles.root}>
        <Entypo
          name="sound-mix"
          size={24}
          color={element2}
          style={styles.buttonIcon}
        />
      </MainGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 130,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonIcon: {
    transform: [{ rotate: '90deg' }]
  }
});
