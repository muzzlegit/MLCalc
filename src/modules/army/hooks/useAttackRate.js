//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useUnitStore from "../store/useUnitsStore";

function useAttackRate() {
  const player = usePlayerContext();
  const setAttackIndex = useUnitStore(state => state.functions.setAttackIndex);

  const changeAttackRate = rate => {
    setAttackIndex(player, rate);
  };
  return { changeAttackRate };
}

export default useAttackRate;
