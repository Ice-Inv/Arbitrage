import { createTheme } from "@rneui/themed";
import { colorsDark } from "./dark";
import { colorsLight } from "./light";

export const MainTheme = createTheme({
  lightColors: colorsLight,
  darkColors: colorsDark,
  mode: 'dark', // or 'light'
});
