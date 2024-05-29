import * as Clipboard from 'expo-clipboard';

export function useCopy() {
  const handleCopy = (value: string) => {
    Clipboard.setString(value);
  };

  return {
    handleCopy,
  }
}
