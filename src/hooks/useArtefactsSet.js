//HOOKS
import { useEffect, useState } from "react";
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//DATA
import artefactsData from '../data/Artefacts.json';
//HELPERS
import getEnemy from "../helpers/getEnemy";


export default function useArtefactsSet( player ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions( );

  const [ kit, setKit ] = useState("");
  //CONSTS
  const {
    artefacts
  } = playerData;
  const {
    addBuff,
    removeBuff
  } = playerFunctions;
  //USE EFFECTS
  useEffect(() => {
    artefacts.forEach( artefact => {
      if( artefacts.reduce(( acc, item ) => {
        if( item.set === artefact.set ) acc += 1;
        return acc;
      }, 0) >= 9 )
      {
        const [ currentKit ] = artefactsData.filter( item => item.setName === artefact.set );
        setKit( currentKit );
        currentKit.value.forEach( value => {
          if( value.effect === "player" || value.effect === "player_ally" ) addBuff( player, value );
          if( value.effect === "player_ally" ) addBuff( player, value );
          if( value.effect === "enemy" )
          {
            getEnemy( player ).forEach( player => addBuff( player, value ) );
          }
        });
        return;
      }
        else
      {
        const [ currentKit ] = artefactsData.filter( item => item.setName === artefact.set );
        if( currentKit )
        {
          currentKit.value.forEach( value => {
            if( value.effect === "player" || value.effect === "player_ally" ) removeBuff( player, value );
            if( value.effect === "player_ally" ) removeBuff( player, value );
            if( value.effect === "enemy" )
            {
              getEnemy( player ).forEach( player =>{ removeBuff( player, value )} );
            }
          });
          setKit({});
        }
      }
    });

  }, [ artefacts, setKit, addBuff, removeBuff, player ]);

  return kit;
}