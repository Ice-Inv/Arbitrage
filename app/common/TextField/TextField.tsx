import { TextInput } from "react-native"
import { FieldProps } from "./types"
import { useTheme } from "@rneui/themed"

/**
 * Предоставляет компонент текстового поля.
 * Для контролирования поля удобно использовать useTextField.
 * 
 * @param onChange - Обработчик для записи в поле (Обязательно).
 * @param value - Обработчик для записи в поле (Обязательно).
 * @param placeholder - Вспомогательный текст (Обязательно).
 * @param isSecure - Скрывает вводимые в поле данные.
 * @param isDisable - Блокировка ввода в поле.
 * @param style - Кастомные стили если требуется.
 * 
 * @returns Возвращает стилизованное текстовое поле.
 */
export function TextField({
  onChange,
  value,
  placeholder,
  isSecure,
  isDisable = false,
  style,
}: FieldProps) {
  const {
    theme: {
      mode,
      colors: {
        bg3,
        element1,
        element2,
        element3,
        element4,
      }
    }
  } = useTheme();

  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      style={{
        borderRadius: 8,
        backgroundColor: mode === 'dark' ? bg3 : element4,
        color:  mode === 'dark' ? element2 : element1,
        marginTop: 15,
        padding: 12,
        width: '100%',
        ...style,
      }}
      placeholderTextColor={element3}
      editable={!isDisable}
    />
  )
}
