import PropTypes from "prop-types";
//HELPERS
import { getPlayerAlly } from "./getPlayerAlly";
import { getPlayerEnemy } from "./getPlayerEnemy";

function getBuffsArraysByPlayers(buffs) {
  const playersArrays = {
    all: {
      playerNames: [],
      buffsArray: [],
    },
    player: {
      playerNames: [],
      buffsArray: [],
    },
    ally: {
      playerNames: [],
      buffsArray: [],
    },
    enemy: {
      playerNames: [],
      buffsArray: [],
    },
    playerAlly: {
      playerNames: [],
      buffsArray: [],
    },
    playerEnemy: {
      playerNames: [],
      buffsArray: [],
    },
    playerAllyEnemy: {
      playerNames: [],
      buffsArray: [],
    },
  };
  buffs.forEach(buff => {
    if (buff.player === "all") {
      playersArrays.all.playerNames = [
        "mainAttacker",
        "attackerAlly",
        "attackerSecondAlly",
        "mainDefender",
        "firstDefenderAlly",
        "secondDefenderAlly",
      ];
      playersArrays.all.buffsArray = buffs;
    } else {
      switch (buff.target) {
        case "player":
          playersArrays.player.playerNames = [buff.player];
          playersArrays.player.buffsArray = [...playersArrays.player.buffsArray, buff];
          break;
        case "ally":
          playersArrays.ally.playerNames = [getPlayerAlly(buff.player)];
          playersArrays.ally.buffsArray = [...playersArrays.ally.buffsArray, buff];
          break;
        case "enemy":
          playersArrays.enemy.playerNames = [getPlayerEnemy(buff.player)];
          playersArrays.enemy.buffsArray = [...playersArrays.enemy.buffsArray, buff];
          break;
        case "player_ally":
          playersArrays.playerAlly.playerNames = [buff.player, ...getPlayerAlly(buff.player)];
          playersArrays.playerAlly.buffsArray = [...playersArrays.playerAlly.buffsArray, buff];
          break;
        case "player_enemy":
          playersArrays.playerEnemy.playerNames = [buff.player, ...getPlayerEnemy(buff.player)];
          playersArrays.playerEnemy.buffsArray = [...playersArrays.playerEnemy.buffsArray, buff];
          break;
        case "player_ally_enemy":
          playersArrays.playerAllyEnemy.playerNames = [
            buff.player,
            ...getPlayerAlly(buff.player),
            ...getPlayerEnemy(buff.player),
          ];
          playersArrays.playerAllyEnemy.buffsArray = [
            ...playersArrays.playerAllyEnemy.buffsArray,
            buff,
          ];
          break;
        default:
          break;
      }
    }
  });

  return playersArrays;
}

export default getBuffsArraysByPlayers;
getBuffsArraysByPlayers.propTypes = {
  player: PropTypes.string.isRequired,
  buffs: PropTypes.array.isRequired,
};
