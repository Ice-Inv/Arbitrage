import { useEffect, useState } from "react";
import { ItemType, ValueType } from "react-native-dropdown-picker";

export function useSelect(currentValue: ValueType[] = []) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  return {
    isOpen,
    setIsOpen,
    value,
    setValue,
  }
}