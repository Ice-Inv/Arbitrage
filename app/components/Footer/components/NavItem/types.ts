import { TypeRootStackParamList } from "../../../Navigation/types"
import { FooterItemProps } from "../../types"

export type NavItemProps = {
  item: FooterItemProps
  navigate: (screenName: keyof TypeRootStackParamList) => void,
  currentRoute: string,
}

export type FooterProps = {
  navigate: (screenName: keyof TypeRootStackParamList) => void
  currentRoute: string,
}