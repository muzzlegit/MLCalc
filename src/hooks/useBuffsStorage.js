//HOOKS
import { useCallback } from "react";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

export default function useBuffsStorage( ) {
  const playerFunctions = usePlayerStoreFunctions();

  const {
    addBuff,
    removeBuff
  } = playerFunctions;

  const addValues = ( player, valuesArr ) => {
    valuesArr.forEach( value => {
      if( value.effect === "player" ) addBuff( player, value );
    });
  }

  const removeValues = ( player, valuesArr ) => {
    valuesArr.forEach( value => {
      removeBuff( player, value );
    });
  };

  return [ addValues, removeValues ];
}