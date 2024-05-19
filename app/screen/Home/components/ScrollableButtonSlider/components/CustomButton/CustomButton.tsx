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
  const handlePress = () => {
    Linking.openURL(linkUri).catch(err => console.error("Failed to open URL:", err));
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100, // Зададим фиксированную ширину
    height: 100, // и высоту для кнопок
    backgroundColor: '#FFF',
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
    width: 100, // Размер изображения подгоняется под размер кнопки
    height: 100,
    borderRadius: 10,
  }
});
