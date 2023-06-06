//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useUnitStore from "../store/useUnitsStore";

function useRace() {
  const player = usePlayerContext();
  const setRace = useUnitStore(state => state.functions.setRace);

  const сhangeRace = race => {
    setRace(player, race);
  };
  return { сhangeRace };
}

export default useRace;
