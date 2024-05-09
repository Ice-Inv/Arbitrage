import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonGradientProps } from "./types";
import { useTheme } from '@rneui/themed';

export function ButtonGradient({
  title,
  onPress,
}: ButtonGradientProps) {
  const {
    theme: {
      colors: {
        main1,
        main2,
        main3,
        element2,
      }
    }
  } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient
        colors={[main1, main3, main2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: element2,
          }}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 15,
  },
  gradient: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});