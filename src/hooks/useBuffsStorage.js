//HOOKS
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//HELPERS
import getEnemy from "../helpers/getEnemy";

export default function useBuffsStorage( ) {
  const playerFunctions = usePlayerStoreFunctions();

  const {
    addBuff,
    removeBuff
  } = playerFunctions;

  const addValues = ( player, valuesArr ) => {
    valuesArr.forEach( value => {
      if( value.effect === "player" ) addBuff( player, value );
      if( value.effect === "enemy" )
      {
        getEnemy( player ).forEach( player => addBuff( player, value ) );
      }
    });
  }

  const removeValues = ( player, valuesArr ) => {
    valuesArr.forEach( value => {
      if( value.effect === "player" ) removeBuff( player, value );
      if( value.effect === "enemy" )
      {
        getEnemy( player ).forEach( player => removeBuff( player, value ) );
      }
    });
  };

  return [ addValues, removeValues ];
}