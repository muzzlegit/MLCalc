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
export const DALL_CELLS = [
  { place: "head", top: "10px", left: "100px", art: false },
  { place: "armor", top: "110px", left: "100px", art: false },
  { place: "belt", top: "210px", left: "100px", art: false },
  { place: "pants", top: "310px", left: "100px", art: false },
  { place: "boots", top: "410px", left: "100px", art: false },
  { place: "neck", top: "50px", left: "10px", art: false },
  { place: "bracers", top: "150px", left: "10px", art: false },
  { place: "ring", top: "250px", left: "10px", art: false },
  { place: "rightHand", top: "350px", left: "10px", art: false },
  { place: "bag", top: "130px", left: "190px", art: false },
  { place: "back", top: "230px", left: "190px", art: false },
  { place: "leftHand", top: "330px", left: "190px", art: false },
];
