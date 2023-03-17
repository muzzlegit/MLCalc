import { useEffect } from "react";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//HELPERS
import { getAlly, getEnemy } from '../helpers/helpers.js';

export default function useBuffsStorage( player ) {
  const mainAttackerData = usePlayerStoreData( "mainAttacker" );
  const mainDefenderData = usePlayerStoreData( "mainDefender" );
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();

  const {
    buffs
  } = playerData;
  const {
    addBuff,
    removeBuff,
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

  const addBuffValues = ( player, valuesArr ) => {
    valuesArr.forEach( value => {
      switch ( value.effect ) {
        case "player":
          addBuff( player, value );
          break;
        case "player_ally":
          addBuff( player, value );
          console.log('player_ally')
          getAlly( player ).forEach( ally => { addBuff( ally, value ) });
          break;
        case "ally":
          getAlly( player ).forEach( ally => { addBuff( ally, value ) });
          break;
        case "enemy":
          getEnemy( player ).forEach( anemy => { addBuff( anemy, value ) });
          break;
        default:
          break;
      };
    });
  };

  const removeBuffValues = ( player, valuesArr) => {
    valuesArr.forEach( value => {
      switch ( value.effect ) {
        case "player":
          removeBuff( player, value );
          break;
        case "player_ally":
          removeBuff( player, value );
          console.log('player_ally')
          getAlly( player ).forEach( ally => { removeBuff( ally, value ) });
          break;
        case "ally":
          getAlly( player ).forEach( ally => { removeBuff( ally, value ) });
          break;
       case "enemy":
          getEnemy( player ).forEach( anemy => { removeBuff( anemy, value ) });
          break;
        default:
          break;
      };
    });
  };

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
      console.log(player)
      if(player === "attackerAlly"){
        console.log(buff)
      }
      if( buff.homeLand === "all" )
      {
        if( buff.unit === "fortification" ) return;
        if( buff.unit === "tower" ) return;
        if( buff.unit === "magicTower" ) { console.log("magicTower")}
        else {
          buff.unit.forEach( unit => {
            unitsProperties[ unit ][ buff.property ] += buff.value;
          });
        }
      };
      if( buff.homeLand === battlefield )
      {
        if( buff.unit === "fortification" ) return;
        if( buff.unit === "tower" ) return;
        if( buff.unit === "magicTower" ) { console.log("magicTower")}
        else {
          buff.unit.forEach( unit => {
            unitsProperties[ unit ][ buff.property ] += buff.value;
          });
        }
      };
      if( buff.homeLand === "fraction" && ( mainAttackerFraction !== mainDefenderFraction || mainDefenderApostate ) )
      {
        if( buff.unit === "fortification" ) return;
        if( buff.unit === "tower" ) return;
        if( buff.unit === "magicTower" ) { console.log("magicTower")}
        else {
          buff.unit.forEach( unit => {
            unitsProperties[ unit ][ buff.property ] += buff.value;
          });
        }
      };
      if( buff.homeLand === "monsters" && ( mainAttackerFraction !== mainDefenderFraction || mainDefenderApostate ) )
      {
        if( buff.unit === "player" ) { console.log("player")}
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

  return { addBuffValues, removeBuffValues };
}