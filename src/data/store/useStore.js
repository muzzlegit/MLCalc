import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer, Immer } from 'zustand/middleware/immer';
//DATA
import units from '../Units.json';
//HELPERS
import findPropertyIndex from '../../helpers/findPropertyIndex';
import removeBranchSkillValue from '../../helpers/removeBranchSkillValue';
import addBranchSkillValue from '../../helpers/addBranchSkillValue';
//CONST
const additionalProperties = {
  amount: 0,
  attackArr: [],
  attack: 0,
  attackIndex: 'Min',
  attackRate: 0,
  defenseArr: [],
  defense: 0,
  defenseLevel: 0,
  defenseLevelArr: [],
  defenseLevelLimit: 50,
  healthArr: [],
  healthRate: 0,
}
//----------- STORE -----------
const useState = create( devtools(immer( (set, get) => ({
  //MAIN ATTACKER --------------------------------
  mainAttacker: {
    race: 'undead',
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
      porter: { ...units.undead.porter.level1, ...additionalProperties, ...units.undead.porter.commonProperties },
      swordsman: { ...units.undead.swordsman.level1, ...additionalProperties, ...units.undead.swordsman.commonProperties },
      cavalier: { ...units.undead.cavalier.level1, ...additionalProperties, ...units.undead.cavalier.commonProperties },
      flying: { ...units.undead.flying.level1, ...additionalProperties, ...units.undead.flying.commonProperties },
      archer: { ...units.undead.archer.level1, ...additionalProperties, ...units.undead.archer.commonProperties },
      healer: { ...units.undead.healer.level1, ...additionalProperties, ...units.undead.healer.commonProperties },
      mercenary: { ...units.undead.mercenary.level1, ...additionalProperties, ...units.undead.mercenary.commonProperties },
      mage: { ...units.undead.mage.level1, ...additionalProperties, ...units.undead.mage.commonProperties }
    },
    towers: [],
    fortifications: [],
  },
  //MAIN DEFENDER --------------------------------
  mainDefender: {
    race: 'undead',
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
      porter: { ...units.undead.porter.level1, ...additionalProperties, ...units.undead.porter.commonProperties },
      swordsman: { ...units.undead.swordsman.level1, ...additionalProperties, ...units.undead.swordsman.commonProperties },
      cavalier: { ...units.undead.cavalier.level1, ...additionalProperties, ...units.undead.cavalier.commonProperties },
      flying: { ...units.undead.flying.level1, ...additionalProperties, ...units.undead.flying.commonProperties },
      archer: { ...units.undead.archer.level1, ...additionalProperties, ...units.undead.archer.commonProperties },
      healer: { ...units.undead.healer.level1, ...additionalProperties, ...units.undead.healer.commonProperties },
      mercenary: { ...units.undead.mercenary.level1, ...additionalProperties, ...units.undead.mercenary.commonProperties },
      mage: { ...units.undead.mage.level1, ...additionalProperties, ...units.undead.mage.commonProperties }
    },
    towers: [],
    fortifications: [],
  },
  //FUNCTIONS --------------------------------
  functions: {
    setRace: ( player, race ) => set(( state ) => { state[ player ].race = race }),
    setHomeLand: ( player, land ) => set((state) => { state[ player ].homeLand = land }),
    setApostateValue: ( player ) => set(( state ) => { state[ player ].apostate = !state[ player ].apostate }),
    setUnit: ( player, unit ) => {  set( state => { state[ player ].troops[ unit.unit ] = { ...state[ player ].troops[ unit.unit ], ...unit }}, false, 'setUnit')},
    setRateAttack: ( player, attackRate ) => set(( state ) => { state[ player ].attackRateIndex = attackRate }),
    setUnitProperty:  ( player, item ) => {
      // console.log(item)
      item.unit.forEach( trooper => {
          item.value === 0
          ? set( state => {
            state[ player ].troops[ trooper ][ item.property ].splice( findPropertyIndex( state[ player ].troops[ trooper ][ item.property ], item ), 1);
          }, false, `setPropertyToZero_${trooper}_&&_${player}`)
          : set( state => {
            state[ player].troops[ trooper ][ item.property ][ findPropertyIndex( state[ player ].troops[ trooper ][ item.property ], item )] = { name: item.name, value: item.value, unit: item.unit };
          }, false, `setProperty_${trooper}_&&_${player}`)
        })
      item.unit.forEach( trooper => {
        set(( state ) => { state[ player ].troops[ trooper ][ item.childProperty ] = state[ player ].troops[ trooper ][ item.property ].reduce(( acc, item ) =>{
          item.unit.includes( trooper ) ? acc += item.value : acc += 0;
          return acc
          },0);
        }, false, `setChildProperty_${trooper}_&&_${player}`);
      });
      
    },
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
      if( currentBranch ) removeBranchSkillValue( currentBranch, state.functions.setUnitProperty, player );
      const newBranch = state[ player ].hero[ branch ] = skills;
      addBranchSkillValue( newBranch, state.functions.setUnitProperty, player );
    }),
    setHeroBranchesId: ( player, branch, id) => set(( state ) => { state[ player ].hero.branchesId[ branch ] = id }),
    setHeroSkillLevel: ( player, branch, skillNumber, level ) => set( state => {
      state[ player ].hero[ branch ][ skillNumber ].level = level;
    }),
    addArtefact: (artefact) => set((state) => {
      const newArray = [];
      state.player.artefacts.forEach(item => {
        if(item.place !== artefact.place) newArray.push(item);
        newArray.push(artefact);
      });
      
      state.player.artefacts = newArray;
    })
  }
})
)));

export default useState;