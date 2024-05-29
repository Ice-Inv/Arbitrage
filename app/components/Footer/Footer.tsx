import { StyleSheet } from "react-native"
import { MENU } from "./constants"
import { NavItem } from "./components/NavItem"
import { FooterProps } from "./components/NavItem/types"
import { Padding } from "../../common"
import { useTheme } from "@rneui/themed"

export function Footer({
  navigate,
  currentRoute,
}: FooterProps) {
  const {
    theme: {
      mode,
      colors: {
        footer,
        footerBorder,
      },
    },
  } = useTheme();

  return (
    <Padding
      style={{
        ...styles.root,
        backgroundColor: footer,
        borderColor: footerBorder,
      }}
    >
      {MENU.map((item) => (
        <NavItem
          key={item.title}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </Padding>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 0,
    paddingBottom: 20,
    paddingTop: 8,
    borderWidth: 1,
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 4,
  },
})
