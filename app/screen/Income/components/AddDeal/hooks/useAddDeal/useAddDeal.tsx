import { RegexpPattern } from "../../../../../../constants";
import {useTextField} from "../../../../../../hooks";
import { useIncome } from "../../../../../../hooks/useIncome";
import { getValidNumber } from "../../../../../../utils/getValidNumber";

export function useAddDeal() {
  const { isLoading, error, handleSetPoint } = useIncome();

  const [id, idParams] = useTextField({initValue: '', regexp: RegexpPattern.emptyOrNumber });
  const [openChain, openChainParams] = useTextField({initValue: '', regexp: RegexpPattern.emptyOrNumberDotOrCommaNumber });
  const [closeChain, closeChainParams] = useTextField({initValue: '', regexp: RegexpPattern.emptyOrNumberDotOrCommaNumber });

  function handleSetNewPoint() {
    if (!id.value || !openChain.value || !closeChain.value) return;

    handleSetPoint({
      loopId: getValidNumber(id.value),
      inputValue: getValidNumber(openChain.value),
      outputValue: getValidNumber(closeChain.value),
    })

    idParams.onSetValue('');
    openChainParams.onSetValue('');
    closeChainParams.onSetValue('');
  }

  return {
    id,
    openChain,
    closeChain,
    handleSetNewPoint,
  };
}
