import { useTheme } from '@rneui/themed';
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';

interface ButtonProps {
  imageUri: string;
  linkUri: string;
}

export function CustomButton({
  imageUri,
  linkUri,
}: ButtonProps) {
  const {
    theme: {
      mode,
      colors: {
        bg1,
        bg2,
      },
    },
  } = useTheme();

  const handlePress = () => {
    Linking.openURL(linkUri).catch(err => console.error("Failed to open URL:", err));
  }

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: mode === 'light' ? bg1 : bg2,
      }}
      onPress={handlePress}
    >
      <Image source={{ uri: imageUri }} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  }
});
