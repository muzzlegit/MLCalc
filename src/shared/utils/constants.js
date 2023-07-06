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
  { place: "head", top: "20px", left: "110px", art: false },
  { place: "armor", top: "120px", left: "110px", art: false },
  { place: "belt", top: "220px", left: "110px", art: false },
  { place: "pants", top: "320px", left: "110px", art: false },
  { place: "boots", top: "420px", left: "110px", art: false },
  { place: "neck", top: "60px", left: "20px", art: false },
  { place: "bracers", top: "160px", left: "20px", art: false },
  { place: "ring", top: "260px", left: "20px", art: false },
  { place: "rightHand", top: "360px", left: "20px", art: false },
  { place: "bag", top: "140px", left: "200px", art: false },
  { place: "back", top: "240px", left: "200px", art: false },
  { place: "leftHand", top: "340px", left: "200px", art: false },
];
