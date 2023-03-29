import PropTypes from "prop-types";
import { useEffect } from "react";
//HOOKS
import useBuffsStorage from "components/buffsStorage/hooks/useBuffsStorage";
import useUnitStore from "../store/useUnitStore";

function useUnitsBuffs(player) {
  const { buffsStorage } = useBuffsStorage(player);
  const setUnitProperty = useUnitStore(state => state.functions.setUnitProperty);
  const unitsBuffs = buffsStorage.filter(buff => buff.unit === "units");

  //USE EFFECT
  useEffect(() => {
    const properties = {
      attack: 0,
      defense: 0,
      defenseLevel: 0,
      health: 0,
    };
    let unitsProperties = {
      porter: {
        ...properties,
        capacity: 0,
      },
      swordsman: { ...properties, persecution: 0 },
      cavalier: { ...properties, persecution: 0 },
      flying: { ...properties, persecution: 0 },
      archer: { ...properties, persecution: 0 },
      healer: {
        ...properties,
        resurrection: 0,
      },
      mercenary: { ...properties },
      mage: {
        ...properties,
        suppression: 0,
        towersSuppression: 0,
      },
    };

    unitsBuffs.forEach(buff => {
      if (player === "attackerAlly") {
        console.log(buff);
      }
      if (buff.appliedOn === "all") {
        buff.units.forEach(unit => {
          unitsProperties[unit][buff.property] += buff.value;
        });
      }

      // if (buff.homeLand === battlefield) {
      //   if (buff.unit === "fortification") return;
      //   if (buff.unit === "tower") return;
      //   if (buff.unit === "magicTower") {
      //     console.log("magicTower");
      //   } else {
      //     buff.unit.forEach(unit => {
      //       unitsProperties[unit][buff.property] += buff.value;
      //     });
      //   }
      // }
      //   if (
      //     buff.homeLand === "fraction" &&
      //     (mainAttackerFraction !== mainDefenderFraction || mainDefenderApostate)
      //   ) {
      //     if (buff.unit === "fortification") return;
      //     if (buff.unit === "tower") return;
      //     if (buff.unit === "magicTower") {
      //       console.log("magicTower");
      //     } else {
      //       buff.unit.forEach(unit => {
      //         unitsProperties[unit][buff.property] += buff.value;
      //       });
      //     }
      //   }
      //   if (
      //     buff.homeLand === "monsters" &&
      //     (mainAttackerFraction !== mainDefenderFraction || mainDefenderApostate)
      //   ) {
      //     if (buff.unit === "player") {
      //       console.log("player");
      //     } else {
      //       buff.unit.forEach(unit => {
      //         unitsProperties[unit][buff.property] += buff.value;
      //       });
      //     }
      //   }
      // });
      for (const unit in unitsProperties) {
        for (const property in unitsProperties[unit]) {
          if (unitsProperties[unit][property])
            setUnitProperty(player, unit, property, unitsProperties[unit][property]);
        }
      }
    });
  }, [unitsBuffs, setUnitProperty, player]);

  return {};
}

export default useUnitsBuffs;

useUnitsBuffs.propTypes = {
  player: PropTypes.string.isRequired,
};
