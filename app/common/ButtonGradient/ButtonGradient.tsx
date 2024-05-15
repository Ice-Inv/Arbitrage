import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonGradientProps } from "./types";
import { useTheme } from '@rneui/themed';
import { MainGradient } from '../MainGradient';

export function ButtonGradient({
  title,
  onPress,
}: ButtonGradientProps) {
  const {
    theme: {
      colors: {
        element2,
      }
    }
  } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MainGradient style={styles.gradient}>
        <Text
          style={{
            ...styles.buttonText,
            color: element2,
          }}
        >
          {title}
        </Text>
      </MainGradient>
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