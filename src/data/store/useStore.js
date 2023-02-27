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
const useState = create(immer((set, get) => ({
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
    bufs: [],
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
    artefacts: [  {
      "id": "0nUpNrRL",
      "level": 5,
      "ancient": false,
      "perfect": false,
      "name": "Кольчуга Головореза",
      "place": "armor",
      "set": "Головорез",
      "value": [
        {
          "id": "0nUpNrRL",
          "name": "Кольчуга Головореза",
          "effect": "player",
          "unit": ["swordsman", "cavalier", "flying", "archer"],
          "property": "healthArr",
          "childProperty": "healthRate",
          "description": "Здоровье воинов, всадников, летунов, стрелков своих +66%",
          "value": 0.66 
        }
      ],
      "icon": "-187px -249px",
      "battle": true,
      "homeLand": "all",
      "runes": [],
      "sharpening": []
    },  
    {
      "id": "TfpRJXSq",
      "level": 5,
      "ancient": "none",
      "perfect": false,
      "name": "Пояс Головореза",
      "place": "belt",
      "set": "Головорез",
      "value": {
        "common": [
          {
            "id": "TfpRJXSq",
            "name": "Пояс Головореза",
            "effect": "player",
            "unit": [],
            "property": "",
            "childProperty": "",
            "description": "",
            "value": 0
          },
          {
            "id": "TfpRJXSq",
            "name": "Пояс Головореза",
            "effect": "enemy",
            "unit": [],
            "property": "",
            "childProperty": "",
            "description": "",
            "value": 0
          }
        ],
        "perfect": [
          {
            "id": "TfpRJXSq",
            "name": "Пояс Головореза",
            "effect": "player",
            "unit": [],
            "property": "",
            "childProperty": "",
            "description": "",
            "value": 0
          },
          {
            "id": "TfpRJXSq",
            "name": "Пояс Головореза",
            "effect": "player",
            "unit": [],
            "property": "",
            "childProperty": "",
            "description": "",
            "value": 0
          }
        ]
      },
      "icon": "-187px -435px",
      "battle": false,
      "homeLand": "all",
      "runes": [],
      "sharpening": []
    },],
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
    bufs: [],
  },
  //FUNCTIONS --------------------------------
  functions: {
    setRace: ( player, race ) => set(( state ) => { state[ player ].race = race }),
    setHomeLand: ( player, land ) => set((state) => { state[ player ].homeLand = land }),
    setApostateValue: ( player ) => set(( state ) => { state[ player ].apostate = !state[ player ].apostate }),
    setUnit: ( player, unit ) =>  set( state => { state[ player ].troops[ unit.unit ] = { ...state[ player ].troops[ unit.unit ], ...unit }}),
    setRateAttack: ( player, attackRate ) => set(( state ) => { state[ player ].attackRateIndex = attackRate }),
    setUnitProperty:  ( player, item ) => {
      if( item.unit === "none" ) return;
      if( item.unit === "fotification" ) return;
      // console.log(item)
      item.unit.forEach( trooper => {
          item.value === 0
          ? set( state => {
            state[ player ].troops[ trooper ][ item.property ].splice( findPropertyIndex( state[ player ].troops[ trooper ][ item.property ], item ), 1);
          }, false, `setPropertyToZero_${trooper}_&&_${player}`)
          : set( state => {
            state[ player].troops[ trooper ][ item.property ][ findPropertyIndex( state[ player ].troops[ trooper ][ item.property ], item )] = { id: item.id, name: item.name, value: item.value, unit: item.unit };
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
    addArtefact: ( artefact, player ) => set(( state ) => {
      const previosArtefacts  = state[ player ].artefacts.filter( art => art.place !== artefact.place );
      console.log(previosArtefacts)
      previosArtefacts.push( artefact );
      state[ player ].artefacts = [ ...previosArtefacts ];
    }),
    removeArtefact:  ( artefact, player ) => set(( state ) => {
      let artefacts = state[ player ].artefacts.filter( art => art.place !== artefact.place );
      state[ player ].artefacts = artefacts;
    }),
  }
}
)));

export default useState;