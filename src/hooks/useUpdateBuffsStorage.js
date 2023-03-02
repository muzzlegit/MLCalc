import { useEffect } from "react";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

export default function useUpdateBuffsStorage( player ) {
  const mainAttackerData = usePlayerStoreData( "mainAttacker" );
  const mainDefenderData = usePlayerStoreData( "mainDefender" );
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();

  const {
    buffs
  } = playerData;
  const {
    setUnitProperty
  } = playerFunctions;
  const {
    battlefield,
    fraction: mainAttackerFraction
  } = mainAttackerData;
  const {
    apostate: mainDefenderApostate,
    fraction: mainDefenderFraction
  } = mainDefenderData;

  //USE EFFECT
  useEffect(() => {
    const properties = {
      attackRate: 0,
      defense: 0,
      defenseLevel: 0,
      healthRate: 0,
      amountRate: 0
    }
    let unitsProperties = {
      porter: {   
        ...properties,
        capacityRate: 0
      },
      swordsman: { ...properties, persecutionRate: 0 },
      cavalier: { ...properties, persecutionRate: 0 },
      flying: { ...properties, persecutionRate: 0 },
      archer: { ...properties, persecutionRate: 0 },
      healer: {
        ...properties,
        resurrectionRate: 0
      },
      mercenary: { ...properties },
      mage: {   
        ...properties,
        suppressionRate: 0
      },
    }

    buffs.forEach( buff => {
      if( buff.homeLand === "all" )
      {
        if( buff.unit === "fortification" ) { console.log("fortification")};
        if( buff.unit === "tower" ) { console.log("tower")};
        if( buff.unit === "magicTower" ) { console.log("magicTower")}
        else {
          buff.unit.forEach( unit => {
            unitsProperties[ unit ][ buff.property ] += buff.value;
          });
        }
      };
      if( buff.homeLand === battlefield )
      {
        if( buff.unit === "fortification" ) { console.log("fortification")};
        if( buff.unit === "tower" ) { console.log("tower")};
        if( buff.unit === "magicTower" ) { console.log("magicTower")}
        else {
          buff.unit.forEach( unit => {
            unitsProperties[ unit ][ buff.property ] += buff.value;
          });
        }
      };
      if( buff.homeLand === "fraction" && ( mainAttackerFraction !== mainDefenderFraction || mainDefenderApostate ) )
      {
        if( buff.unit === "fortification" ) { console.log("fortification")};
        if( buff.unit === "tower" ) { console.log("tower")};
        if( buff.unit === "magicTower" ) { console.log("magicTower")}
        else {
          buff.unit.forEach( unit => {
            unitsProperties[ unit ][ buff.property ] += buff.value;
          });
        }
      };
    });

    for (const unit in unitsProperties) {
      for (const property in unitsProperties[ unit ]) {
        setUnitProperty( player, unit, property, unitsProperties[ unit ][property] )
        }
      }
  }, [ buffs, battlefield, setUnitProperty, player, mainAttackerFraction, mainDefenderFraction, mainDefenderApostate ]);
}