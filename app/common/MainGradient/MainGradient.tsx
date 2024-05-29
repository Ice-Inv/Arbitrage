import { useTheme } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { MainGradientProps } from './types';

export function MainGradient({
  children,
  style,
}: MainGradientProps) {
  const {
    theme: {
      mode,
      colors: {
        main1,
        main2,
        main3,
      }
    }
  } = useTheme();

  const VARIANT = {
    light: [main1, main3, main2],
    dark: [main3, main2],
  }

  return (
    <LinearGradient
      colors={VARIANT[mode]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
