import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export function NoData() {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>
        На данный момент прибыльных ликвидных цепочек не найдено
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    height: windowHeight - 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
});
