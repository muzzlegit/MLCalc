//DATA
import heroesData from '../data/Heroes.json';
//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//HELPERS
import { addBranchSkillValue, removeBranchSkillValue } from '../helpers/helpers.js';

export default function useAddHeroBranch ( player, branch, callBack ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();

  //CONSTS
  const {
    hero
  } = playerData;
  const {
    addBuff,
    removeBuff,
    setHeroBranchesId,
    setHeroSkillsBranch
  } = playerFunctions;

  const addBranch = ( id ) => {
    const currentSkills = hero[ branch ];
    const newSkills = heroesData.find( hero => hero.id === id ).skills;
    if( currentSkills ) removeBranchSkillValue( player, currentSkills, removeBuff );
    setHeroSkillsBranch( player, branch, newSkills );
    setHeroBranchesId( player, branch, id );
    addBranchSkillValue( player, newSkills, addBuff );
    if( callBack ) callBack();
  };

  return addBranch;
}