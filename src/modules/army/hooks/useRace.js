import { useEffect } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useUnitStore from "../store/useUnitsStore";
//HOOKS
import useBuffsProvider from "shared/hooks/useBuffsProvider";
//CONSTS
const fractionBuff = {
  id: "aGPoxZQA",
  source: "race",
  character: "default",
  player: "all",
  target: "player",
  appliedOn: "fraction",
  unit: "units",
  units: ["swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
  property: "attackRate",
  value: [-0.5, -0.25],
  description: "Штраф атаки фракции",
};

function useRace() {
  const player = usePlayerContext();
  const race = useUnitStore(state => state.race);
  const setRace = useUnitStore(state => state.functions.setRace);
  const { applyBuffs } = useBuffsProvider();

  const сhangeRace = race => {
    setRace(player, race);
  };

  useEffect(() => {
    applyBuffs([fractionBuff]);
  }, [race, applyBuffs]);

  return { сhangeRace };
}

export default useRace;
