import { StyleSheet } from "react-native"
import { MENU } from "./constants"
import { NavItem } from "./components/NavItem"
import { FooterProps } from "./components/NavItem/types"
import { Padding } from "../../common"

export function Footer({
  navigate,
  currentRoute,
}: FooterProps) {
  return (
    <Padding style={styles.root}>
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
    backgroundColor: 'rgb(249 250 251)',
    paddingHorizontal: 0,
    paddingBottom: 20,
    paddingTop: 8,
    borderColor: '#E1E1E1',
    borderWidth: 1,
  },
})
