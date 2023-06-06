import { useEffect, useMemo } from "react";
//CONTEXT
import usePlayerContext from "./usePlayerContext";
//HOOKS
import useBuffsProvider from "./useBuffsProvider";
//HELPERS
import getDefaulValues from "shared/helpers/getDefaulValues";
//STORES
import useUnitStore from "modules/army/store/useUnitsStore";

function useBuffsToUnitProvider(player) {
  // const player = usePlayerContext();
  const buffsStorage = useUnitStore(state => state[player].buffsStorage);
  const setUnitProperty = useUnitStore(state => state.functions.setUnitProperty);

  useEffect(() => {
    const properties = {
      amountRate: 0,
      attackRate: 0,
      defense: 0,
      defenseLevel: 50,
      healthRate: 0,
    };
    let unitsProperties = {
      porter: {
        ...properties,
        capacityRate: 0,
      },
      swordsman: { ...properties, persecutionRate: 0 },
      cavalier: { ...properties, persecutionRate: 0 },
      flying: { ...properties, persecutionRate: 0 },
      archer: { ...properties, persecutionRate: 0 },
      healer: {
        ...properties,
        resurrectionRate: 0,
      },
      mercenary: { ...properties },
      mage: {
        ...properties,
        suppression: 0,
        towersSuppressionRate: 0,
      },
    };

    buffsStorage.forEach(buff => {
      switch (buff.appliedOn) {
        case "all":
          buff.units.forEach(unit => {
            unitsProperties[unit][buff.property] += buff.value;
          });
          break;
        case "homeLand":
          buff.units.forEach(unit => {
            unitsProperties[unit][buff.property] += buff.value;
          });
          break;
        default:
          break;
      }
    });
    for (const unit in unitsProperties) {
      for (const property in unitsProperties[unit]) {
        setUnitProperty(player, unit, { [property]: unitsProperties[unit][property] });
      }
    }
  }, [buffsStorage, setUnitProperty, player]);
}

export default useBuffsToUnitProvider;
