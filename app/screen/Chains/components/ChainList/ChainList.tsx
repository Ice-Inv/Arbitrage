import { View } from "react-native";
import { Padding } from "../../../../common";
import { useChainsList } from "./hooks/useChainsList";
import { Chain } from "./components/Chain";
import { NoData } from "./components/NoData";

export function ChainList() {
  const {
    chains,
  } = useChainsList();

  return (
    <Padding style={{ marginBottom: 20 }}>
      {chains.length > 0 ? (
        chains.map((chain) => <Chain key={chain.id} chainParams={chain} />)
      ) : (
        <NoData />
      )}
    </Padding>
  );
}
