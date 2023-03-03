//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//HELPERS
import { removeBranchSkillValue } from '../helpers/helpers.js';

export default function useRemoveHeroBranch ( player, callBack ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();

  //CONSTS
  const {
    hero
  } = playerData;
  const {
    removeBuff,
    setHeroBranchesId,
    setHeroSkillsBranch
  } = playerFunctions;

  const removeBranch = ( branch ) => {
    const currentSkills = hero[ branch ];
    if( currentSkills ) removeBranchSkillValue( player, currentSkills, removeBuff );
    setHeroSkillsBranch( player, branch, false );
    setHeroBranchesId( player, branch, false );
    if( callBack ) callBack();
  };

  return removeBranch;
}