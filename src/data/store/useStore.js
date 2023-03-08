import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer';
//DATA
import units from '../Units.json';
//HELPERS
import { addBranchSkillValue, removeBranchSkillValue } from '../../helpers/helpers.js';
//CONST
const additionalProperties = {
  amount: 0,
  attack: 0,
  attackIndex: 'Min',
  attackRate: 0,
  defense: 0,
  defenseLevel: 0,
  defenseLevelLimit: 50,
  healthRate: 0,
  amountRate: 0,
  restitutionRate: 0,
  persecutionRate: 0
}
//----------- STORE -----------
const useState = create( immer((set, get) => ({
  //MAIN ATTACKER --------------------------------
  mainAttacker: {
    checker: true,
    battlefield: "cursedForest",
    race: 'undead',
    fraction: 'dark',
    apostate: false,
    homeLand: 'cursedForest',
    hero: {
      checker: false,
    },
    artefacts: [],
    attackRateIndex: 'Min',
    troops: {
      porter: { ...units.undead.porter.level1, ...additionalProperties, ...units.undead.porter.commonProperties, capacityRate: 0 },
      swordsman: { ...units.undead.swordsman.level1, ...additionalProperties, ...units.undead.swordsman.commonProperties },
      cavalier: { ...units.undead.cavalier.level1, ...additionalProperties, ...units.undead.cavalier.commonProperties },
      flying: { ...units.undead.flying.level1, ...additionalProperties, ...units.undead.flying.commonProperties },
      archer: { ...units.undead.archer.level1, ...additionalProperties, ...units.undead.archer.commonProperties },
      healer: { ...units.undead.healer.level1, ...additionalProperties, ...units.undead.healer.commonProperties, resurrectionRate: 0 },
      mercenary: { ...units.undead.mercenary.level1, ...additionalProperties, ...units.undead.mercenary.commonProperties },
      mage: { ...units.undead.mage.level1, ...additionalProperties, ...units.undead.mage.commonProperties, suppressionRate: 0 }
    },
    towers: [],
    fortifications: [],
    buffs: [],
  },
  //MAIN ATTACKER ALLY --------------------------
  attackerAlly: {
    checker: false,
  },
  //MAIN DEFENDER --------------------------------
  mainDefender: {
    checker: true,
    race: 'undead',
    fraction: 'dark',
    ally: {
      flag: false,
    },
    apostate: false,
    homeLand: 'cursedForest',
    hero: {
      checker: false,
    },
    artefacts: [],
    attackRateIndex: 'Min',
    troops: {
      porter: { ...units.undead.porter.level1, ...additionalProperties, ...units.undead.porter.commonProperties, capacityRate: 0 },
      swordsman: { ...units.undead.swordsman.level1, ...additionalProperties, ...units.undead.swordsman.commonProperties },
      cavalier: { ...units.undead.cavalier.level1, ...additionalProperties, ...units.undead.cavalier.commonProperties },
      flying: { ...units.undead.flying.level1, ...additionalProperties, ...units.undead.flying.commonProperties },
      archer: { ...units.undead.archer.level1, ...additionalProperties, ...units.undead.archer.commonProperties },
      healer: { ...units.undead.healer.level1, ...additionalProperties, ...units.undead.healer.commonProperties, resurrectionRate: 0  },
      mercenary: { ...units.undead.mercenary.level1, ...additionalProperties, ...units.undead.mercenary.commonProperties },
      mage: { ...units.undead.mage.level1, ...additionalProperties, ...units.undead.mage.commonProperties, suppressionRate: 0 }
    },
    towers: [],
    fortifications: [],
    buffs: [

    ],
  },
  //firstDefenderAlly --------------------------
  firstDefenderAlly: {
    checker: false,
  },
  //secondDefenderAlly --------------------------
  secondDefenderAlly: {
    checker: false,
  },
  //FUNCTIONS --------------------------------
  functions: {
    setBattlefield: ( battlefield ) => set(( state ) => { state.mainAttacker.battlefield = battlefield }),
    setFraction: ( player, fraction ) => set(( state ) => { state[ player ].fraction = fraction }),
    setRace: ( player, race ) => set(( state ) => { state[ player ].race = race }),
    setHomeLand: ( player, land ) => set((state) => { state[ player ].homeLand = land }),
    setApostateValue: ( player ) => set(( state ) => { state[ player ].apostate = !state[ player ].apostate }),
    setUnit: ( player, unit ) =>  set( state => { state[ player ].troops[ unit.unit ] = { ...state[ player ].troops[ unit.unit ], ...unit }}),
    setRateAttack: ( player, attackRate ) => set(( state ) => { state[ player ].attackRateIndex = attackRate }),
    setUnitProperty: ( player, unit,  property, value ) => set(( state ) => { state[ player ].troops[ unit ][ property ] = value }),
    setTowers:  ( player, tower ) =>set(( state ) => { state[ player ].towers = tower }, false, 'setTowers'),
    setFortification:  ( player, fortification ) => set(( state ) => { state[ player ].fortifications = fortification }),
    addTowers:  ( player, tower ) =>set(( state ) => { state[ player ].towers = [ ...state[ player ].towers, tower ] }),
    addFortification:   ( player, fortification, amount) =>{
      set(( state ) => {
        let total = true;
        if( state[ player ].fortifications.length === 0 ){
          fortification.quantity = amount;
          state[ player ].fortifications = [ ...state[ player ].fortifications, fortification ];
          return;
        }
        if( state[ player ].fortifications.length !== 0 ) {
          state[ player ].fortifications.forEach(( fort ) => {
            if( fort.level === fortification.level ) {
              fort.quantity += amount;
              state[ player ].fortifications = [ ...state[ player ].fortifications ];
              total = false;
              return;
            } 
          })
        }
        if( total ){
          fortification.quantity = amount;
          state[ player ].fortifications = [ ...state[ player ].fortifications, fortification ];
          return;
        }
      })
    },
    setHero: ( player, hero ) => set(( state ) => {
      state[ player ].hero = hero;
    }, false, `setHero_&&_${player}`),
    setHeroSkillsBranch: ( player, branch, skills ) => set(( state ) => {
      const currentBranch = state[ player ].hero[ branch ];
      if( currentBranch ) removeBranchSkillValue( player, currentBranch, state.functions.removeBuff );
      const newBranch = state[ player ].hero[ branch ] = skills;
      addBranchSkillValue( player, newBranch, state.functions.addBuff );
    }),
    setHeroBranchesId: ( player, branch, id) => set(( state ) => { state[ player ].hero.branchesId[ branch ] = id }),
    setHeroSkillLevel: ( player, branch, skillNumber, level ) => set( state => {
      state[ player ].hero[ branch ][ skillNumber ].level = level;
    }),
    addArtefact: ( player, artefact ) => set(( state ) => {
      if( !artefact ) return;
      const previosArtefacts  = state[ player ].artefacts.filter( art => art.place !== artefact.place );
      previosArtefacts.push( artefact );
      state[ player ].artefacts = [ ...previosArtefacts ];
    }),
    removeArtefact:  ( player, artefact ) => set(( state ) => {
      if( !artefact ) return;
      let artefacts = state[ player ].artefacts.filter( art => art.place !== artefact.place );
      state[ player ].artefacts = artefacts;
    }),
    addBuff:( player, buff ) => set(( state ) => {
      if( !state[ player ].checker ) return;
      if( !state[ player ].buffs.filter( item => item.id === buff.id ).length )
      {
        state[ player ].buffs = [ ...state[ player ].buffs, buff ];
      }
    }),      

    removeBuff:( player, buff ) => set(( state ) => {
      if( state[ player ].checker )
      {
        state[ player ].buffs = state[ player ].buffs.filter( item => item.id !== buff.id );
      }
    }),
  }
}
)));

export default useState;