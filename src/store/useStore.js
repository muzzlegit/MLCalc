import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
//HELPERS
import { getInitialUnitData, getPlayerHomeland, getPlayerFraction } from "shared/helpers";
//----------- STORE -----------
const useStore = create(
  devtools(
    immer((set, get) => ({
      //MAIN ATTACKER --------------------------------
      mainAttacker: {
        hero: null,
        artefacts: {
          head: null,
          armor: {
            id: "ryUZ_I7QkUu_QmEi1jURPw",
            level: 5,
            ancient: true,
            perfect: true,
            name: "Кольчуга Головореза",
            place: "armor",
            set: "Головорез",
            buffs: {
              common: [
                {
                  id: "FP5Q69jSOkOdOhM9wmjpMA",
                  name: "Кольчуга Головореза",
                  character: "artefact",
                  player: null,
                  target: "player",
                  appliedOn: "all",
                  unit: "units",
                  units: ["swordsman", "cavalier", "flying", "archer"],
                  property: "healthRate",
                  index: 0,
                  description: [
                    "Здоровье воинов, всадников, летунов, стрелков своих +55%",
                    "Здоровье воинов, всадников, летунов, стрелков своих +66%",
                  ],
                  value: [0.55, 0.66],
                },
              ],
              perfect: [
                {
                  id: "KrTSAzmbTUKJQ-KGY24DxA",
                  name: "Кольчуга Головореза",
                  character: "artefact",
                  player: null,
                  target: "player",
                  appliedOn: "all",
                  unit: "fortification",
                  units: ["fortification"],
                  property: "damageRate",
                  index: 0,
                  description: ["Эффективность уничтожения войск на укреплениях +300%"],
                  value: [3],
                  battle: true,
                },
                {
                  id: "5JBIaBoaY0-SxLgIyFAnsw",
                  name: "Кольчуга Головореза",
                  character: "artefact",
                  player: null,
                  target: "player",
                  appliedOn: "all",
                  unit: "units",
                  unitі: [
                    "porter",
                    "swordsman",
                    "cavalier",
                    "flying",
                    "archer",
                    "healer",
                    "mercenary",
                    "mage",
                  ],
                  property: "healthRate",
                  index: 0,
                  description: ["Здоровье всех войск +15%"],
                  value: [0.15],
                  battle: true,
                },
              ],
            },
            runes: ["ddfs"],
            sharpening: ["dfdff"],
          },
          belt: null,
          pants: null,
          boots: null,
          neck: null,
          bracers: {
            id: "4g9QyfyOd0qzZalvydefIg",
            level: 5,
            ancient: false,
            perfect: false,
            name: "Наручни испепеления",
            place: "bracers",
            set: "Головорез",
            value: {
              common: [
                {
                  id: "M9KvwVW7n0GMHhwFWbDq8g",
                  name: "Наручни испепеления",
                  character: "artefact",
                  player: null,
                  target: "player",
                  appliedOn: "fraction",
                  unit: "units",
                  units: [
                    "swordsman",
                    "cavalier",
                    "flying",
                    "archer",
                    "healer",
                    "mercenary",
                    "mage",
                  ],
                  property: "attackRate",
                  index: 0,
                  description: [
                    "Атака всех войск +55% В бою против вражеской фракции",
                    "Атака всех войск +66% В бою против вражеской фракции",
                  ],
                  value: [0.55, 0.66],
                  battle: true,
                },
              ],
              perfect: [
                {
                  id: "JvO2lVn5A0mFhkUHTG1x6w",
                  name: "Наручни испепеления",
                  character: "artefact",
                  player: null,
                  target: "enemy",
                  appliedOn: "all",
                  unit: "magicTower",
                  units: ["magicTower"],
                  property: "damageRate",
                  description: ["Атака магических башен -15%"],
                  value: [-0.15],
                  battle: true,
                },
              ],
            },
            runes: [],
            sharpening: [],
          },
          ring: null,
          rightHand: null,
          bag: null,
          back: {
            id: "IOTd100__UStXBNzxPQkRQ",
            level: 5,
            ancient: true,
            perfect: false,
            name: "Накидка жертвоприношения",
            place: "back",
            set: "Головорез",
            buffs: {
              common: [
                {
                  id: "hunZ4K6d0E618__mqDbDMg",
                  name: "Накидка жертвоприношения",
                  character: "artefact",
                  player: null,
                  target: "enemy",
                  appliedOn: "fraction",
                  unit: "units",
                  units: [
                    "swordsman",
                    "cavalier",
                    "flying",
                    "archer",
                    "healer",
                    "mercenary",
                    "mage",
                  ],
                  property: "",
                  index: 0,
                  description: [
                    "Вероятность минимальной атаки всех войск +55%",
                    "Вероятность минимальной атаки всех войск +66%",
                  ],
                  value: [0.55, 0.66],
                  battle: false,
                },
              ],
              perfect: [
                {
                  id: "cHWTyhUf1szHe3Jo",
                  name: "Накидка жертвоприношения",
                  character: "artefact",
                  player: null,
                  target: "",
                  appliedOn: "",
                  unit: "units",
                  units: [],
                  property: "",
                  index: 0,
                  description: [""],
                  value: [0],
                  battle: false,
                },
              ],
            },
            runes: [],
            sharpening: [],
          },
          leftHand: null,
        },
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
        hero: null,
        artefacts: {
          head: null,
          armor: null,
          belt: null,
          pants: null,
          boots: null,
          neck: null,
          bracers: null,
          ring: null,
          rightHand: null,
          bag: null,
          back: null,
          leftHand: null,
        },
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
        hero: null,
        artefacts: {
          head: null,
          armor: null,
          belt: null,
          pants: null,
          boots: null,
          neck: null,
          bracers: null,
          ring: null,
          rightHand: null,
          bag: null,
          back: null,
          leftHand: null,
        },
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
        hero: null,
        artefacts: {
          head: null,
          armor: null,
          belt: null,
          pants: null,
          boots: null,
          neck: null,
          bracers: null,
          ring: null,
          rightHand: null,
          bag: null,
          back: null,
          leftHand: null,
        },
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
        hero: null,
        artefacts: {
          head: null,
          armor: null,
          belt: null,
          pants: null,
          boots: null,
          neck: null,
          bracers: null,
          ring: null,
          rightHand: null,
          bag: null,
          back: null,
          leftHand: null,
        },
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
        hero: null,
        artefacts: {
          head: null,
          armor: null,
          belt: null,
          pants: null,
          boots: null,
          neck: null,
          bracers: null,
          ring: null,
          rightHand: null,
          bag: null,
          back: null,
          leftHand: null,
        },
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
      //BattlePlace --------------------------
      battlePlace: {
        battlefield: "cursedForest",
        structure: "town",
        porter: getInitialUnitData("porter", "monsters", 3),
        swordsman: getInitialUnitData("swordsman", "monsters", 3),
        cavalier: getInitialUnitData("cavalier", "monsters", 3),
        flying: getInitialUnitData("flying", "monsters", 3),
        archer: getInitialUnitData("archer", "monsters", 3),
        healer: getInitialUnitData("healer", "monsters", 3),
        mercenary: getInitialUnitData("mercenary", "monsters", 3),
        mage: getInitialUnitData("mage", "monsters", 3),
        attackIndex: "Min",
        buffsStorage: [],
        towers: [],
        fortifications: [],
        gate: null,
        race: "monsters",
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
        setBattlefield: battlefield =>
          set(state => {
            state.battlePlace.battlefield = battlefield;
          }),
        setStructure: structure =>
          set(state => {
            state.battlePlace.structure = structure;
          }),
        setFortfications: fortifications =>
          set(state => {
            state.battlePlace.fortifications = fortifications;
          }),
        setTowers: towers =>
          set(state => {
            state.battlePlace.towers = towers;
          }),
        setGate: gate =>
          set(state => {
            state.battlePlace.gate = gate;
          }),
        setHero: (player, hero) =>
          set(state => {
            state[player].hero = hero;
          }),
        setHeroBranch: (player, branchName, branch, name) =>
          set(state => {
            state[player].hero[`${branchName}Name`] = name;
            state[player].hero[branchName] = branch;
          }),
        setHeroSkillLevel: (player, branchName, newSkill) =>
          set(state => {
            state[player].hero[branchName] = state[player].hero[branchName].map(skill =>
              skill.id === newSkill.id ? newSkill : skill,
            );
          }),
        setArtefact: (player, artefact) =>
          set(state => {
            state[player].artefacts[artefact.place] = artefact;
          }),
      },
    })),
    { name: "Store" },
  ),
);

export default useStore;
