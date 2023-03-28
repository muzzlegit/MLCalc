//STORE
import useRaceStore from "../store/useRaceStore";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";

function useRace() {
  const player = usePlayerContext();
  const setRace = useRaceStore(state => state.functions.setRace);
  const race = useRaceStore(state => state[player]);

  const onRaceChange = e => {
    setRace(player, e.currentTarget.value);
  };
  return { race, onRaceChange };
}

export default useRace;
