import { View, Text, StyleSheet } from "react-native";
import { FilterSwitchProps } from "./types";
import { Switch } from "../../../../../../common";

/**
 * Предоставляет компонент переключателя с подписью.
 * 
 * @param label - Подпись к переключателю справа
 * @param isEnabled - Включен / Выключен
 * @param handleIsEnabled - Функция для смены состояния isEnable или других действий
 * @param isDisabled - Можно ли изменять состояние переключателя.
 * @param style - Кастомные стили.
 * 
 * @returns Возвращает компонент переключается с подписью.
 */
export function FilterSwitch({
  label,
  isEnabled,
  handleIsEnabled,
  isDisabled,
  style = {},
}: FilterSwitchProps) {
  return (
    <View style={{ ...styles.root, ...style }}>
      <Text style={styles.filterLabel}>{label}</Text>
      <Switch
        isEnabled={isEnabled}
        handleIsEnabled={handleIsEnabled}
        isDisabled={isDisabled}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "600",
  }
});
