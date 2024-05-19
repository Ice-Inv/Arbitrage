import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { CustomButton } from "./components/CustomButton";

const windowWidth = Dimensions.get('window').width;

export function ScrollableButtonSlider() {
  const buttons = [
    { imageUri: "https://images.squarespace-cdn.com/content/v1/5dbf25911ece6c59d374a929/c659bd44-4ecd-469b-a5ea-e2fa26418bff/okx+cryptocurrency+exchange+logo+2022.png", linkUri: "https://www.okx.com" },
    { imageUri: "https://avatars.dzeninfra.ru/get-zen_doc/5324345/pub_636a81183817886a4cabee7d_636a811d8fe4080da6fbf50e/scale_1200", linkUri: "https://www.bybit.com" },
    { imageUri: "https://bitgid.com/wp-content/uploads/2021/06/Huobi-cover-21.jpg", linkUri: "https://www.htx.com" },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {buttons.map((button, index) => (
        <View key={index} style={[
          styles.buttonContainer,
          index !== buttons.length - 1 && { marginRight: 10 } // Добавляем marginRight всем, кроме последнего элемента
        ]}>
          <CustomButton
            imageUri={button.imageUri}
            linkUri={button.linkUri}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
    paddingStart: 20,
    paddingEnd: 20
  },
  buttonContainer: {
    width: windowWidth * 0.8 / 3, // Примерное расчетное значение для ширины кнопок
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

export default ScrollableButtonSlider;
