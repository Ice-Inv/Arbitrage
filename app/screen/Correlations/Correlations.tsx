import { View, StyleSheet, Text } from "react-native";
import { Layout, MainBox, Padding } from "../../common";
import { Header } from "../../components";

export function Correlations() {
  const DATA = [
    {id: '1', platform1: 'BTC-USDT', profit1: '+7.11%', time: '±2 мин', platform2: 'SOL=USDT', profit2: '+5.45%', value: '0.95'},
    {id: '2', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '3', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '4', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '5', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '6', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '7', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '8', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '9', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '10', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '11', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '12', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '13', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '14', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
    {id: '15', platform1: 'BTC-ETH', profit1: '+4.57%', time: '±2 мин', platform2: 'ATH=USDT', profit2: '+10.4%', value: '0.81'},
  ]

  return (
    <Layout>
      <Header title="Корреляции" isNotCircle />

      <Padding>
        {DATA.map((item) => (
          <MainBox key={item.id} style={styles.root}>
            <Text style={styles.text}>{item.platform1}</Text>
            <Text style={styles.text}>{item.profit1}</Text>
            <Text style={styles.text}>{item.time}</Text>
            <Text style={styles.text}>{item.platform2}</Text>
            <Text style={styles.text}>{item.value}</Text>
          </MainBox>
        ))}
      </Padding>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});
