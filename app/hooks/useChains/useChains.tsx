import { useContext } from "react";
import { ChainsContext } from "../../providers";

export const useChains = () => useContext(ChainsContext);
