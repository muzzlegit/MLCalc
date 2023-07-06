import { useCallback } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useStore from "store/useStore";
//DATA
import ARTEFACTS from "shared/data/ARTEFACTS.json";

const useArtefact = () => {
  const player = usePlayerContext();
  const artefacts = useStore(state => state[player].artefacts);
  const setArtefact = useStore(state => state.functions.setArtefact);

  const addArtefact = useCallback(
    artefact => {
      if (!artefact) return;
      setArtefact(player, artefact);
    },
    [player, setArtefact],
  );

  const setArtefactType = useCallback(
    (place, key) => {
      if (!artefacts[place]) return;
      const changedArtefact = { ...artefacts[place], [key]: !artefacts[place][key] };
      setArtefact(player, changedArtefact);
    },
    [artefacts, player, setArtefact],
  );

  const getArtefactsByPlace = useCallback(placeName => {
    return ARTEFACTS.filter(({ place }) => place === placeName);
  }, []);

  return { addArtefact, setArtefactType, getArtefactsByPlace };
};

export default useArtefact;
