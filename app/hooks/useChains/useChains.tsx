import { useContext } from "react";
import { ChainsContext } from "../../providers/ChainsProvider";

export const useChains = () => useContext(ChainsContext);
