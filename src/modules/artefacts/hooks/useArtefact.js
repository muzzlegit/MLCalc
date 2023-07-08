import { useCallback, useEffect } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//HOOKS
import useBuffsProvider from "shared/hooks/useBuffsProvider";
//STORE
import useStore from "store/useStore";
//HELPERS
import { getFormattedArtefactBuffs, getFormattedBuffs, getArtefactsSet } from "shared/helpers";
//DATA
import ARTEFACTS from "shared/data/ARTEFACTS.json";

const useArtefact = () => {
  const player = usePlayerContext();
  const artefacts = useStore(state => state[player].artefacts);
  const { setArtefact, deleteArtefact, setArtefactKit } = useStore(state => state.functions);
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

  //USE EFFECTS
  useEffect(() => {
    const { kit, ...artsArray } = artefacts;

    const namesQuantity = {};
    Object.values(artsArray).forEach(artefact => {
      if (!artefact) return;
      const current = namesQuantity[artefact.set] ?? 0;
      namesQuantity[artefact.set] = current + 1;
    });
    for (const name in namesQuantity) {
      if (namesQuantity[name] >= 9) {
        if (artefacts.kit) removeBuff(artefacts.kit.buffs);

        setArtefactKit(player, getArtefactsSet(ARTEFACTS, name));

        applyBuffs(getArtefactsSet(ARTEFACTS, name).buffs);
      } else {
        if (artefacts.kit?.setName === name) {
          console.log("dellll");
          setArtefactKit(player, null);
          removeBuff(kit.buffs);
        }
      }
    }
  }, [applyBuffs, artefacts, player, removeBuff, setArtefactKit]);

  return { addArtefact, getArtefactsByPlace, removeArtefact };
};

export default useArtefact;
