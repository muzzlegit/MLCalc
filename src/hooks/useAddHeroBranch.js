//DATA
import heroesData from '../data/Heroes.json';
//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//HELPERS
import removeBranchSkillValue from '../helpers/removeBranchSkillValue';
import addBranchSkillValue from '../helpers/addBranchSkillValue';

export default function useAddHeroBranch ( player, branch, callBack ) {
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

  const addBranch = ( id ) => {
    const currentSkills = hero[ branch ];
    const newSkills = heroesData.find( hero => hero.id === id ).skills;
    if( currentSkills ) removeBranchSkillValue( currentSkills, setUnitProperty, player );
    setHeroSkillsBranch(
      player,
      branch,
      newSkills
    );
    setHeroBranchesId( player, branch, id );
    addBranchSkillValue( newSkills, setUnitProperty, player );
    if( callBack ) callBack();
  };

  return addBranch;
}