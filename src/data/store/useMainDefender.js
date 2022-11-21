import create from 'zustand'
import produce from 'immer';
//DATA
import units from '../../data/Units.json';
//HELPERS
import findPropertyIndex from '../../helpers/findPropertyIndex';
//CONST
const additionalProperties = {
  amount: 0,
  attackArr: [],
  attackRate: 0,
  defenseArr: [],
  defense: 0,
  defenseLevel: [],
  defenseLevelLimit: 50,
  healthArr: [],
  healthRate: 0,
}
const troopsNamesArray = ['porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage']

const useMainDefender = create((set) => ({
  player: {    
    race: 'undead',
    ally: {
      flag: false,

    },
    apostate: false,
    homeLand: 'cursedForest',
    hero: {
      checker: false,
    },
    artefacts: [
      {
        id: '123',
        level: '5',
        ancient: false,
        perfect: false,
        name: 'Броня головореза',
        place: 'armor',
        set: '',
        value: [
          {
            name: 'Броня головореза',
            unit: ['swordsman', 'cavalier', 'flying', 'archer'],
            property: 'healthArr',
            childProperty: 'healthRate',
            description: 'Здоровье воинов, всадников, летунов, стрелков своих +66%',
            value: 0.66 
          }
        ],
        icon: '-187px -249px',
        battle: true,
      },
      {
        id: '1234',
        level: '5',
        ancient: true,
        perfect: false,
        name: 'Броня головореза',
        place: 'head',
        set: '',
        value: [
          {
            name: 'Броня головореза',
            unit: ['swordsman', 'cavalier', 'flying', 'archer'],
            property: 'healthArr',
            childProperty: 'healthRate',
            description: 'Здоровье воинов, всадников, летунов, стрелков своих +66%',
            value: 0.66 
          }
        ],
        icon: '-187px -249px',
        battle: true,
      }
    ],
    attackRateIndex: 'Min',
    porter: { ...units.undead.porter.level1, ...additionalProperties, ...units.undead.porter.commonProperties },
    swordsman: { ...units.undead.swordsman.level1, ...additionalProperties, ...units.undead.swordsman.commonProperties },
    cavalier: { ...units.undead.cavalier.level1, ...additionalProperties, ...units.undead.cavalier.commonProperties },
    flying: { ...units.undead.flying.level1, ...additionalProperties, ...units.undead.flying.commonProperties },
    archer: { ...units.undead.archer.level1, ...additionalProperties, ...units.undead.archer.commonProperties },
    healer: { ...units.undead.healer.level1, ...additionalProperties, ...units.undead.healer.commonProperties },
    mercenary: { ...units.undead.mercenary.level1, ...additionalProperties, ...units.undead.mercenary.commonProperties },
    mage: { ...units.undead.mage.level1, ...additionalProperties, ...units.undead.mage.commonProperties },
    towers: [],
    fortifications: [],
  }, 
  functions: {
    setRace: (race) => set((state) => (state.player.race = race)),
    setHomeLand: (land) => set((state) => (state.player.homeLand = land)),
    setApostateValue: () => set((state) => (state.player.apostate = !state.player.apostate)),
    setUnit: (unit) => {  set(state => { state.player[unit.unit] = { ...state.player[unit.unit], ...unit }})},
    setRateAttack: (attackRate) => set((state) => (state.player.attackRateIndex = attackRate)),
    setUnitProperty: (item) => {
      item.unit.forEach( trooper => {
          item.value === 0
          ? set(state => {
            state.player[trooper][item.property].splice(findPropertyIndex(state.player[trooper][item.property], item), 1)
          })
          : set(state => {
            state.player[trooper][item.property][findPropertyIndex(state.player[trooper][item.property], item)] = {name: item.name, value: item.value, unit: item.unit}
          })
        })
      item.unit.forEach( trooper => {
        set((state) => (state.player[trooper][item.childProperty] = state.player[trooper][item.property].reduce((acc, item) =>{
          item.unit.includes(trooper) ? acc += item.value : acc += 0;
          return acc
        },0
        )))
      });
    },
    setTowers:  (tower) =>set((state) => (state.player.towers = tower)),
    setFortification:  (fortification) =>set((state) => (state.player.fortifications = fortification)),
    addTowers:  (tower) =>set((state) => (state.player.towers = [...state.player.towers, tower])),
    addFortification:   (fortification, amount) =>{
      set((state) => {
        let total = true;
        if(state.player.fortifications.length === 0){
          fortification.quantity = amount;
          state.player.fortifications = [...state.player.fortifications, fortification];
          return;
        }
        if(state.player.fortifications.length !== 0) {
          state.player.fortifications.forEach((fort) =>{
            if(fort.level === fortification.level) {
              fort.quantity += amount;
              state.player.fortifications = [...state.player.fortifications,];
              total = false;
              return
            } 
          })
        }
        if(total){
          fortification.quantity = amount;
          state.player.fortifications = [...state.player.fortifications, fortification];
          return;
        }
      })
    },
    setHero: (hero) => set((state) => (state.player.hero = hero)),
    setHeroSkillsBranch: (branch, skills) => set((state) => (state.player.hero[branch] = skills)),
    setHeroBranchesId: (branch, id) => set((state) => (state.player.hero.branchesId[branch] = id)),
    setHeroSkillLevel: (branch, skill, level) => set(state => (state.player.hero[branch][skill].level = level))
  }
}));

export default useMainDefender;