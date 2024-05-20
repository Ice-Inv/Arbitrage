import { View } from "react-native";
import { Padding } from "../../../../common";
import { useChainsList } from "./hooks/useChainsList";
import { Chain } from "./components/Chain";

export function ChainList() {
  const {
    chains,
  } = useChainsList();

  return (
    <Padding>
      {chains.map((chain) => <Chain key={chain.id} chainParams={chain} />)}
    </Padding>
  );
}
