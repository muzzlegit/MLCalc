//HOOKS
import { useEffect, useState } from "react";
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//DATA
import artefactsData from '../data/Artefacts.json';
//HELPERS
import { addBuffValues, removeBuffValues } from '../helpers/helpers.js'

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
      if( artefacts.reduce(( acc, item ) => { if( item.set === artefact.set ) acc += 1; return acc; }, 0 ) >= 9 )
      {
        const [ currentKit ] = artefactsData.filter( item => item.setName === artefact.set );
        setKit( currentKit );
        addBuffValues( player, currentKit.value, addBuff );
      }
      if( kit.setName && artefacts.reduce(( acc, item ) => { if( item.set === kit.setName ) acc += 1; return acc; }, 0 ) < 9  )
      {
          removeBuffValues( player, kit.value, removeBuff );
          setKit({});
      }
    })
  }, [ artefacts, addBuff, removeBuff, player, kit ]);

  return kit;
}