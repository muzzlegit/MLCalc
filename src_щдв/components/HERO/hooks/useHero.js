//HOOKS
import usePlayerStoreData from "../../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from "../../../hooks/usePlayerStoreFunctions";
//DATA
import heroesList from '../../../data/Heroes.json';
//HELPERS
import { addBuffValues, removeBuffValues, removeBranchSkillValue, addBranchSkillValue } from '../../../helpers/helpers.js'

export default function useHero( player ) {
  const playerData = usePlayerStoreData( player );  
  const playerFunctions = usePlayerStoreFunctions();

  const { hero: currentHero } = playerData;
  const { setHero, setHeroBranch, setHeroSkillLevel, addBuff, removeBuff } = playerFunctions;

  const removeHeroBranch = ( branch, branchSkills ) => {
    setHeroBranch( player, branch, false, false );
    removeBranchSkillValue( player, branchSkills, removeBuff );
  };

  const addHeroBranch = ( branch, branchId ) => {
    const skills = heroesList.find( hero => hero.id === branchId ).skills;
    setHeroBranch( player, branch, branchId, skills  );
    addBranchSkillValue( player, skills, addBuff );
  };

  const addHero = ( id, icon ) => {
    const { checker, skillsBranch1, skillsBranch2, skillsBranch3 } = currentHero;
    // if( checker && id === currentHero.id ) return;
    if( checker ) removeHeroBranch( 'skillsBranch1', skillsBranch1 );
    if( skillsBranch2 ) removeHeroBranch( 'skillsBranch2', skillsBranch2 );
    if( skillsBranch3 ) removeHeroBranch( 'skillsBranch3', skillsBranch3 );
    
    const hero = heroesList.find( hero => hero.id === id );
    setHero(
      player,
      {
      checker: true,
      id: hero.id,
      branchesId: {
        skillsBranch1: hero.id,
        skillsBranch2: false,
        skillsBranch3: false,
      },
      class: hero.class,
      name: hero.name,
      icon: hero[ icon  ],
      skillsBranch1: hero.skills,
      skillsBranch2: false,
      skillsBranch3: false
    });
    addHeroBranch( 'skillsBranch1', hero.id );
  };

  const setSkillLevel = ( branch, skillNumber ) => {
    const skill = hero.checker ? hero[ branch ][ skillNumber ] : {};
    const level = hero[ branch ][ skillNumber ].level;
    if ( level >= 5 )
    {
      setHeroSkillLevel( player, branch, skillNumber, 1 );
      removeBuffValues( player, [ skill.value[ 4 ] ], removeBuff );
      addBuffValues( player, [ skill.value[ 0 ] ], addBuff )
    } 
    else 
    {
      setHeroSkillLevel( player, branch, skillNumber, level + 1 );
      removeBuffValues( player, [ skill.value[ level - 1 ] ], removeBuff )
      addBuffValues( player, [ skill.value[ level ] ], addBuff )
    }
     

  }


  const { hero } = playerData;
  return { hero, heroesList, addHero, addHeroBranch, removeHeroBranch, setSkillLevel };
}