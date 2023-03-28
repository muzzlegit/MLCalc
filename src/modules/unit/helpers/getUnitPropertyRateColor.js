import PropTypes from "prop-types";
import limits from "constants/limits";

function getUnitPropertyRateColor(propertyName, rate) {
  if (rate < 0 && rate >= limits[propertyName]) return "red";
  if (rate < 0 && rate < limits[propertyName]) return "orange";
  if (rate > 0) return "green";
}

export default getUnitPropertyRateColor;

getUnitPropertyRateColor.propTypes = {
  propertyName: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
