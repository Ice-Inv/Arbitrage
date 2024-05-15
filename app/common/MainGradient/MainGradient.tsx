import { useTheme } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { MainGradientProps } from './types';

export function MainGradient({
  children,
  style,
}: MainGradientProps) {
  const {
    theme: {
      colors: {
        main1,
        main2,
        main3,
      }
    }
  } = useTheme();

  return (
    <LinearGradient
      colors={[main1, main3, main2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
