//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useUnitStore from "../store/useUnitsStore";

function useApostate() {
  const player = usePlayerContext();
  const setApostate = useUnitStore(state => state.functions.setApostate);

  const changeApostate = () => {
    setApostate(player);
  };
  return { changeApostate };
}

export default useApostate;
