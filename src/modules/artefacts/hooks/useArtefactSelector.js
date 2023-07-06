import { useState, useCallback } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useStore from "store/useStore";

const useArtefactSelector = () => {
  const player = usePlayerContext();
  const artefacts = useStore(state => state[player].artefacts);

  const [selectedArtefact, setSelectedArtefact] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectedArtefact = useCallback(
    (place, artefact) => {
      if (place) {
        artefacts[place] ? setSelectedArtefact(artefacts[place]) : setSelectedArtefact(null);
        setSelectedPlace(place);
      } else {
        setSelectedArtefact(artefact);
      }
    },
    [artefacts],
  );

  const changeSelectedArtefact = useCallback(
    key => setSelectedArtefact(prev => ({ ...prev, [key]: !prev[key] })),
    [],
  );

  return { selectedArtefact, selectedPlace, handleSelectedArtefact, changeSelectedArtefact };
};

export default useArtefactSelector;
