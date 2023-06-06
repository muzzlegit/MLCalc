//DATA
import UNITS from "modules/army/data/Units.json";
//CONSTS
const initialUnitsProperties = {
  amount: 0,
  amountRate: 0,
  attackRate: 0,
  defense: 0,
  defenseLevel: 0,
  health: 0,
  healthRate: 0,
};
const initialPorterProperties = {
  capacityRate: 0,
};
const initialWarriorsProperties = {
  persecution: 0,
  persecutionRate: 0,
};
const initialHealerProperties = {
  resurrectionRate: 0,
};
const initialMageProperties = {
  suppression: 0,
  towersSuppressionRate: 0,
};
const getInitialUnitData = (unit, race) => {
  if (!unit) return {};
  const squad = {
    porter: {
      ...UNITS[race].porter.level1,
      race,
      attack: 0,
      ...initialUnitsProperties,
      ...initialPorterProperties,
    },
    swordsman: {
      ...UNITS[race].swordsman.level1,
      race,
      attack: UNITS[race].swordsman.level1.attackMin,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
    },
    cavalier: {
      ...UNITS[race].cavalier.level1,
      race,
      attack: UNITS[race].cavalier.level1.attackMin,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
    },
    flying: {
      ...UNITS[race].flying.level1,
      race,
      attack: UNITS[race].flying.level1.attackMin,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
    },
    archer: {
      ...UNITS[race].archer.level1,
      race,
      attack: UNITS[race].archer.level1.attackMin,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
    },
    healer: {
      ...UNITS[race].healer.level1,
      race,
      attack: UNITS[race].healer.level1.attackMin,
      ...initialUnitsProperties,
      ...initialHealerProperties,
    },
    mercenary: {
      ...UNITS[race].mercenary.level1,
      race,
      attack: UNITS[race].mercenary.level1.attackMin,
      ...initialUnitsProperties,
    },
    mage: {
      ...UNITS[race].mage.level1,
      race,
      attack: UNITS[race].mage.level1.attackMin,
      ...initialUnitsProperties,
      ...initialMageProperties,
    },
  };
  return squad[unit];
};

export default getInitialUnitData;
