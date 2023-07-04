import { useEffect } from "react";
//HELPERS
import { isAttacker, getUnitLand } from "shared/helpers";
//STORES
import useStore from "store/useStore";

function useBuffsToUnitProvider(player) {
  const state = useStore(state => state);
  const { buffsStorage, apostate, homeLand, race, fraction } = useStore(state => state[player]);
  const setUnitProperty = useStore(state => state.functions.setUnitProperty);

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
          if (isAttacker(player)) {
            if (
              homeLand === buff.battlefield &&
              !apostate &&
              (race !== state.mainDefender.race || state.mainDefender.apostate)
            ) {
              buff.units.forEach(unit => {
                unitsProperties[unit][buff.property] += buff.value;
              });
            }
          }
          if (!isAttacker(player)) {
            if (homeLand === buff.battlefield && !apostate) {
              buff.units.forEach(unit => {
                unitsProperties[unit][buff.property] += buff.value;
              });
            }
          }
          break;
        case "unitHomeLand":
          buff.units.forEach(unit => {
            if (buff.battlefield === getUnitLand(race, unit, "homeLand"))
              unitsProperties[unit][buff.property] += buff.value;
            if (buff.battlefield === getUnitLand(race, unit, "alienLand"))
              unitsProperties[unit][buff.property] -= buff.value;
          });
          break;
        case "fraction":
          if (
            !isAttacker(player) ||
            fraction !== state.mainDefender.fraction ||
            state.mainDefender.apostate
          )
            return;
          buff.units.forEach(unit => {
            unitsProperties[unit][buff.property] +=
              race === state.mainDefender.race ? buff.value[0] : buff.value[1];
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
  }, [
    buffsStorage,
    setUnitProperty,
    player,
    race,
    homeLand,
    apostate,
    fraction,
    state.mainDefender.fraction,
    state.mainDefender.race,
    state.mainDefender.apostate,
  ]);
}

export default useBuffsToUnitProvider;
