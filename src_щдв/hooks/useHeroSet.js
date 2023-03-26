//DATA
import heroes from '../data/Heroes.json';
//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
import useAddHeroBranch from './useAddHeroBranch';
import useRemoveHeroBranch from './useRemoveHeroBranch';


export default function useHeroSet ( player, toggleModal ) {
  const playerFunctions = usePlayerStoreFunctions();
  const playerData = usePlayerStoreData( player );
  const addBranch = useAddHeroBranch( player, 'skillsBranch1', toggleModal );
  const removeBranch = useRemoveHeroBranch( player );
  const { hero: currentHero} = playerData;

  //CONSTS
  const {
    setHero
  } = playerFunctions;

  const onHeroClick = ( e ) => {
    const { checker, skillsBranch2, skillsBranch3 } = currentHero;
    if( checker ) removeBranch( 'skillsBranch1' );
    if( skillsBranch2 ) removeBranch( 'skillsBranch2' );
    if( skillsBranch3 ) removeBranch( 'skillsBranch3' );
    
    const hero = heroes.find( hero => hero.name === e.currentTarget.id );
    
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
      icon: hero[ e.currentTarget.attributes.name.value ],
      skillsBranch1: hero.skills,
      skillsBranch2: false,
      skillsBranch3: false
    });
    addBranch( hero.id );
  };
  
  return onHeroClick;
}