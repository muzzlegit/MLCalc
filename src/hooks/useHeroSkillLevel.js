import { useEffect } from "react";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";


export default function useHeroSkillLevel( player, branch, skillNumber ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();
  const { hero } = playerData;
  const { setHeroSkillLevel, setUnitProperty } =playerFunctions;

  const skill = hero.checker ? hero[ branch ][ skillNumber ] : {};
  const heroChecker = hero.checker;

  //HANDLE FUNCTIONS
  const onLevelButtonClick = () => {
    const level = hero[ branch ][ skillNumber ].level;
    level >= 5 ?
    setHeroSkillLevel( player, branch, skillNumber, 1 ) :
    setHeroSkillLevel( player, branch, skillNumber, level + 1 );
    setUnitProperty( player, skill.value[ level >= 5 ? 0 : skill.level ])
  }
    
  return [ skill, heroChecker, onLevelButtonClick ];
}