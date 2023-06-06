import PropTypes from "prop-types";
//DATA
import UNITS from "../data/UNITS.json";
import RACES from "../data/RACES.json";
//CONSTS
const initialUnitsProperties = {
  amount: 0,
  amounRate: 0,
  attack: 0,
  attackRate: 0,
  defense: 0,
  defenseLevel: 0,
  health: 0,
  healthRate: 0,
};
const initialPorterProperties = {
  capacity: 0,
  capacityRate: 0,
};
const initialWarriorsProperties = {
  persecution: 0,
  persecutionRate: 0,
};
const initialHealerProperties = {
  resurrection: 0,
  resurrectionRate: 0,
};
const initialMageProperties = {
  suppression: 0,
  towersSuppression: 0,
  towersSuppressionRate: 0,
};
const getInitialUnitsData = (level, race, index, unitName) => {
  const getRateProperties = unit => {
    const { attackMin, attackMax, ...rest } = RACES[race][unit];
    const attack = index === "Min" ? attackMin : attackMax;
    const properties = { ...rest, attack };
    for (const key in properties) {
      properties[key] = properties[key][level - 1];
    }
    return properties;
  };

  const squad = {
    porter: {
      ...UNITS.porter,
      race,
      ...initialUnitsProperties,
      ...initialPorterProperties,
      ...getRateProperties("porter"),
    },
    swordsman: {
      ...UNITS.swordsman,
      race,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
      ...getRateProperties("swordsman"),
    },
    cavalier: {
      ...UNITS.cavalier,
      race,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
      ...getRateProperties("cavalier"),
    },
    flying: {
      ...UNITS.flying,
      race,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
      ...getRateProperties("flying"),
    },
    archer: {
      ...UNITS.archer,
      race,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
      ...getRateProperties("archer"),
    },
    healer: {
      ...UNITS.healer,
      race,
      ...initialUnitsProperties,
      ...initialHealerProperties,
      ...getRateProperties("healer"),
    },
    mercenary: {
      ...UNITS.mercenary,
      race,
      ...initialUnitsProperties,
      ...getRateProperties("mercenary"),
    },
    mage: {
      ...UNITS.mage,
      race,
      ...initialUnitsProperties,
      ...initialMageProperties,
      ...getRateProperties("mage"),
    },
  };
  return unitName ? squad[unitName] : squad;
};

export default getInitialUnitsData;

getInitialUnitsData.propTypes = {
  unit: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  race: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
