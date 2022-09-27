import create from 'zustand'
import { devtools } from 'zustand/middleware'
import units from '../../data/Units.json';
import { UnitAttack } from '../../views/components/UnitCard/index.styled';

import findPropertyIndex from '../../helpers/findPropertyIndex';

const additionalProperties = {
  amount: 0,
  attackGain: 1,
  attackGainArray: [],
  defense: 0,
  defensisArray: [],
  defenseLevel: 50,
  defenseLevelLimit: 50,
}
const troopsNamesArray = ['porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage']

export const useStore = create(devtools(set => ({
  battlefield: 'cursedForest',
  mainAttacker: {
    race: 'undead',
    apostate: false,
    homeLand: 'cursedForest',
    hero: {},
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
    fortification: []
  },
  mainDefender: {
    race: 'undead',
    apostate: false,
    homeLand: 'cursedForest', 
    hero: {},
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
    fortification: []
  },
  setBattlefield: (battlefield) => set((state) => (state.battlefield = battlefield)),

  setMainAttackerRace: (race) => set((state) => (state.mainAttacker.race = race)),
  setMainDefenderRace: (race) => set((state) => (state.mainDefender.race = race)),

  // setUnitPropertyArray: (player, item) => {
  //   if(item.unit !== 'all'){
  //     set((state) => {
  //       state[player].troops[item.unit][item.property][findPropertyIndex(state[player].troops[item.unit][item.property], item)] = {name: item.name, value: item.value};    
  // })
  //   }
  //   if(item.unit === 'all'){
  //     console.log(player, item.property)
  //     set((state) => {
  //       troopsNamesArray.forEach(trooper => {
  //         item.value === 0
  //         ? state[player].troops[trooper][item.property].splice(findPropertyIndex(state[player].troops[trooper][item.property], item), 1)
  //         : state[player].troops[trooper][item.property][findPropertyIndex(state[player].troops[trooper][item.property], item)] = {name: item.name, value: item.value};
  //       });
  //     })
  //   }
  // },
  setMainAttakerUnitPropertyArray: (item) => {
    if(item.unit !== 'all'){
      set((state) => {
        state.mainAttacker.troops[item.unit][item.property][findPropertyIndex(state.mainAttacker.troops[item.unit][item.property], item)] = {name: item.name, value: item.value};    
  })
    }
    if(item.unit === 'all'){
      set((state) => {
        troopsNamesArray.forEach(trooper => {

          item.value === 0
          ? state.mainAttacker.troops[trooper][item.property].splice(findPropertyIndex(state.mainAttacker.troops[trooper][item.property], item), 1)
          : state.mainAttacker.troops[trooper][item.property][findPropertyIndex(state.mainAttacker.troops[trooper][item.property], item)] = {name: item.name, value: item.value};
        });
        console.log('state.mainAttacker', state.mainAttacker)
        console.log('state.mainDefender', state.mainDefender)
      })

    }
  },


  setAllUnitsAttack: (attack) => set((state) => (state.mainAttacker.allUnitsAttack = state.mainAttacker.allUnitsAttack + attack)),

  setAttackerUnit: (unit) => {
    switch (unit.unit) {
      case 'porter':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          porter:{...state.mainAttacker.troops.porter, ...unit}}));
        break;
      case 'swordsman':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          swordsman:{...state.mainAttacker.troops.swordsman, ...unit}}));  
        break;
      case 'cavalier':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          cavalier:{...state.mainAttacker.troops.cavalier, ...unit}}));
        break;
      case 'flying':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          flying:{...state.mainAttacker.troops.flying, ...unit}}));  
        break;
      case 'archer':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          archer:{...state.mainAttacker.troops.archer, ...unit}}));
        break;
      case 'healer':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          healer:{...state.mainAttacker.troops.healer, ...unit}}));  
        break;
      case 'mercenary':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          mercenary:{...state.mainAttacker.troops.mercenary, ...unit}}));   
        break; 
      case 'mage':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          mage:{...state.mainAttacker.troops.mage, ...unit}}));
        break;      
      default:
        break;
    }
  },
  setDefenderUnit: (unit) => {
    switch (unit.unit) {
      case 'porter':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          porter:{...state.mainDefender.troops.porter, ...unit}}));
        break;
      case 'swordsman':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          swordsman:{...state.mainDefender.troops.swordsman, ...unit}}));  
        break;
      case 'cavalier':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          cavalier:{...state.mainDefender.troops.cavalier, ...unit}}));
        break;
      case 'flying':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          flying:{...state.mainDefender.troops.flying, ...unit}}));  
        break;
      case 'archer':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          archer:{...state.mainDefender.troops.archer, ...unit}}));
        break;
      case 'healer':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          healer:{...state.mainDefender.troops.healer, ...unit}}));  
        break;
      case 'mercenary':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          mercenary:{...state.mainDefender.troops.mercenary, ...unit}}));   
        break; 
      case 'mage':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          mage:{...state.mainDefender.troops.mage, ...unit}}));
        break;      
      default:
        break;
    }
  },
  setMainAttackerRateAttack: (attackRate) => set((state) => (state.mainAttacker.attackRate = attackRate)),
  setMainDefenderRateAttack: (attackRate) => set((state) => (state.mainDefender.attackRate = attackRate)),
  setMainAttackerTowers:  (tower) =>set((state) => (state.mainAttacker.towers = tower)),
  addMainAttackerTowers:  (tower) =>set((state) => (state.mainAttacker.towers = [...state.mainAttacker.towers, tower])),
  setMainAttackerFortification:  (fortification) =>set((state) => (state.mainAttacker.fortification = fortification)),
  addMainAttackerFortification:   (fortification) =>{
    set((state) => {
      let total = true;
      if(state.mainAttacker.fortification.length === 0){
        state.mainAttacker.fortification = [...state.mainAttacker.fortification, fortification];
        return;
      }
      if(state.mainAttacker.fortification.length !== 0) {
        state.mainAttacker.fortification.forEach((fort) =>{
          if(fort.level === fortification.level) {
            fort.quantity += 1;
            state.mainAttacker.fortification = [...state.mainAttacker.fortification,];
            total = false;
            return
          } 
        })
      }
      if(total){
        state.mainAttacker.fortification = [...state.mainAttacker.fortification, fortification];
        return;
      }
  })},
  setMainDefenderTowers:  (tower) =>set((state) => (state.mainDefender.towers = tower)),
  addMainDefenderTowers:  (tower) =>set((state) => (state.mainDefender.towers = [...state.mainDefender.towers, tower])),
  setMainDefenderFortification: (fortification) =>set((state) => (state.mainDefender.fortification = fortification)),
  addMainDefenderFortification:   (fortification) =>{
    set((state) => {
      let total = true;
      if(state.mainDefender.fortification.length === 0){
        state.mainDefender.fortification = [...state.mainDefender.fortification, fortification];
        return;
      }
      if(state.mainDefender.fortification.length !== 0) {
        state.mainDefender.fortification.forEach((fort) =>{
          if(fort.level === fortification.level) {
            fort.quantity += 1;
            state.mainDefender.fortification = [...state.mainDefender.fortification,];
            total = false;
            return
          } 
        })
      }
      if(total){
        state.mainDefender.fortification = [...state.mainDefender.fortification, fortification];
        return;
      }
  })},
  setMainAttakerHomeLand: (land) => set((state) => (state.mainAttacker.homeLand = land)),
  setMainDefenderHomeLand: (land) => set((state) => (state.mainDefender.homeLand = land)),
  setMainAttakerApostateValue: (apostate) => set((state) => (state.mainAttacker.apostate = apostate)),
  setMainDefenderApostateValue: (apostate) => set((state) => (state.mainDefender.apostate = apostate)),
  setMainAttakerTroopsDefense: (defenseAmount) => {
    set((state) => (state.mainAttacker.troops = {
      ...state.mainAttacker.troops,
      ...state.mainAttacker.troops.porter.defense += defenseAmount,
      ...state.mainAttacker.troops.swordsman.defense += defenseAmount,
      ...state.mainAttacker.troops.cavalier.defense += defenseAmount,
      ...state.mainAttacker.troops.flying.defense += defenseAmount,
      ...state.mainAttacker.troops.archer.defense += defenseAmount,
      ...state.mainAttacker.troops.healer.defense += defenseAmount,
      ...state.mainAttacker.troops.mercenary.defense += defenseAmount,
      ...state.mainAttacker.troops.mage.defense += defenseAmount
      
     }))
  },
  setMainDefenderTroopsDefense: (defenseAmount) => {
    set((state) => (state.mainDefender.troops = {
      ...state.mainDefender.troops,
      ...state.mainDefender.troops.porter.defense += defenseAmount,
      ...state.mainDefender.troops.swordsman.defense += defenseAmount,
      ...state.mainDefender.troops.cavalier.defense += defenseAmount,
      ...state.mainDefender.troops.flying.defense += defenseAmount,
      ...state.mainDefender.troops.archer.defense += defenseAmount,
      ...state.mainDefender.troops.healer.defense += defenseAmount,
      ...state.mainDefender.troops.mercenary.defense += defenseAmount,
      ...state.mainDefender.troops.mage.defense += defenseAmount
      
     }))
  },
})))