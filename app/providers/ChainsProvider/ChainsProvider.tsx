import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ChainsContextProps, ChainsData } from "../../types";
import { ChainsProviderProps } from "./types";

export const ChainsContext = createContext<ChainsContextProps>({} as ChainsContextProps);

export function ChainsProvider({
  children,
}: ChainsProviderProps) {
  const [chains, setChains] = useState<ChainsData[]>([]);
  const [filteredChains, setFilteredChains] = useState<ChainsData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);

  

  useEffect(() => {
    setIsLoadingInitial(false);
  }, []);

  const value = useMemo(() => ({
    chains,
  }), []);

  return (
    <ChainsContext.Provider value={value}>
     {!isLoadingInitial && children}
    </ChainsContext.Provider>
  )
}