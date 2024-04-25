import { useState } from "react";

export function useToggle(isActive?: boolean) {
  const [isToggle, setIsToggle] = useState(isActive || false);

  function onToggle() {
    setIsToggle((prev) => !prev);
  }

  return [isToggle, onToggle] as const;
}