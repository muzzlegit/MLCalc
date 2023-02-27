import { useState } from 'react';
//DATA
import artefatctsData from '../data/Artefacts.json';
//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
import usePlayerStoreFunctions from './usePlayerStoreFunctions';
import useAddUnitProperty from './useAddUnitProperty';
import useRemoveUnitProperty from './useRemoveUnitProperty';
//HELPERS
import isArtefact from '../helpers/isArtefact';

export default function useCurrentArtefact( player, place, onTypeClick ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();
  const addUnitProperty = useAddUnitProperty();
  const removeUnitProperty = useRemoveUnitProperty();

  const { artefacts } = playerData;
  const { addArtefact, removeArtefact } = playerFunctions;
  const [ currentArtefact, setCurrentArtefact ] = useState( isArtefact( place, artefacts ) );

  const getCurrentArtefact = ( id ) => {
    const [ newArtefact ] = artefatctsData.filter( artefact => artefact.id === id );
    if( newArtefact.ancient === "none" ) onTypeClick( "none", newArtefact );
    setCurrentArtefact( newArtefact );
  };
  
  const addCurrentArtefact = ( filter ) => {
    if( Object.keys( currentArtefact ).length === 0 ) return;
    const [ prevArtefact ] = artefacts.filter( artefact => artefact.place === currentArtefact.place );
    console.log(prevArtefact)
    if( prevArtefact )
    {
      prevArtefact.value.forEach( value => {
        removeUnitProperty( player, value );
      }); 
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
    artefact.value.forEach( value => {
      addUnitProperty( player, value );
    });  
    setCurrentArtefact( artefact );
    addArtefact( artefact, player );
  };
  const removeCurrentArtefact = () => {
    const [ newArtefact ] = artefacts.filter( artefact => artefact.place === currentArtefact.place );
    setCurrentArtefact( {} );
    if( newArtefact )
    {
      newArtefact.value.forEach( value => {
        removeUnitProperty( player, value );
      });
      removeArtefact( newArtefact, player );
    }
  };
  return [ currentArtefact, getCurrentArtefact, addCurrentArtefact, removeCurrentArtefact ];
};
