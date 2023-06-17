//DATA
import UNITS from "modules/army/data/Units.json";
function getUnitLand(race, unit, land) {
  return UNITS[race][unit].level1[land];
}

export default getUnitLand;
