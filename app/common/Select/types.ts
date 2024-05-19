import { Dispatch, SetStateAction } from "react";
import { StyleProp, ViewStyle } from "react-native"
import { ItemType, ValueType } from "react-native-dropdown-picker";

/**
 * Предоставляет информацию об элементе выпадающего списка
 */
export type OptionProps = {
  /**
   * Значение элемента
   */
  value: string;
  /**
   * Подпись элемента
   */
  label: string;
  /**
   * Любая другая информация в элементе
   */
  [key: string]: string;
}

/**
 * Предоставляет информацию для компонента select. Удобно использовать useSelect
 */
export type SelectProps = {
  /**
   * Список открыт / закрыт
   */
  isOpen: boolean;
  /**
   * Функция для открытия / закрытия списка
   */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  /**
   * Набор списка опций у выпадающего списка
   */
  options: ItemType<string | number | boolean>[];
  /**
   * Текущее значение у выпадающего списка
   */
  value: ValueType[];
  /**
   * Функция для изменения значения в выпадающем списке
   */
  setValue: Dispatch<SetStateAction<ValueType[]>>
  /**
   * Кастомные стили для компонента
   */
  style?: Partial<StyleProp<ViewStyle>>
}