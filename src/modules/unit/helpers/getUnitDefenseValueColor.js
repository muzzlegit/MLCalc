import PropTypes from "prop-types";

function getUnitDefenseValueColor(value, properties) {
  const [defenseLevel] = properties.filter(property => property.name === "defenseLevel");
  if (value < 0 || value > defenseLevel.value) return "orange";
  return "text";
}

export default getUnitDefenseValueColor;

getUnitDefenseValueColor.propTypes = {
  properties: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
};
