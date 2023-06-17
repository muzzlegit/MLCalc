import { useEffect } from "react";
//STORE
import useBattleFieldStore from "modules/battlefield/store/useBattleFieldStore";
//HOOKS
import useBuffsProvider from "shared/hooks/useBuffsProvider";
import useBuffsToUnitProvider from "shared/hooks/useBuffsToUnitProvider";
//CONSTS
const homeLandBuff = {
  id: "2B0eBD4m",
  source: "battlefield",
  character: "default",
  player: "all",
  target: "player",
  appliedOn: "homeLand",
  unit: "units",
  units: ["porter", "swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
  property: "defense",
  value: 25,
  description: "Защита родной земли",
};
const unitHomeLandBuff = {
  id: "9CKGyeAH",
  source: "battlefield",
  character: "default",
  player: "all",
  target: "player",
  appliedOn: "unitHomeLand",
  unit: "units",
  units: ["swordsman", "cavalier", "flying", "archer", "mercenary"],
  property: "attackRate",
  value: 0.5,
  description: "Атака родной земли юнита",
};

function useBattlefield() {
  const battlefield = useBattleFieldStore(state => state.battlefield);
  const { setBattlefield, setStructure } = useBattleFieldStore(state => state.functions);
  const { applyBuffs } = useBuffsProvider();

  useBuffsToUnitProvider("mainAttacker");
  useBuffsToUnitProvider("mainDefender");

  const onBattlefieldChange = e => {
    setBattlefield(e.currentTarget.value);
    if (e.currentTarget.value === "mine") setStructure("town");
  };
  const onStructureChange = e => {
    setStructure(e.currentTarget.value);
  };

  useEffect(() => {
    applyBuffs([
      {
        ...homeLandBuff,
        battlefield,
      },
      {
        ...unitHomeLandBuff,
        battlefield,
      },
    ]);
  }, [battlefield, applyBuffs]);

  return { onBattlefieldChange, onStructureChange };
}

export default useBattlefield;
