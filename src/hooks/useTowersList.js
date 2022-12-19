//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

const useTowersList = ( player ) => {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions( );

  //CONSTS
  const { towers, fortifications } = playerData;
  const { setTowers, setFortification } = playerFunctions;

  const onTowerClick = ( e ) => {
    setTowers( player, towers.filter( tower => tower.id !== e.currentTarget.id ));
  }
  const onFortificationClick = ( e ) => {
    setFortification( player, fortifications.filter( fortification => fortification.id !== e.currentTarget.id ));
  }

  return [ onTowerClick, onFortificationClick ];
};

export default useTowersList;