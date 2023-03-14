import { useEffect, useState } from "react";
//HOOKS
import usePlayerContext from "../../../../hooks/usePlayerContext";
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";
//DATA
import artefactsData from '../../../../data/Artefacts.json';
//HELPERS
import { getArtefactByPlace, getArtefactById, getArtefactsArrayByPlace, getArtefactValue } from '../../../../helpers/helpers.js';

export default function useArtefactSelector( place, artLevel ) {
  const player = usePlayerContext();
  const playerData = usePlayerStoreData( player );
  const { artefacts } = playerData;
  const [ selectedArtefact, setSelectedArtefact ] = useState( 
    getArtefactByPlace( artefacts, place ).id ?
    getArtefactByPlace( artefacts, place ) :
    { ancient: false, perfect: false }
  );
  const [ artefactsArrayByPlace, setArtefactsArrayByPlace ] = useState( getArtefactsArrayByPlace( artefactsData, place ).filter( item => item.id !== selectedArtefact.id ) );

  const onArtefactClick = ( e ) => {
    if( e.currentTarget.id === selectedArtefact.id ) return;
    let artefact = getArtefactById( artefactsData, e.currentTarget.id );
    const currentArtefact = getArtefactByPlace( artefacts, artefact.place );
    if( currentArtefact.runes ) artefact.runes = [ ...currentArtefact.runes ];
    setSelectedArtefact( artefact );
  };
  const removeSelectedArtefact = () => {
    setSelectedArtefact({ ancient: false, perfect: false });
  };
  const addArtefact = ( artefact, filter, setArtefact ) => {
    const newArtefact = { 
      ...artefact,
      ancient: artefact.ancient === "none" ? false : filter.ancient,
      perfect: filter.perfect,
      value: [ ...getArtefactValue( artefact.id, artefact.ancient === "none" ? false : filter.ancient, filter.perfect, artefactsData ) ]
    };
    setArtefact( newArtefact );
  };

// //  USE EFFECTS
  useEffect(() => {
    setArtefactsArrayByPlace( 
      getArtefactsArrayByPlace( artefactsData, place )
      .filter( item => 
        item.id !== selectedArtefact.id
        && artLevel === "all" ? true :  item.level === Number( artLevel )
      )
    );
  }, [ selectedArtefact, place, artLevel ]);

  return { selectedArtefact, artefactsArrayByPlace, setSelectedArtefact, onArtefactClick, removeSelectedArtefact, addArtefact };
}