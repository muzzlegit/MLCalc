//HOOKS
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
import useUpdateBuffsStorage from "./useUpdateBuffsStorage";

export default function useBuffsStorage( player ) {
  const playerFunctions = usePlayerStoreFunctions();

  const {
    addBuff,
    removeBuff
  } = playerFunctions;

  const addValues = ( valuesArr ) => {
    valuesArr.forEach( value => {
      if( value.effect !== "enemy" ) addBuff( player, value );
    });
  };

  const removeValues = ( valuesArr ) => {
    valuesArr.forEach( value => {
      removeBuff( player, value );
    });
  };

  useUpdateBuffsStorage( player );

  return [ addValues, removeValues ];
}