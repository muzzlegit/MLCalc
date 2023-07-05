import { useEffect, useState } from "react";
//STORE
import useStore from "store/useStore";
//HOOKS
import useBuffsProvider from "shared/hooks/useBuffsProvider";
//CONSTS
const homeLandBuff = {
  id: "2B0eBD4m",
  name: "Защита родной земли",
  source: "default",
  character: "battlefield",
  player: "all",
  target: "player",
  appliedOn: "homeLand",
  unit: "units",
  units: ["porter", "swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
  property: "defense",
  index: 0,
  description: ["Защита всех войск +25"],
  value: [25],
  battle: true,
};
const unitHomeLandBuff = {
  id: "9CKGyeAH",
  name: "Атака родной земли юнита",
  source: "default",
  character: "battlefield",
  player: "all",
  target: "player",
  appliedOn: "unitHomeLand",
  unit: "units",
  units: ["swordsman", "cavalier", "flying", "archer", "mercenary"],
  property: "attackRate",
  index: 0,
  description: ["Атака родной земли юнита 50% "],
  value: [0.5],
  battle: true,
};

function useBattlefield() {
  const [isCastle, setIsCastle] = useState(false);
  const { battlefield, structure } = useStore(state => state.battlePlace);
  const { setBattlefield, setStructure } = useStore(state => state.functions);
  const { applyBuffs } = useBuffsProvider();

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

  useEffect(() => {
    structure === "castle" ? setIsCastle(true) : setIsCastle(false);
  }, [structure]);

  return { onBattlefieldChange, onStructureChange, isCastle };
}

export default useBattlefield;
