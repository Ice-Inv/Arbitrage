import { StyleSheet, Pressable, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { NavItemProps } from "./types";

export function NavItem({
  item,
  navigate,
  currentRoute,
}: NavItemProps) {
  const isActive = currentRoute === item.title;

  return (
    <Pressable onPress={() => navigate(item.title)} style={styles.root}>
      <AntDesign
        name={item.iconName}
        style={{
          fontSize: 20,
          lineHeight: 28,
          color: isActive ? 'rgb(59 130 246)' : 'rgb(107 114 128)',
        }}
      />
      <Text
        style={{
          fontSize: 12,
          lineHeight: 16,
          color: isActive ? 'rgb(59 130 246)' : 'rgb(107 114 128)',
        }}
      >
        {item.title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: '20%',
  },
})