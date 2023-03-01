import { useEffect } from "react";
import useUpdateBuffsStorage from "./useUpdateBuffsStorage";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

const BUFF = {
  id: '2B0eBD4m',
  battle: true,
  homeLand: "all",
  name: 'homeLand',
  unit: [ 'porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
  property: 'defense',
  value: 25 
};
const homeLandAttack = {
  battle: true,
  homeLand: "all",
  name: 'homeLandAttack',
  property: 'attackRate'
};
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
        addBuff( "mainAttacker", BUFF );
      } 
      else 
      {
        removeBuff( "mainAttacker", BUFF );
      };
    for ( const unit in troops ) {
      if( troops[ unit ].homeLand  === battlefield )
      {
        addBuff( "mainAttacker", { ...homeLandAttack, id: unit + troops[ unit ].homeLand, unit: [ unit ], value: 0.5 } );
      }
      if( troops[ unit ].alienLand === battlefield )
      {
        addBuff( "mainAttacker", { ...homeLandAttack, id: unit + troops[ unit ].alienLand,  unit: [ unit ], value: -0.5 } );
      }
      if( troops[ unit ].alienLand !== battlefield )
      {
        removeBuff( "mainAttacker", { ...homeLandAttack, id: unit + troops[ unit ].alienLand } );
      }
      if( troops[ unit ].homeLand  !== battlefield )
      {
        removeBuff( "mainAttacker", { ...homeLandAttack, id: unit + troops[ unit ].homeLand } );
      }
    };
  }, [ battlefield, mainAttackerHomeLand, mainAttackerApostate, addBuff, removeBuff ]);

  useEffect(() => {
    if( mainDefenderHomeLand === battlefield && !mainDefenderApostate )
      {
        addBuff( "mainDefender", BUFF );
      } 
      else 
      {
        removeBuff( "mainDefender", BUFF );
      };
      for ( const unit in troops ) {
        if( troops[ unit ].homeLand  === battlefield )
        {
          addBuff( "mainDefender", { ...homeLandAttack, id: unit + troops[ unit ].homeLand, unit: [ unit ], value: 0.5 } );
        }
        if( troops[ unit ].alienLand === battlefield )
        {
          addBuff( "mainDefender", { ...homeLandAttack, id: unit + troops[ unit ].alienLand,  unit: [ unit ], value: -0.5 } );
        }
        if( troops[ unit ].alienLand !== battlefield )
        {
          removeBuff( "mainDefender", { ...homeLandAttack, id: unit + troops[ unit ].alienLand } );
        }
        if( troops[ unit ].homeLand  !== battlefield )
        {
          removeBuff( "mainDefender", { ...homeLandAttack, id: unit + troops[ unit ].homeLand } );
        }
      };
  }, [ battlefield, mainDefenderHomeLand, mainDefenderApostate, addBuff, removeBuff ]);

  return onChange;
};