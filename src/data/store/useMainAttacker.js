import create from 'zustand'
//DATA
import units from '../../data/Units.json';
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
const useMainAttacker = create((set) => ({
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
  functions: {
    setRace: (race) => set((state) => (state.player.race = race)),
    setHomeLand: (land) => set((state) => (state.player.homeLand = land)),
    setApostateValue: () => set((state) => (state.player.apostate = !state.player.apostate)),
    setUnit: (unit) => {  set(state => { state.player.troops[unit.unit] = { ...state.player.troops[unit.unit], ...unit }})},
    setRateAttack: (attackRate) => set((state) => (state.player.attackRateIndex = attackRate)),
    setUnitProperty:  (item ) => {
      item.unit.forEach( trooper => {
          item.value === 0
          ? set( state => {
            state.player.troops[ trooper ][ item.property ].splice( findPropertyIndex( state.player.troops[ trooper ][ item.property ], item ), 1);
          })
          : set(state => {
            state.player.troops[ trooper ][ item.property ][ findPropertyIndex( state.player.troops[ trooper ][ item.property ], item )] = { name: item.name, value: item.value, unit: item.unit };
          })
        })
      item.unit.forEach( trooper => {
        set(( state ) => ( state.player.troops[ trooper ][ item.childProperty ] = state.player.troops[ trooper ][ item.property ].reduce(( acc, item ) =>{
          item.unit.includes( trooper ) ? acc += item.value : acc += 0;
          return acc
        },0)
        ))
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
    setHero: ( hero ) => set(( state ) => {
      const { checker, skillsBranch1, skillsBranch2, skillsBranch3 } = state.player.hero;
      if( checker ) removeBranchSkillValue( skillsBranch1, state.functions.setUnitProperty );
      if( skillsBranch2 ) removeBranchSkillValue( skillsBranch2, state.functions.setUnitProperty );
      if( skillsBranch3 ) removeBranchSkillValue( skillsBranch3, state.functions.setUnitProperty );
      const newHero = state.player.hero = hero;
      addBranchSkillValue( newHero.skillsBranch1, state.functions.setUnitProperty );
    }),
    setHeroSkillsBranch: ( branch, skills ) => set((state) => {
      const currentBranch = state.player.hero[ branch ];
      if( currentBranch ) removeBranchSkillValue( currentBranch, state.functions.setUnitProperty );
      const newBranch = state.player.hero[ branch ] = skills;
      addBranchSkillValue( newBranch, state.functions.setUnitProperty );
    }),
    setHeroBranchesId: (branch, id) => set(( state ) => ( state.player.hero.branchesId[ branch ] = id)),
    setHeroSkillLevel: ( branch, skillNumber, level ) => set( state => {
      const skill = state.player.hero[ branch ][ skillNumber ];
      skill.level = level;
      state.functions.setUnitProperty( skill.value[ skill.level - 1 ])
    }),
    addArtefact: (artefact) => set((state) => {
      const newArray = [];
      state.player.artefacts.forEach(item => {
        if(item.place !== artefact.place) newArray.push(item);
        newArray.push(artefact);
      });
      
      state.player.artefacts = newArray;
    }),
  }
}));

export default useMainAttacker;