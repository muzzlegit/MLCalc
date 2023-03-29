import PropTypes from "prop-types";
import limits from "constants/limits";

function getUnitPropertyRate(property, enhancements) {
  const { name, measure } = property;
  const value = enhancements[name];

  if (measure === "%" && value)
    return `${
      value < 0
        ? value < limits[name]
          ? `${limits[name] * 100}% ( ${value * 100}% )`
          : value * 100 + "%"
        : "+" + value * 100 + "%"
    }`;
}

export default getUnitPropertyRate;

getUnitPropertyRate.propTypes = {
  property: PropTypes.object.isRequired,
  enhancements: PropTypes.object.isRequired,
};
