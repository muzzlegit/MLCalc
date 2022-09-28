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
  defenseArr: [],
  defenseLevel: [],
  defenseLevelLimit: 50,
  healthArr: []
}
const troopsNamesArray = ['porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage']

const useMainDefender = create((set) => ({
    battlefield: 'cursedForest',
    race: 'undead',
    apostate: false,
    homeLand: 'cursedForest',
    hero: {checker: false},
    attackRate: 'Min',
    troops: {
      porter: { ...units.undead.porter.level1, ...additionalProperties, homeLand: units.undead.porter.homeLand, alienLand: units.undead.porter.alienLand },
      swordsman: { ...units.undead.swordsman.level1, ...additionalProperties, homeLand: units.undead.swordsman.homeLand, alienLand: units.undead.swordsman.alienLand },
      cavalier: { ...units.undead.cavalier.level1, ...additionalProperties, homeLand: units.undead.cavalier.homeLand, alienLand: units.undead.cavalier.alienLand },
      flying: { ...units.undead.flying.level1, ...additionalProperties, homeLand: units.undead.flying.homeLand, alienLand: units.undead.flying.alienLand },
      archer: { ...units.undead.archer.level1, ...additionalProperties, homeLand: units.undead.archer.homeLand, alienLand: units.undead.archer.alienLand },
      healer: { ...units.undead.healer.level1, ...additionalProperties, homeLand: units.undead.healer.homeLand, alienLand: units.undead.healer.alienLand },
      mercenary: { ...units.undead.mercenary.level1, ...additionalProperties, homeLand: units.undead.mercenary.homeLand, alienLand: units.undead.mercenary.alienLand },
      mage: { ...units.undead.mage.level1, ...additionalProperties, homeLand: units.undead.mage.homeLand, alienLand: units.undead.mage.alienLand }
    },
    towers: [],
    fortification: [],
  
  setBattlefield: (battlefield) => set((state) => (state.battlefield = battlefield)),
  setRace: (race) => set((state) => (state.race = race)),
  setRateAttack: (attackRate) => set((state) => (state.attackRate = attackRate)),
  setHomeLand: (land) => set((state) => (state.homeLand = land)),
  setApostateValue: () => set((state) => (state.apostate = !state.apostate)),

  setTowers:  (tower) =>set((state) => (state.towers = tower)),
  setFortification:  (fortification) =>set((state) => (state.fortification = fortification)),
  addTowers:  (tower) =>set((state) => (state.towers = [...state.towers, tower])),
  addFortification:   (fortification) =>{
    set((state) => {
      let total = true;
      if(state.fortification.length === 0){
        state.fortification = [...state.fortification, fortification];
        return;
      }
      if(state.fortification.length !== 0) {
        state.fortification.forEach((fort) =>{
          if(fort.level === fortification.level) {
            fort.quantity += 1;
            state.fortification = [...state.fortification,];
            total = false;
            return
          } 
        })
      }
      if(total){
        state.fortification = [...state.fortification, fortification];
        return;
      }
  })},
  setUnit: (unit) => {
    set(produce(state => {
      state.troops[unit.unit] = {...state.troops[unit.unit], ...unit}
    }))
},
  setDefenseArr: (item) => {
    if(item.unit === 'all') {
      troopsNamesArray.forEach( trooper => {
          item.value === 0
          ? set(produce(state => {
            state.troops[trooper][item.property].splice(findPropertyIndex(state.troops[trooper][item.property], item), 1)
          }))
          : set(produce(state => {
            state.troops[trooper][item.property][findPropertyIndex(state.troops[trooper][item.property], item)] = {name: item.name, value: item.value, unit: item.unit}
          }))
      });
    }
  },
  setAttackArr: (item) => {
    if(item.unit !== 'all') {
          item.value === 0
          ? set(produce(state => {
            state.troops[item.unit][item.property].splice(findPropertyIndex(state.troops[item.unit][item.property], item), 1)
          }))
          : set(produce(state => {
            state.troops[item.unit][item.property][findPropertyIndex(state.troops[item.unit][item.property], item)] = {name: item.name, value: item.value, unit: item.unit}
          }))
    }
  },
}))

export default useMainDefender;