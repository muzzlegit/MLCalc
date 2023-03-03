import { useEffect } from "react";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
import useUpdateBuffsStorage from "./useUpdateBuffsStorage";
//HELPERS
import { addBuffValues, removeBuffValues } from '../helpers/helpers.js'

const BUFF = [{
  id: '2B0eBD4m',
  effect: "player",
  homeLand: "all",
  name: 'homeLand',
  unit: [ 'porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
  property: 'defense',
  value: 25 
}];
const homeLandAttack = [{
  effect: "player",
  homeLand: "all",
  name: 'homeLandAttack',
  property: 'attackRate'
}];
export default function useBattlefield() {
  const mainAttackerData = usePlayerStoreData( "mainAttacker" );
  const mainDefenderData = usePlayerStoreData( "mainDefender" );
  const playerFunctions = usePlayerStoreFunctions( );

  useUpdateBuffsStorage( "mainAttacker" );
  useUpdateBuffsStorage( "mainDefender" );
  //CONSTS
  const {
    battlefield,
    troops,
    homeLand: mainAttackerHomeLand,
    apostate: mainAttackerApostate
   } = mainAttackerData;
   const { 
    homeLand: mainDefenderHomeLand,
    apostate: mainDefenderApostate
   } = mainDefenderData;
  const { addBuff, removeBuff, setBattlefield } = playerFunctions;

  //HANDLE FUNCTION
  const onChange = ( e ) => {
    setBattlefield( e.target.value );
  };

  //USE EFFECTS
  useEffect(() => {
    if( mainAttackerHomeLand === battlefield && !mainAttackerApostate )
      {
        addBuffValues( "mainAttacker", BUFF, addBuff );
      } 
      else 
      {
        removeBuffValues( "mainAttacker", BUFF, removeBuff );
      };
    for ( const unit in troops ) {
      if( troops[ unit ].homeLand  === battlefield )
      {
        addBuffValues( "mainAttacker", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand, unit: [ unit ], value: 0.5 }], addBuff );
      }
      if( troops[ unit ].alienLand === battlefield )
      {
        addBuffValues( "mainAttacker", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand,  unit: [ unit ], value: -0.5 }], addBuff );
      }
      if( troops[ unit ].alienLand !== battlefield )
      {
        removeBuffValues( "mainAttacker", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand }], removeBuff );
      }
      if( troops[ unit ].homeLand  !== battlefield )
      {
        removeBuffValues( "mainAttacker", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand }], removeBuff );
      }
    };
  }, [ battlefield, mainAttackerHomeLand, mainAttackerApostate, addBuff, removeBuff, troops ]);

  useEffect(() => {
    if( mainDefenderHomeLand === battlefield && !mainDefenderApostate )
      {
        addBuffValues( "mainDefender", BUFF, addBuff );
      } 
      else 
      {
        removeBuffValues( "mainDefender", BUFF, removeBuff );
      };
      for ( const unit in troops ) {
        if( troops[ unit ].homeLand  === battlefield )
        {
          addBuffValues( "mainDefender", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand, unit: [ unit ], value: 0.5 }], addBuff );
        }
        if( troops[ unit ].alienLand === battlefield )
        {
          addBuffValues( "mainDefender", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand,  unit: [ unit ], value: -0.5 }], addBuff );
        }
        if( troops[ unit ].alienLand !== battlefield )
        {
          removeBuffValues( "mainDefender", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand }], removeBuff );
        }
        if( troops[ unit ].homeLand  !== battlefield )
        {
          removeBuffValues( "mainDefender", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand }], removeBuff );
        }
      };
  }, [ battlefield, mainDefenderHomeLand, mainDefenderApostate, addBuff, removeBuff, troops ]);

  return onChange;
};