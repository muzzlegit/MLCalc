import { useEffect } from "react";
import useUpdateBuffsStorage from "./useUpdateBuffsStorage";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

const BUFF = {
  id: '2B0eBD4m',
  battle: true,
  name: 'homeLand',
  unit: [ 'porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
  property: 'defenseArr',
  childProperty: 'defense',
  value: 25 
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
    homeLand: mainAttackerHomeLand,
    apostate: mainAttackerApostate
   } = mainAttackerData;
   const { 
    homeLand: mainDefenderHomeLand,
    apostate: mainDefenderApostate
   } = mainDefenderData;
  const { setBattlefield, setUnitProperty } = playerFunctions;

  //HANDLE FUNCTION
  const onChange = ( e ) => {
    setBattlefield( e.target.value );
  };

  //USE EFFECTS
  useEffect(() => {
    if( mainAttackerHomeLand === battlefield && !mainAttackerApostate )
      {
        setUnitProperty( "mainAttacker", BUFF );
      } 
      else 
      {
        setUnitProperty( "mainAttacker", { ...BUFF, value: 0 } );
      }
  }, [ battlefield, mainAttackerHomeLand, mainAttackerApostate, setUnitProperty ]);

  useEffect(() => {
    if( mainDefenderHomeLand === battlefield && !mainDefenderApostate )
      {
        setUnitProperty( "mainDefender", BUFF );
      } 
      else 
      {
        setUnitProperty( "mainDefender", { ...BUFF, value: 0 } );
      }
  }, [ battlefield, mainDefenderHomeLand, mainDefenderApostate, setUnitProperty ]);

  return onChange;
};