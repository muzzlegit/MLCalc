import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
//HELPERS
import { getInitialUnitData, getPlayerHomeland, getPlayerFraction } from "../helpers";
//----------- STORE -----------
const useUnitStore = create(
  devtools(
    immer((set, get) => ({
      //MAIN ATTACKER --------------------------------
      mainAttacker: {
        porter: getInitialUnitData("porter", "undead"),
        swordsman: getInitialUnitData("swordsman", "undead"),
        cavalier: getInitialUnitData("cavalier", "undead"),
        flying: getInitialUnitData("flying", "undead"),
        archer: getInitialUnitData("archer", "undead"),
        healer: getInitialUnitData("healer", "undead"),
        mercenary: getInitialUnitData("mercenary", "undead"),
        mage: getInitialUnitData("mage", "undead"),
        race: "undead",
        attackIndex: "Min",
        apostate: false,
        fraction: "dark",
        homeLand: "cursedForest",
        playerBuffs: [],
        buffsStorage: [],
      },
      // MAIN ATTACKER ALLY --------------------------
      attackerAlly: {
        porter: getInitialUnitData("porter", "undead"),
        swordsman: getInitialUnitData("swordsman", "undead"),
        cavalier: getInitialUnitData("cavalier", "undead"),
        flying: getInitialUnitData("flying", "undead"),
        archer: getInitialUnitData("archer", "undead"),
        healer: getInitialUnitData("healer", "undead"),
        mercenary: getInitialUnitData("mercenary", "undead"),
        mage: getInitialUnitData("mage", "undead"),
        race: "undead",
        attackIndex: "Min",
        apostate: false,
        fraction: "dark",
        homeLand: "cursedForest",
        playerBuffs: [],
        buffsStorage: [],
      },
      // MAIN ATTACKER SECOND ALLY --------------------------
      attackerSecondAlly: {
        porter: getInitialUnitData("porter", "undead"),
        swordsman: getInitialUnitData("swordsman", "undead"),
        cavalier: getInitialUnitData("cavalier", "undead"),
        flying: getInitialUnitData("flying", "undead"),
        archer: getInitialUnitData("archer", "undead"),
        healer: getInitialUnitData("healer", "undead"),
        mercenary: getInitialUnitData("mercenary", "undead"),
        mage: getInitialUnitData("mage", "undead"),
        race: "undead",
        attackIndex: "Min",
        apostate: false,
        fraction: "dark",
        homeLand: "cursedForest",
        playerBuffs: [],
        buffsStorage: [],
      },
      //MAIN DEFENDER --------------------------------
      mainDefender: {
        porter: getInitialUnitData("porter", "undead"),
        swordsman: getInitialUnitData("swordsman", "undead"),
        cavalier: getInitialUnitData("cavalier", "undead"),
        flying: getInitialUnitData("flying", "undead"),
        archer: getInitialUnitData("archer", "undead"),
        healer: getInitialUnitData("healer", "undead"),
        mercenary: getInitialUnitData("mercenary", "undead"),
        mage: getInitialUnitData("mage", "undead"),
        race: "undead",
        attackIndex: "Min",
        apostate: false,
        fraction: "dark",
        homeLand: "cursedForest",
        buffsStorage: [],
      },
      //firstDefenderAlly --------------------------
      firstDefenderAlly: {
        porter: getInitialUnitData("porter", "undead"),
        swordsman: getInitialUnitData("swordsman", "undead"),
        cavalier: getInitialUnitData("cavalier", "undead"),
        flying: getInitialUnitData("flying", "undead"),
        archer: getInitialUnitData("archer", "undead"),
        healer: getInitialUnitData("healer", "undead"),
        mercenary: getInitialUnitData("mercenary", "undead"),
        mage: getInitialUnitData("mage", "undead"),
        race: "undead",
        attackIndex: "Min",
        apostate: false,
        fraction: "dark",
        homeLand: "cursedForest",
        buffsStorage: [],
      },
      //secondDefenderAlly --------------------------
      secondDefenderAlly: {
        porter: getInitialUnitData("porter", "undead"),
        swordsman: getInitialUnitData("swordsman", "undead"),
        cavalier: getInitialUnitData("cavalier", "undead"),
        flying: getInitialUnitData("flying", "undead"),
        archer: getInitialUnitData("archer", "undead"),
        healer: getInitialUnitData("healer", "undead"),
        mercenary: getInitialUnitData("mercenary", "undead"),
        mage: getInitialUnitData("mage", "undead"),
        race: "undead",
        attackIndex: "Min",
        apostate: false,
        fraction: "dark",
        homeLand: "cursedForest",
        buffsStorage: [],
      },
      //FUNCTIONS --------------------------------
      functions: {
        setUnit: (player, unit) =>
          set(state => {
            state[player][unit.unit] = { ...state[player][unit.unit], ...unit };
          }),
        setRace: (player, race) =>
          set(state => {
            state[player].race = race;
            state[player].homeLand = getPlayerHomeland(race);
            state[player].fraction = getPlayerFraction(race);
          }),
        setAttackIndex: (player, index) =>
          set(state => {
            state[player].attackIndex = index;
          }),
        setApostate: player =>
          set(state => {
            state[player].apostate = !state[player].apostate;
          }),
        setFraction: (player, fraction) =>
          set(state => {
            state[player].fraction = fraction;
          }),
        setHomeLand: (player, homeLand) =>
          set(state => {
            state[player].homeLand = homeLand;
          }),
        setUnitLevel: (player, unit, level) =>
          set(state => {
            state[player][unit] = { ...state[player][unit], level };
          }),
        setUnitAmount: (player, unit, amount) =>
          set(state => {
            state[player][unit] = { ...state[player][unit], amount };
          }),
        setUnitProperty: (player, unit, property) =>
          set(state => {
            state[player][unit] = { ...state[player][unit], ...property };
          }),
        addBuffs: (player, buffs) =>
          set(state => {
            let filteredBuffs = state[player].buffsStorage;
            buffs.forEach(item => {
              filteredBuffs = filteredBuffs.filter(element => element.id !== item.id);
            });
            state[player].buffsStorage = [...filteredBuffs, ...buffs];
          }),
        removeBuffs: (player, buffs) =>
          set(state => {
            let filteredBuffs = state[player].buffsStorage;
            buffs.forEach(item => {
              filteredBuffs = filteredBuffs.filter(element => element.id !== item.id);
            });
            state[player].buffsStorage = [...filteredBuffs];
          }),
      },
    })),
    { name: "UnitStore" },
  ),
);

export default useUnitStore;
