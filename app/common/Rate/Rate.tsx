import { useTheme } from "@rneui/themed";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export function Rate() {
  const {
    theme: {
      mode,
      colors: {
        element1,
        element2,
        main1,
        main2,
        main3,
      }
    }
  } = useTheme();

  return (
    <LinearGradient
      style={styles.root}
      colors={[main1, main3, main2]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <Text
        style={{
          ...styles.text,
          color: mode === 'light' ? element2 : element1,
        }}
      >
        Premium
      </Text>
    </LinearGradient>
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
