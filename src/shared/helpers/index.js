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
      return ["firstDefenderAlly", "secondDefenderAlly", "battlePlace"];
    case "firstDefenderAlly":
      return ["mainDefender", "secondDefenderAlly", "battlePlace"];
    case "secondDefenderAlly":
      return ["firstDefenderAlly", "mainDefender", "battlePlace"];
    default:
      break;
  }
}

export function getPlayerEnemy(player) {
  switch (player) {
    case "mainAttacker":
      return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly", "battlePlace"];
    case "attackerAlly":
      return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly", "battlePlace"];
    case "attackerSecondAlly":
      return ["mainDefender", "firstDefenderAlly", "secondDefenderAlly", "battlePlace"];
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

export function getPlayerFractionEnemy(player) {
  switch (player) {
    case "mainAttacker":
      return "mainDefender";
    case "attackerAlly":
      return "mainDefender";
    case "attackerSecondAlly":
      return "mainDefender";
    case "mainDefender":
      return "mainAttacker";
    case "firstDefenderAlly":
      return "mainAttacker";
    case "secondDefenderAlly":
      return "mainAttacker";
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
        "battlePlace",
      ];
      playersArrays.all.buffsArray = buffs;
    } else {
      switch (buff.target) {
        case "player":
          playersArrays.player.playerNames = [buff.player];
          playersArrays.player.buffsArray = [...playersArrays.player.buffsArray, buff];
          break;
        case "ally":
          playersArrays.ally.playerNames = getPlayerAlly(buff.player);
          playersArrays.ally.buffsArray = [...playersArrays.ally.buffsArray, buff];
          break;
        case "enemy":
          playersArrays.enemy.playerNames = getPlayerEnemy(buff.player);
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

export function getInitialUnitData(unit, race, level) {
  if (!unit) return {};
  let unitLevel = "level1";
  if (level) unitLevel = `level${level}`;

  const squad = {
    porter: {
      ...UNITS[race].porter[unitLevel],
      race,
      attack: 0,
      ...initialUnitsProperties,
      ...initialPorterProperties,
    },
    swordsman: {
      ...UNITS[race].swordsman[unitLevel],
      race,
      attack: UNITS[race].swordsman[unitLevel].attackMin,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
    },
    cavalier: {
      ...UNITS[race].cavalier[unitLevel],
      race,
      attack: UNITS[race].cavalier[unitLevel].attackMin,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
    },
    flying: {
      ...UNITS[race].flying[unitLevel],
      race,
      attack: UNITS[race].flying[unitLevel].attackMin,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
    },
    archer: {
      ...UNITS[race].archer[unitLevel],
      race,
      attack: UNITS[race].archer[unitLevel].attackMin,
      ...initialUnitsProperties,
      ...initialWarriorsProperties,
    },
    healer: {
      ...UNITS[race].healer[unitLevel],
      race,
      attack: UNITS[race].healer[unitLevel].attackMin,
      ...initialUnitsProperties,
      ...initialHealerProperties,
    },
    mercenary: {
      ...UNITS[race].mercenary[unitLevel],
      race,
      attack: UNITS[race].mercenary[unitLevel].attackMin,
      ...initialUnitsProperties,
    },
    mage: {
      ...UNITS[race].mage[unitLevel],
      race,
      attack: UNITS[race].mage[unitLevel].attackMin,
      ...initialUnitsProperties,
      ...initialMageProperties,
    },
  };
  return squad[unit];
}

export const getHeroClassesList = data => {
  return data.reduce((acc, hero) => {
    if (!acc.includes(hero.class)) acc = [...acc, hero.class];
    return acc;
  }, []);
};

export const getHeroBranchesList = (data, heroClass) => {
  return data.reduce((acc, hero) => {
    if (hero.class === heroClass) acc = [...acc, hero.name];
    return acc;
  }, []);
};

export const getHeroSkills = (data, heroName, player, branchKey) => {
  const { skills } = data.find(hero => hero.name === heroName);
  const formattedSkills = skills.map(skill => ({
    heroName,
    branchKey,
    ...skill,
    player,
  }));
  return formattedSkills;
};

export const getFormattedHeroSkill = (skill, index) => {
  const formattedSkill = {
    ...skill,
    description: skill.description[index],
    value: skill.value[index],
  };
  return formattedSkill;
};

export const getFormattedBuffs = (player, buffs) => {
  const formattedBuffs = buffs.map(buff =>
    buff.battle
      ? {
          ...buff,
          player: buff.player ? buff.player : player,
          description: buff.description[buff.index],
          value: buff?.appliedOn === "fractionAttack" ? buff.value : buff.value[buff.index],
        }
      : buff,
  );
  return formattedBuffs;
};

export const getFormattedArtefactBuffs = artefact => {
  const common = artefact.buffs.common.map(buff => ({
    ...buff,
    index: artefact.ancient ? 1 : 0,
  }));
  if (artefact.perfect) {
    const perfect = artefact.buffs.perfect.map(buff => ({
      ...buff,
    }));
    return [...common, ...perfect];
  } else {
    return common;
  }
};
