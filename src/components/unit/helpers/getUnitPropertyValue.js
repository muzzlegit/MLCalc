import PropTypes from "prop-types";
import limits from "constants/limits";

function getUnitPropertyValue(property, enhancements) {
  const { name, measure, value } = property;
  const rate = enhancements[name];
  if (name === "defense") {
    const defenseLevel = enhancements.defenseLevel;
    const maxDefense = defenseLevel <= limits.defenseLevel ? defenseLevel : limits.defenseLevel;
    if (rate < 0) return `0 ( ${rate} )`;
    if (rate <= maxDefense) return rate;
    if (rate > maxDefense) return `${maxDefense} ( ${rate} )`;
  } else {
    if (measure === "number") {
      if (rate < 0) return `0 ( ${rate} )`;
      if (rate > 0) return rate;
    }
    if (measure === "%") {
      if (value < 0) return `0 ( ${value} )`;
      if (value > 0) return value;
    }
  }
}

export default getUnitPropertyValue;

getUnitPropertyValue.propTypes = {
  property: PropTypes.object.isRequired,
  enhancements: PropTypes.object.isRequired,
};