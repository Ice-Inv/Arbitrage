import '@rneui/themed';
import { ThemeColor } from './app/themes/types';

declare module '@rneui/themed' {
  export interface Colors extends ThemeColor {}
}