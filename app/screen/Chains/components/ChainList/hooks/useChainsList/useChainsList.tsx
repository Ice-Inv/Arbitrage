import { useChains } from "../../../../../../hooks/useChains";

export function useChainsList() {
  const { chains } = useChains();

  return {
    chains,
  }
}
