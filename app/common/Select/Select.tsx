import { View, StyleSheet } from 'react-native';
import { SelectProps } from './types';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTheme } from '@rneui/themed';

export function Select({
  isOpen,
  setIsOpen,
  options,
  value,
  setValue,
  placeholder = '',
  style = {},
}: SelectProps) {
  const {
    theme: {
      colors: {
        element4,
      },
    },
  } = useTheme();

  return (
    <View style={{ ...styles.root, ...style }}>
      <DropDownPicker
        open={isOpen}
        setOpen={setIsOpen}
        value={value}
        setValue={setValue}
        items={options}
        listMode="MODAL"
        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
        placeholder={placeholder}
        style={{ ...styles.picker, backgroundColor: element4 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
  },
  picker: {
    borderWidth: 0,
  },
});
