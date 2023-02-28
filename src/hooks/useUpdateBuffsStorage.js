import { useEffect } from "react";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

export default function useUpdateBuffsStorage( player ) {
  const mainAttackerData = usePlayerStoreData( "mainAttacker" );
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();

  const {
    buffs
  } = playerData;
  const {
    setUnitsP
  } = playerFunctions;
  const {
    battlefield
  } = mainAttackerData;


  //USE EFFECT
  useEffect(() => {
    let unitsProperties = {
      porter: {   
        attackRate: 0,
        defense: 0,
        defenseLevel: 0,
        healthRate: 0,
        capacityRate: 0
      },
      swordsman: {   
        attackRate: 0,
        defense: 0,
        defenseLevel: 0,
        healthRate: 0
      },
      cavalier: {   
        attackRate: 0,
        defense: 0,
        defenseLevel: 0,
        healthRate: 0
      },
      flying: {   
        attackRate: 0,
        defense: 0,
        defenseLevel: 0,
        healthRate: 0
      },
      archer: {   
        attackRate: 0,
        defense: 0,
        defenseLevel: 0,
        healthRate: 0
      },
      healer: {   
        attackRate: 0,
        defense: 0,
        defenseLevel: 0,
        healthRate: 0,
        resurrectionRate: 0
      },
      mercenary: {   
        attackRate: 0,
        defense: 0,
        defenseLevel: 0,
        healthRate: 0,
        resurrectionRate: 0
      },
      mage: {   
        attackRate: 0,
        defense: 0,
        defenseLevel: 0,
        healthRate: 0,
        suppressionRate: 0
      },
    }
    buffs.forEach( buff => {
      if( buff.homeLand === "all" )
      {
        buff.unit.forEach( unit => {
          unitsProperties[ unit ][ buff.childProperty ] += buff.value;
        })
      };
      if( buff.homeLand === battlefield )
      {
        buff.unit.forEach( unit => {
          unitsProperties[ unit ][ buff.childProperty ] += buff.value;
        })
      };
    });
    for (const unit in unitsProperties) {
      for (const property in unitsProperties[ unit ]) {
        setUnitsP( player, unit, property, unitsProperties[ unit ][property] )
        }
      }
  }, [ buffs, battlefield, setUnitsP, player ]);
}