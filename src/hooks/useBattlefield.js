import { useEffect, useState } from "react";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

export default function useBattlefield( battlefield ) {
  const mainAttackerData = usePlayerStoreData( 'mainAttacker' );
  const mainAttackerFunctions = usePlayerStoreFunctions( 'mainAttacker' );
  const mainDefenderData = usePlayerStoreData( 'mainDefender' );
  const mainDefenderFunctions = usePlayerStoreFunctions( 'mainDefender' );

  //USE EFFECTS
  useEffect(() => {
    const buff = {
      id: '2B0eBD4m',
      battle: true,
      name: 'homeLand',
      unit: [ 'porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
      property: 'defenseArr',
      childProperty: 'defense',
      value: 25 
    };

    if( mainDefenderData.homeLand === battlefield && !mainDefenderData.apostate )
      {
        mainDefenderFunctions.setUnitProperty( buff );
      } 
      else 
      {
        mainDefenderFunctions.setUnitProperty({ ...buff, value: 0 });
      }
  }, [ battlefield, mainDefenderData.homeLand, mainDefenderData.apostate, mainDefenderFunctions ]);

  // useEffect(() => {
  //   const buff = {
  //     id: '2B0eBD4m',
  //     name: 'homeLand',
  //     unit: ['porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage'],
  //     property: 'defenseArr',
  //     childProperty: 'defense',
  //     value: 25 };
  //   if(mainDefenderData.homeLand === battlefield && !mainDefenderData.apostate){
  //     mainDefenderFunctions.setUnitProperty(buff);
  //   } else {
  //     mainDefenderFunctions.setUnitProperty({ ...buff, value: 0 });
  //   }
  // }, [ battlefield, mainDefenderData, mainDefenderData.homeLand, mainDefenderData.apostate, mainDefenderFunctions]);


}