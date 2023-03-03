//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//HELPERS
import { addBuffValues, removeBuffValues } from '../helpers/helpers.js';

export default function useHeroSkillLevel( player, branch, skillNumber ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();
  const { hero } = playerData;
  const { setHeroSkillLevel, addBuff, removeBuff } =playerFunctions;

  const skill = hero.checker ? hero[ branch ][ skillNumber ] : {};
  const heroChecker = hero.checker;

  //HANDLE FUNCTIONS
  const onLevelButtonClick = () => {
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
    
  return [ skill, heroChecker, onLevelButtonClick ];
}