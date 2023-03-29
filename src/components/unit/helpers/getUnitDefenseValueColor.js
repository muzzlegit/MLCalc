import PropTypes from "prop-types";

function getUnitDefenseValueColor(propertyName, enhancements) {
  const { defense, defenseLevel, amount } = enhancements;
  if (propertyName === "defense" && (defense < 0 || defense > defenseLevel)) return "orange";
  if (propertyName === "amount" && amount < 0) return "red";
  return "text";
}

export default getUnitDefenseValueColor;

getUnitDefenseValueColor.propTypes = {
  enhancements: PropTypes.object.isRequired,
  propertyName: PropTypes.string.isRequired,
};
