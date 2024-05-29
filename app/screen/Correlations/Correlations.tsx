import { View, StyleSheet, Text } from "react-native";
import { Layout, MainBox, Padding } from "../../common";
import { Header } from "../../components";
import { useTheme } from "@rneui/themed";

export function Correlations() {
  const DATA = [
    {id: '1', platform1: 'BTC-USDT', profit1: '+7.11%', time: '±2 мин', platform2: 'SOL=DYDX', profit2: '+5.45%', value: '0.92'},
    {id: '2', platform1: 'ZEND-USDT', profit1: '+4.57%', time: '±1,5 мин', platform2: 'ATH=AEVO', profit2: '+10.44%', value: '0.91'},
    {id: '3', platform1: 'LTC-USDT', profit1: '+9.19%', time: '±5 мин', platform2: 'OKB=CYBER', profit2: '+7.41%', value: '0.89'},
    {id: '4', platform1: 'ALGO-USDT', profit1: '+6.43%', time: '±4 мин', platform2: 'LTC=ORDI', profit2: '+1.73%', value: '0.87'},
    {id: '7', platform1: 'BTC-ETH', profit1: '+2.94%', time: '±5 мин', platform2: 'SCA=PYTH', profit2: '+4.39%', value: '0.92'},
    {id: '9', platform1: 'BTC-ENJ', profit1: '+9.33%', time: '±3.67 мин', platform2: 'CTA=SQR', profit2: '+1.85%', value: '0.87'},
    {id: '12', platform1: 'CELO-FLR', profit1: '+3.98%', time: '±1.8 мин', platform2: 'MOJO=ATOM', profit2: '+11.18%', value: '0.98'},
    {id: '14', platform1: 'TON-ETH', profit1: '+5.12%', time: '±3.61 мин', platform2: 'NIBI=ICP', profit2: '+8.72%', value: '0.92'},
  ]

  const {
    theme: {
      colors: {
        element1,
      }
    }
  } = useTheme();

  return (
    <Layout>
      <Header title="Корреляции" isNotCircle />

      <Padding>
        {DATA.map((item) => (
          <MainBox key={item.id} style={styles.root}>
            <Text
              style={{
                ...styles.text,
                color: element1,
              }}
            >
              {item.platform1}
            </Text>
            <Text
              style={{
                ...styles.text,
                color: element1,
              }}
            >
              {item.profit1}
            </Text>
            <Text
              style={{
                ...styles.text,
                color: element1,
              }}
            >
              {item.time}
            </Text>
            <Text
              style={{
                ...styles.text,
                color: element1,
              }}
            >
              {item.platform2}
            </Text>
            <Text
              style={{
                ...styles.text,
                color: element1,
              }}
            >
              {item.value}
            </Text>
          </MainBox>
        ))}
      </Padding>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});
