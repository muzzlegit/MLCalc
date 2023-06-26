//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useStore from "store/useStore";

function useAttackRate() {
  const player = usePlayerContext();
  const setAttackIndex = useStore(state => state.functions.setAttackIndex);

  const changeAttackRate = rate => {
    setAttackIndex(player, rate);
  };
  return { changeAttackRate };
}

export default useAttackRate;
