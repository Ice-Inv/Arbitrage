import { StyleSheet } from "react-native";
import { ChainProps } from "./types";
import { Button, MainBox } from "../../../../../../common";
import { RelevantInformation } from "./components/RelevantInformation";
import { useToggle } from "../../../../../../hooks";
import { LowInfo } from "./components/LowInfo";
import { AllInfo } from "./components/AllInfo";

export function Chain({
  chainParams,
}: ChainProps) {
  const [isOpen, handleSetIsOpen] = useToggle();

  return (
    <MainBox>
      <RelevantInformation
        id={chainParams.id}
        length={chainParams.length}
        residenceTime={chainParams.updateTime}
        isOpen={chainParams.isOpen}
      />

      {isOpen ? (
        <AllInfo
          profit={chainParams.profit}
          steps={chainParams.steps}
          avgProfit={chainParams.avgProfit}
        />
      ) : (
        <LowInfo
          currencyList={chainParams.currencyList}
          platformList={chainParams.platformList}
          profit={chainParams.profit}
        />
      )}

      <Button
        onPress={handleSetIsOpen}
        title={isOpen ? "Свернуть" : "Узнать больше"}
        style={styles.button}
        styleText={styles.buttonText}
      />
    </MainBox>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 0,
    marginTop: 8,
    height: 35,
  },
  buttonText: {
    lineHeight: 35,
  },
});
