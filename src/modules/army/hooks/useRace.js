import { useEffect, useState } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useStore from "store/useStore";
//HOOKS
import useBuffsProvider from "shared/hooks/useBuffsProvider";
//CONSTS
const fractionBuff = {
  id: "aGPoxZQA",
  name: "Штраф атаки фракции",
  source: "default",
  character: "race",
  player: "all",
  target: "player",
  appliedOn: "fractionAttack",
  unit: "units",
  units: ["swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
  property: "attackRate",
  index: 0,
  description: ["Штраф атаки фракции "],
  value: [-0.5, -0.25],
  battle: true,
};

function useRace() {
  const player = usePlayerContext();
  const race = useStore(state => state[player].race);
  const setRace = useStore(state => state.functions.setRace);
  const structure = useStore(state => state.battlePlace.structure);
  const { applyBuffs } = useBuffsProvider();
  const [isMonstersShow, setIsMonstersShow] = useState(true);

  const сhangeRace = race => {
    setRace(player, race);
  };

  useEffect(() => {
    applyBuffs([fractionBuff]);
  }, [race, applyBuffs]);

  useEffect(() => {
    if (["mainAttacker", "attackerAlly", "attackerSecondAlly"].includes(player)) return;
    if (structure === "castle" || structure === "puddle") {
      if (race === "monsters") setRace("mainDefender", "undead");
      setIsMonstersShow(false);
    } else {
      setIsMonstersShow(true);
    }
  }, [structure, setRace, race, setIsMonstersShow, player]);

  return { сhangeRace, isMonstersShow };
}

export default useRace;
