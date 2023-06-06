import PropTypes from "prop-types";

function getDefaulValues(player) {
  const defaulBuffs = [
    {
      id: "2B0eBD4m",
      source: "battlefield",
      character: "default",
      player: "",
      target: "player",
      appliedOn: "homeLand",
      unit: "units",
      units: ["porter", "swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
      property: "defense",
      value: 25,
      description: "Защита родной земли",
    },
    {
      id: "kUrfaY9y4EWel32O7u9KUg",
      source: "battlefield",
      character: "default",
      player: "",
      target: "player",
      appliedOn: "terra",
      unit: "units",
      units: ["swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
      property: "attackRate",
      value: 0.5,
      description: "Бонус атаки террайна",
    },
    {
      id: "nRC1VO01ZEqP0V1t8Eq5_g",
      source: "player",
      character: "default",
      player: "",
      target: "player",
      appliedOn: "all",
      unit: "units",
      units: ["porter", "swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
      property: "defenseLevel",
      value: 50,
      description: "Дефолтный предел защиты",
    },
  ];

  let buffsArray = [];
  defaulBuffs.forEach(buff => {
    buffsArray = [...buffsArray, { ...buff, player: player }];
  });

  return buffsArray;
}

export default getDefaulValues;

getDefaulValues.propTypes = {
  player: PropTypes.string.isRequired,
};
