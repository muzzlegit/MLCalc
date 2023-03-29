//STORE
import useApostateStore from "../store/useApostateStore";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";

function useApostate() {
  const player = usePlayerContext();
  const setApostate = useApostateStore(state => state.functions.setApostate);
  const apostate = useApostateStore(state => state[player]);

  const onApostateClick = e => {
    setApostate(player);
  };
  return { apostate, onApostateClick };
}

export default useApostate;
