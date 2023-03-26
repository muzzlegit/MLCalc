import { useEffect } from "react";
//HOOKS
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from "../../../../hooks/usePlayerStoreFunctions";
import useBuffsStorage from "../../../../hooks/useBuffsStorage";
//HELPERS
import { addBuffValues, removeBuffValues } from '../../../../helpers/helpers.js'
//CONSTS
const BUFF = [{
  id: '2B0eBD4m',
  source: "battlefield",
  effect: "player",
  homeLand: "all",
  name: 'homeLand',
  unit: [ 'porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
  property: 'defense',
  value: 25 
}];
const homeLandAttack = {
  source: "battlefield",
  effect: "player",
  homeLand: "all",
  name: 'homeLandAttack',
  property: 'attackRate'
};

export default function useBattlefield() {
  const mainAttackerData = usePlayerStoreData( "mainAttacker" );
  const attackerAllyData = usePlayerStoreData( "attackerAlly" );
  const mainDefenderData = usePlayerStoreData( "mainDefender" );
  const firstDefenderAllyData = usePlayerStoreData( "firstDefenderAlly" );
  const secondDefenderAllyData = usePlayerStoreData( "secondDefenderAlly" );
  const playerFunctions = usePlayerStoreFunctions( );

  useBuffsStorage( "mainAttacker" );
  useBuffsStorage( "mainDefender" );
  useBuffsStorage( "attackerAlly" );
  useBuffsStorage( "firstDefenderAlly" );
  useBuffsStorage( "secondDefenderAlly" );
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
   const { 
    homeLand: attackerAllyHomeLand,
    apostate: attackerAllyApostate
   } = attackerAllyData;
   const { 
    homeLand: firstDefenderAllyHomeLand,
    apostate: firstDefenderAllyApostate
   } = firstDefenderAllyData;
   const { 
    homeLand: secondDefenderAllyHomeLand,
    apostate: secondDefenderAllyApostate
   } = secondDefenderAllyData;


  const { addBuff, removeBuff, setBattlefield } = playerFunctions;

  //HANDLE FUNCTION
  const onChange = ( e ) => {
    setBattlefield( e.target.value );
  };

  //USE EFFECTS
  //mainAttacker
  useEffect(() => {
    if( mainAttackerHomeLand === battlefield && !mainAttackerApostate && ( mainAttackerHomeLand !== mainDefenderHomeLand ))
      {
        addBuffValues( "mainAttacker", BUFF, addBuff );
      } 
      else 
      {
        removeBuffValues( "mainAttacker", BUFF, removeBuff );
      };
      if( mainAttackerHomeLand === battlefield && mainDefenderApostate )
      {
        addBuffValues( "mainAttacker", BUFF, addBuff );
      }
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
  }, [ battlefield, mainAttackerHomeLand, mainDefenderHomeLand, mainDefenderApostate, mainAttackerApostate, addBuff, removeBuff, troops ]);
  //mainDefender
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
  //attackerAlly
  useEffect(() => {
    if( attackerAllyHomeLand === battlefield && !attackerAllyApostate && ( attackerAllyHomeLand !== mainDefenderHomeLand ) )
      {
        addBuffValues( "attackerAlly", BUFF, addBuff );
      } 
      else 
      {
        removeBuffValues( "attackerAlly", BUFF, removeBuff );
      };
      if( attackerAllyHomeLand === battlefield && mainDefenderApostate )
      {
        addBuffValues( "attackerAlly", BUFF, addBuff );
      }
      for ( const unit in troops ) {
        if( troops[ unit ].homeLand  === battlefield )
        {
          addBuffValues( "attackerAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand, unit: [ unit ], value: 0.5 }], addBuff );
        }
        if( troops[ unit ].alienLand === battlefield )
        {
          addBuffValues( "attackerAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand,  unit: [ unit ], value: -0.5 }], addBuff );
        }
        if( troops[ unit ].alienLand !== battlefield )
        {
          removeBuffValues( "attackerAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand }], removeBuff );
        }
        if( troops[ unit ].homeLand  !== battlefield )
        {
          removeBuffValues( "attackerAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand }], removeBuff );
        }
      };
  }, [ battlefield, attackerAllyHomeLand, mainDefenderHomeLand,mainDefenderApostate, attackerAllyApostate, addBuff, removeBuff, troops ]);
  //firstDefenderAlly
  useEffect(() => {
    if( firstDefenderAllyHomeLand === battlefield && !firstDefenderAllyApostate )
      {
        addBuffValues( "firstDefenderAlly", BUFF, addBuff );
      } 
      else 
      {
        removeBuffValues( "firstDefenderAlly", BUFF, removeBuff );
      };
      for ( const unit in troops ) {
        if( troops[ unit ].homeLand  === battlefield )
        {
          addBuffValues( "firstDefenderAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand, unit: [ unit ], value: 0.5 }], addBuff );
        }
        if( troops[ unit ].alienLand === battlefield )
        {
          addBuffValues( "firstDefenderAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand,  unit: [ unit ], value: -0.5 }], addBuff );
        }
        if( troops[ unit ].alienLand !== battlefield )
        {
          removeBuffValues( "firstDefenderAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand }], removeBuff );
        }
        if( troops[ unit ].homeLand  !== battlefield )
        {
          removeBuffValues( "firstDefenderAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand }], removeBuff );
        }
      };
  }, [ battlefield, firstDefenderAllyHomeLand, firstDefenderAllyApostate, addBuff, removeBuff, troops ]);
  //secondDefenderAlly
  useEffect(() => {
    if( secondDefenderAllyHomeLand === battlefield && !secondDefenderAllyApostate )
      {
        addBuffValues( "secondDefenderAlly", BUFF, addBuff );
      } 
      else 
      {
        removeBuffValues( "secondDefenderAlly", BUFF, removeBuff );
      };
      for ( const unit in troops ) {
        if( troops[ unit ].homeLand  === battlefield )
        {
          addBuffValues( "secondDefenderAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand, unit: [ unit ], value: 0.5 }], addBuff );
        }
        if( troops[ unit ].alienLand === battlefield )
        {
          addBuffValues( "secondDefenderAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand,  unit: [ unit ], value: -0.5 }], addBuff );
        }
        if( troops[ unit ].alienLand !== battlefield )
        {
          removeBuffValues( "secondDefenderAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].alienLand }], removeBuff );
        }
        if( troops[ unit ].homeLand  !== battlefield )
        {
          removeBuffValues( "secondDefenderAlly", [{ ...homeLandAttack, id: unit + troops[ unit ].homeLand }], removeBuff );
        }
      };
  }, [ battlefield, secondDefenderAllyHomeLand, secondDefenderAllyApostate, addBuff, removeBuff, troops ]);

  return onChange;
};