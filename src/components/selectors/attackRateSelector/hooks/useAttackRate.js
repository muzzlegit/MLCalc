//STORE
import useAttackRateStore from "../store/useAttackRateStore";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";

function useAttackRate() {
  const player = usePlayerContext();
  const setRate = useAttackRateStore(state => state.functions.setRate);
  const index = useAttackRateStore(state => state[player]);

  const onAttackRateChange = e => {
    setRate(player, e.currentTarget.value);
  };
  return { index, onAttackRateChange };
}

export default useAttackRate;
