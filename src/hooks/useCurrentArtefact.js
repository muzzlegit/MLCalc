import { useEffect, useState } from 'react';
//DATA
import artefatctsData from '../data/Artefacts.json';
//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
//HELPERS
import isArtefact from '../helpers/isArtefact';

export default function useCurrentArtefact( player, place, filter ) {
  const playerData = usePlayerStoreData( player );
  const { artefacts } = playerData;
  const [ currentArtefact, setCurrentArtefact ] = useState( isArtefact( place, artefacts ) );

  const getCurrentArtefact = ( id, filter ) => {
    const [ newArtefact ] = artefatctsData.filter( artefatct => artefatct.id === id);
    const newValue = ( !filter.ancient || filter.ancient === 'none' ? newArtefact.value.common : newArtefact.value.ancient );
    const artefact = { 
      ...newArtefact,
      perfect: filter.perfect,
      ancient: filter.ancient,
      value: newValue
    };
    setCurrentArtefact( artefact );
  };

  //USE EFFECT
  useEffect( () => {
    setCurrentArtefact( prev => ({ ...prev, ancient: filter.ancient , perfect: filter.perfect}) );
   }, [ filter.ancient, filter.perfect ]);

  return [ currentArtefact, getCurrentArtefact ];
};
