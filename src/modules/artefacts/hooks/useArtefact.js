import { useCallback } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//HOOKS
import useBuffsProvider from "shared/hooks/useBuffsProvider";
//STORE
import useStore from "store/useStore";
//HELPERS
import { getFormattedArtefactBuffs } from "shared/helpers";
//DATA
import ARTEFACTS from "shared/data/ARTEFACTS.json";

const useArtefact = () => {
  const player = usePlayerContext();
  const artefacts = useStore(state => state[player].artefacts);
  const { setArtefact, deleteArtefact } = useStore(state => state.functions);
  const { applyBuffs, removeBuff } = useBuffsProvider();

  const addArtefact = useCallback(
    artefact => {
      if (!artefact) return;
      if (artefacts[artefact.place]) {
        removeBuff(getFormattedArtefactBuffs(artefacts[artefact.place]));
        setArtefact(player, artefact);
        applyBuffs(getFormattedArtefactBuffs(artefact));
      } else {
        setArtefact(player, artefact);
        applyBuffs(getFormattedArtefactBuffs(artefact));
      }
    },
    [applyBuffs, artefacts, player, removeBuff, setArtefact],
  );

  const removeArtefact = useCallback(
    artefact => {
      removeBuff(getFormattedArtefactBuffs(artefact));
      deleteArtefact(player, artefact);
    },
    [player, removeBuff, deleteArtefact],
  );

  const getArtefactsByPlace = useCallback(placeName => {
    return ARTEFACTS.filter(({ place }) => place === placeName);
  }, []);

  return { addArtefact, getArtefactsByPlace, removeArtefact };
};

export default useArtefact;
