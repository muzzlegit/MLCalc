//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//HELPERS
import removeBranchSkillValue from '../helpers/removeBranchSkillValue';

export default function useRemoveHeroBranch ( player, callBack ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();

  //CONSTS
  const {
    hero
  } = playerData;
  const {
    setUnitProperty,
    setHeroBranchesId,
    setHeroSkillsBranch
  } = playerFunctions;

  const removeBranch = ( branch ) => {
    const currentSkills = hero[ branch ];
    if( currentSkills ) removeBranchSkillValue( currentSkills, setUnitProperty, player );
    setHeroSkillsBranch( player, branch, false );
    setHeroBranchesId( player, branch, false );
    if( callBack ) callBack();
  };

  return removeBranch;
}