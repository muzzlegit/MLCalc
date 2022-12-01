import { useEffect, useState } from "react";
//DATA
import UNITS from '../data/Units.json';
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";


export default function useUnit( player, unitName, unitLevel, amount ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions( player );

  //CONSTS
  const { race, attackRateIndex } = playerData;
  const { setUnit } = playerFunctions;
  const unit = playerData.troops[ unitName ];

  //USE EFFECT
  useEffect(() => {
    setUnit({ 
      ...UNITS[ race ][ unitName ][ `level${ unitLevel }` ],
      attack: UNITS[ race ][ unitName ][ `level${ unitLevel }` ][ `attack${ attackRateIndex }` ],
      amount });
  }, [ unitName, unitLevel, amount, race, attackRateIndex, setUnit ]);

  return unit;
}