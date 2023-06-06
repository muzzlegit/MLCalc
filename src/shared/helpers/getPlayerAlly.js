import PropTypes from "prop-types";

export function getPlayerAlly(player) {
  switch (player) {
    case "mainAttacker":
      return ["attackerAlly", "attackerSecondAlly"];
    case "attackerAlly":
      return ["mainAttacker", "attackerSecondAlly"];
    case "attackerSecondAlly":
      return ["mainAttacker", "attackerAlly"];
    case "mainDefender":
      return ["firstDefenderAlly", "secondDefenderAlly"];
    case "firstDefenderAlly":
      return ["mainDefender", "secondDefenderAlly"];
    case "secondDefenderAlly":
      return ["firstDefenderAlly", "mainDefender"];
    default:
      break;
  }
}

getPlayerAlly.propTypes = {
  player: PropTypes.string.isRequired,
};
