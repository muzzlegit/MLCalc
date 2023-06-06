import PropTypes from "prop-types";

export function getPlayerEnemy(player) {
  switch (player) {
    case "mainAttacker":
      return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly"];
    case "attackerAlly":
      return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly"];
    case "attackerSecondAlly":
      return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly"];
    case "mainDefender":
      return ["mainAttacker", "attackerAlly", "attackerSecondAlly"];
    case "firstDefenderAlly":
      return ["mainAttacker", "attackerAlly", "attackerSecondAlly"];
    case "secondDefenderAlly":
      return ["mainAttacker", "attackerAlly", "attackerSecondAlly"];
    default:
      break;
  }
}

getPlayerEnemy.propTypes = {
  player: PropTypes.string.isRequired,
};
