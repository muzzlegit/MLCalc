//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useStore from "store/useStore";

function useApostate() {
  const player = usePlayerContext();
  const setApostate = useStore(state => state.functions.setApostate);

  const changeApostate = () => {
    setApostate(player);
  };
  return { changeApostate };
}

export default useApostate;
