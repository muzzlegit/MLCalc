import { useEffect, useState } from 'react';
//DATA
import artefatctsData from '../data/Artefacts.json';
//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
//HELPERS
import isArtefact from '../helpers/isArtefact';

export default function useCurrentArtefact( player, place, filter, onTypeClick ) {
  const playerData = usePlayerStoreData( player );
  const { artefacts } = playerData;
  const [ currentArtefact, setCurrentArtefact ] = useState( isArtefact( place, artefacts ) );
 
  const getCurrentArtefact = ( id, filter ) => {
    const [ newArtefact ] = artefatctsData.filter( artefatct => artefatct.id === id );
    const newValue = ( !filter.ancient || newArtefact.ancient === "none" ? newArtefact.value.common : newArtefact.value.ancient );
    if( filter.perfect ) newValue.push( ...newArtefact.value.perfect );
    const artefact = { 
      ...newArtefact,
      perfect: filter.perfect,
      ancient: newArtefact.ancient === "none" ? "none" : filter.ancient,
      value: newValue
    };
    if( artefact.ancient === "none" ) onTypeClick( "none", artefact );
    setCurrentArtefact( artefact );
    
  };

  return [ currentArtefact, getCurrentArtefact ];
};
