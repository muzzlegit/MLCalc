//DATA
import UNITS from "modules/army/data/Units.json";

function getUnitData(unitName, level, race, index, amount) {
  const unit = UNITS[race][unitName][`level${level}`];

  return { ...unit, attack: unit[`attack${index}`], level, amount };
}

export default getUnitData;
