export const UNITS = [
  "porter",
  "swordsman",
  "cavalier",
  "flying",
  "archer",
  "healer",
  "mercenary",
  "mage",
];

export const LIMITS = {
  attackLimit: -0.9,
  healthLimit: -0.75,
  defenseLevelLimit: 75,
  persecutionLimit: -0.9,
};

export const initialUnitsProperties = {
  amount: 0,
  amounRate: 0,
  attack: 0,
  attackRate: 0,
  defense: 0,
  defenseLevel: 0,
  health: 0,
  healthRate: 0,
};
export const initialPorterProperties = {
  capacity: 0,
  capacityRate: 0,
};
export const initialWarriorsProperties = {
  persecution: 0,
  persecutionRate: 0,
};
export const initialHealerProperties = {
  resurrection: 0,
  resurrectionRate: 0,
};
export const initialMageProperties = {
  suppression: 0,
  towersSuppression: 0,
  towersSuppressionRate: 0,
};
