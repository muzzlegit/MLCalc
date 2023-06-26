//DATA
import UNITS from "modules/army/data/Units.json";

//CONSTS
import {
  initialUnitsProperties,
  initialPorterProperties,
  initialWarriorsProperties,
  initialHealerProperties,
  initialMageProperties,
} from "shared/utils/constants";

export function getUnitLand(race, unit, land) {
  return UNITS[race][unit].level1[land];
}

export function isAttacker(player) {
  switch (player) {
    case "mainAttacker":
      return true;
    case "attackerAlly":
      return true;
    case "attackerSecondAlly":
      return true;
    default:
      return false;
  }
}

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

//depends [getPlayerAlly, getPlayerEnemy]
export function getBuffsArraysByPlayers(buffs) {
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

export function getPlayerHomeland(playerRace) {
  switch (playerRace) {
    case "undead":
      return "cursedForest";
    case "demon":
      return "deadLand";
    case "drow":
      return "cursedForest";
    case "human":
      return "hollyLand";
    case "elf":
      return "magicForest";
    default:
      return "none";
  }
}

export function getPlayerFraction(playerRace) {
  switch (playerRace) {
    case "undead":
      return "dark";
    case "demon":
      return "dark";
    case "drow":
      return "dark";
    case "human":
      return "light";
    case "elf":
      return "light";
    default:
      return "none";
  }
}

export function getUnitData(unitName, level, race, index, amount) {
  const unit = UNITS[race][unitName][`level${level}`];

  return { ...unit, attack: unit[`attack${index}`], level, amount };
}

export function getInitialUnitData(unit, race) {
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
}
