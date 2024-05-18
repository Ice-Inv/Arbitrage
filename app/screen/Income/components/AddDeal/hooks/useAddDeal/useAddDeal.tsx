import {useTextField} from "../../../../../../hooks";

export function useAddDeal() {
  const [id, idParams] = useTextField({initValue: ''});
  const [openChain, openChainParams] = useTextField({initValue: ''})
  const [closeChain, closeChainParams] = useTextField({initValue: ''})

  return {
    id,
    openChain,
    closeChain,
  };
}
