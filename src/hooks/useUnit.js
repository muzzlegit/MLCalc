import { useEffect } from "react";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//DATA
import UNITS from '../data/Units.json';

export default function useUnit( player, unitLevel, unitName, amount ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();

  const {
    race,
    attackRateIndex
  } = playerData;

  const {
    setUnit
  } = playerFunctions;

  //USE EFFECT
  useEffect( () => {
    setUnit( 
      player, 
      { 
      ...UNITS[ race ][ unitName ][ `level${ unitLevel }` ],
      attack: UNITS[ race ][ unitName ][ `level${ unitLevel }` ][ `attack${ attackRateIndex }` ],
      amount
      }
    );
  }, [ race, amount, player, unitName, unitLevel, attackRateIndex, setUnit ]);

  const newPlayerData = usePlayerStoreData( player );
  return newPlayerData.troops[unitName];
};