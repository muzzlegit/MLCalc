import { useCallback, useEffect, useState } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//HOOKS
import useUnitStore from "../../modules/army/store/useUnitsStore";
//HELERS
import getDefaulValues from "shared/helpers/getDefaulValues";
import getBuffsArraysByPlayers from "shared/helpers/getBuffsArraysByPlayers";
import useBuffsToUnitProvider from "./useBuffsToUnitProvider";
function useBuffsProvider() {
  const addBuffs = useUnitStore(state => state.functions.addBuffs);
  const removeBuffs = useUnitStore(state => state.functions.removeBuffs);

  const applyBuffs = useCallback(
    buffs => {
      const playersArrays = getBuffsArraysByPlayers(buffs);

      for (const key in playersArrays) {
        if (playersArrays[key].buffsArray.length) {
          playersArrays[key].playerNames.forEach(name => {
            addBuffs(name, playersArrays[key].buffsArray);
          });
        }
      }
    },
    [addBuffs],
  );

  const removeBuff = useCallback(
    buffs => {
      const playersArrays = getBuffsArraysByPlayers(buffs);
      for (const key in playersArrays) {
        if (playersArrays[key].buffsArray.length) {
          playersArrays[key].playerNames.forEach(name => {
            removeBuffs(name, playersArrays[key].buffsArray);
          });
        }
      }
    },
    [removeBuffs],
  );

  // useEffect(() => {
  //   applyBuffs(getDefaulValues(player));
  // }, []);
  //USE EFFECT
  // useEffect(() => {
  //   const properties = {
  //     attack: 0,
  //     defense: 0,
  //     defenseLevel: 0,
  //     health: 0,
  //   };
  //   let unitsProperties = {
  //     porter: {
  //       ...properties,
  //       capacity: 0,
  //     },
  //     swordsman: { ...properties, persecution: 0 },
  //     cavalier: { ...properties, persecution: 0 },
  //     flying: { ...properties, persecution: 0 },
  //     archer: { ...properties, persecution: 0 },
  //     healer: {
  //       ...properties,
  //       resurrection: 0,
  //     },
  //     mercenary: { ...properties },
  //     mage: {
  //       ...properties,
  //       suppression: 0,
  //       towersSuppression: 0,
  //     },
  //   };
  //   unitsBuffsStorage.forEach(buff => {
  //     if (player === "attackerAlly") {
  //       console.log(buff);
  //     }
  //     if (buff.appliedOn === "all") {
  //       buff.units.forEach(unit => {
  //         unitsProperties[unit][buff.property] += buff.value;
  //       });
  //     }

  //     // if (buff.homeLand === battlefield) {
  //     //   if (buff.unit === "fortification") return;
  //     //   if (buff.unit === "tower") return;
  //     //   if (buff.unit === "magicTower") {
  //     //     console.log("magicTower");
  //     //   } else {
  //     //     buff.unit.forEach(unit => {
  //     //       unitsProperties[unit][buff.property] += buff.value;
  //     //     });
  //     //   }
  //     // }
  //     //   if (
  //     //     buff.homeLand === "fraction" &&
  //     //     (mainAttackerFraction !== mainDefenderFraction || mainDefenderApostate)
  //     //   ) {
  //     //     if (buff.unit === "fortification") return;
  //     //     if (buff.unit === "tower") return;
  //     //     if (buff.unit === "magicTower") {
  //     //       console.log("magicTower");
  //     //     } else {
  //     //       buff.unit.forEach(unit => {
  //     //         unitsProperties[unit][buff.property] += buff.value;
  //     //       });
  //     //     }
  //     //   }
  //     //   if (
  //     //     buff.homeLand === "monsters" &&
  //     //     (mainAttackerFraction !== mainDefenderFraction || mainDefenderApostate)
  //     //   ) {
  //     //     if (buff.unit === "player") {
  //     //       console.log("player");
  //     //     } else {
  //     //       buff.unit.forEach(unit => {
  //     //         unitsProperties[unit][buff.property] += buff.value;
  //     //       });
  //     //     }
  //     //   }
  //     // });
  //     for (const unit in unitsProperties) {
  //       for (const property in unitsProperties[unit]) {
  //         setUnitProperty(player, unit, { [property]: unitsProperties[unit][property] });
  //       }
  //     }
  //   });
  // }, [unitsBuffsStorage, player]);

  return { applyBuffs, removeBuff };
}

export default useBuffsProvider;
