import { Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme, useThemeMode } from '@rneui/themed';

export function ColorTheme() {
  const { theme } = useTheme();
  const { setMode, mode } = useThemeMode();

  function handleToggleTheme() {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }

  return (
    <Pressable onPress={handleToggleTheme}>
      <MaterialCommunityIcons
        name="theme-light-dark"
        style={{color: theme.colors.element1, fontSize: 22}}
      />
    </Pressable>
  )
}