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
//----------- STORE -----------
const useMainAttacker = create((set) => ({
  player: {    
    race: 'undead',
    ally: {
      flag: false,

    },
    apostate: false,
    homeLand: 'cursedForest',
    // hero: {checker: false},
    hero: {
      checker: false,
      icon: '-1px -1px'
    },
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
    fortification: []
  },
  functions: {
    setRace: (race) => set((state) => (state.player.race = race)),
    setHomeLand: (land) => set((state) => (state.player.homeLand = land)),
    setApostateValue: () => set((state) => (state.player.apostate = !state.player.apostate)),
    setUnit: (unit) => {  set(state => { state.player[unit.unit] = { ...state.player[unit.unit], ...unit } }) },
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
      });
      item.unit.forEach( trooper => {
        set((state) => (state.player[trooper][item.childProperty] = state.player[trooper][item.property].reduce((acc, item) =>
          acc += item.value, 0
        )))
      });
    },
    
  
 

  setHero: (hero) => set((state) => (state.hero = hero)),
  setHeroSkillLevel: (branch, skill) => set(state => (

    state.hero[branch][skill].level >= 5
    ? state.hero[branch][skill].level = 1
    : state.hero[branch][skill].level += 1)),
  setHeroSkillsBranch: (branch, skills) => set((state) => (state.hero[branch] = skills)),
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
  
}}))

export default useMainAttacker;