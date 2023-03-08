//HOOKS
import { useEffect } from "react";
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from "../../../../hooks/usePlayerStoreFunctions";
//HELPERS
import { getRaceLand, getFraction } from '../../../../helpers/helpers.js';

//CONST
const RACE_DEBUFF = {
  id: 'IN0lfM1XHUiyNJLm_hRzKg',
  battle: true,
  homeLand: "all",
  name: 'race',
  unit: [ 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
  property: 'attackRate',
  value: -0.5
};
const FRACTION_DEBUFF = {
  id: 'IO7E12jaa-Eq1pBjTYcoIPw',
  battle: true,
  homeLand: "all",
  name: 'fraction',
  unit: [ 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
  property: 'attackRate',
  value: -0.25
};

export default function useRace( player ) {
  const mainAttackerData = usePlayerStoreData( "mainAttacker" );
  const mainDefenderData = usePlayerStoreData( "mainDefender" );
  const playerFunctions = usePlayerStoreFunctions();

  //CONSTS
  const {
    race: mainAttackerRace,
    fraction: mainAttackerFraction
   } = mainAttackerData;
   const { 
    race: mainDefenderRace,
    apostate: mainDefenderApostate,
    fraction: mainDefenderFraction
   } = mainDefenderData;
  const { setRace, setHomeLand, setFraction, addBuff, removeBuff } = playerFunctions;

   //HaNDLE FUNCTIONS
  const onChange = ( e ) => {
    setRace( player, e.currentTarget.value );
    setHomeLand( player, getRaceLand( e.currentTarget.value ) );
    setFraction( player, getFraction( e.currentTarget.value ) );
  };
  //USE EFFECT
  useEffect(() => {
    if( mainAttackerFraction === mainDefenderFraction && !mainDefenderApostate &&  mainAttackerRace !== mainDefenderRace )
    {
      addBuff( "mainAttacker", FRACTION_DEBUFF );
    };
    if( mainAttackerFraction !== mainDefenderFraction || mainDefenderApostate )
    {
      removeBuff( "mainAttacker", FRACTION_DEBUFF );
    };
    if( mainAttackerRace === mainDefenderRace && !mainDefenderApostate )
    {
      addBuff( "mainAttacker", RACE_DEBUFF );
    };
    if( mainAttackerRace !== mainDefenderRace || mainDefenderApostate )
    {
      removeBuff( "mainAttacker", RACE_DEBUFF );
    };
  }, [ mainAttackerFraction, mainDefenderFraction, mainDefenderApostate, addBuff, removeBuff, mainAttackerRace, mainDefenderRace  ]);

  return onChange;
};