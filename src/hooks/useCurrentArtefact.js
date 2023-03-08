import { useState } from 'react';
//DATA
import artefatctsData from '../data/Artefacts.json';
//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
import usePlayerStoreFunctions from './usePlayerStoreFunctions';
//HELPERS
import isArtefact from '../helpers/isArtefact';
import { addBuffValues, removeBuffValues } from '../helpers/helpers.js';

export default function useCurrentArtefact( player, place, onTypeClick ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();

  const { artefacts } = playerData;
  const { addArtefact, removeArtefact, addBuff, removeBuff  } = playerFunctions;
  const [ currentArtefact, setCurrentArtefact ] = useState( isArtefact( place, artefacts ) );

  const getCurrentArtefact = ( id ) => {
    const [ newArtefact ] = artefatctsData.filter( artefact => artefact.id === id );
    if( newArtefact.ancient === "none" ) onTypeClick( "none", newArtefact );
    setCurrentArtefact( newArtefact );
  };
  
  const addCurrentArtefact = ( filter ) => {
    if( Object.keys( currentArtefact ).length === 0 ) return;
    const [ prevArtefact ] = artefacts.filter( artefact => artefact.place === currentArtefact.place );
    if( prevArtefact )
    {
      removeBuffValues( player, prevArtefact.value, removeBuff );
    }
    const [ newArtefact ] = artefatctsData.filter( artefact => artefact.id === currentArtefact.id );
    let newValue = ( !filter.ancient || newArtefact.ancient === "none" ? newArtefact.value.common : newArtefact.value.ancient );
    if( filter.perfect ) newValue = [ ...newValue,  ...newArtefact.value.perfect ];
    const artefact = { 
      ...newArtefact,
      perfect: filter.perfect,
      ancient: newArtefact.ancient === "none" ? "none" : filter.ancient,
      value: newValue
    };
    if( artefact.ancient === "none" ) onTypeClick( "none", artefact );
    addBuffValues( player, artefact.value, addBuff );
    setCurrentArtefact( artefact );
    addArtefact( artefact, player );
  };

  const removeCurrentArtefact = () => {
    const [ newArtefact ] = artefacts.filter( artefact => artefact.place === currentArtefact.place );
    setCurrentArtefact( {} );
    if( newArtefact )
    {
      removeBuffValues( player, newArtefact.value, removeBuff );
      removeArtefact( newArtefact, player );
    }
  };
  
  return [ currentArtefact, getCurrentArtefact, addCurrentArtefact, removeCurrentArtefact, setCurrentArtefact ];
};
