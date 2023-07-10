import { useState, useCallback } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//HOOKS
import useArtefact from "./useArtefact";
//STORE
import useStore from "store/useStore";

const useArtefactSelector = () => {
  const player = usePlayerContext();
  const artefacts = useStore(state => state[player].artefacts);
  const { addArtefact, removeArtefact } = useArtefact();

  const [selectedArtefact, setSelectedArtefact] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isArtefactChanged, setIsArtefactChanged] = useState(false);

  const handleSelectedArtefact = useCallback(
    (place, artefact) => {
      if (place) {
        artefacts[place] ? setSelectedArtefact(artefacts[place]) : setSelectedArtefact(null);
        setSelectedPlace(place);
      } else {
        setIsArtefactChanged(true);
        setSelectedArtefact(artefact);
      }
    },
    [artefacts],
  );

  const changeSelectedArtefact = useCallback(key => {
    setIsArtefactChanged(true);
    setSelectedArtefact(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const apllySelectedArtefact = useCallback(
    artefact => {
      setIsArtefactChanged(false);
      addArtefact(artefact);
      setSelectedArtefact(null);
    },
    [addArtefact],
  );
  const deleteArtefact = useCallback(
    artefact => {
      // setIsArtefactChanged(true);
      removeArtefact(artefact);
    },
    [removeArtefact],
  );

  return {
    selectedArtefact,
    selectedPlace,
    isArtefactChanged,
    handleSelectedArtefact,
    changeSelectedArtefact,
    apllySelectedArtefact,
    deleteArtefact,
  };
};

export default useArtefactSelector;
