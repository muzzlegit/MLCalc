import { useEffect, useState } from "react";
//DATA
import artefactsData from '../../../../data/Artefacts.json';
//HELPERS
import { getArtefactByPlace, getArtefactById, getArtefactsArrayByPlace, getArtefactValue } from '../../../../helpers/helpers.js';
//COMPONENTS
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";
import useTypeFilter from "../TypeFilter/useTypeFilter";

export default function useSelectedArtefact( player, place ) {
  const playerData = usePlayerStoreData( player );
  const { artefacts } = playerData;
  const [ artefactsArrayByPlace, setArtefactsArrayByPlace ] = useState( getArtefactsArrayByPlace( artefactsData, place ) );
  const [ selectedArtefact, setSelectedArtefact ] = useState( getArtefactByPlace( artefacts, place ) );
  const [ filter, onTypeClick, onPerfectClick ] = useTypeFilter( selectedArtefact );
console.log(filter)
  const onArtefactClick = ( e ) => {
    if( e.currentTarget.id === selectedArtefact.id ) return;
    let artefact = getArtefactById( artefactsData, e.currentTarget.id );
    const currentArtefact = getArtefactByPlace( artefacts, artefact.place );
    artefact.value = [ ...getArtefactValue( e.currentTarget.id, true, true, artefactsData ) ];
    if( currentArtefact.runes ) artefact.runes = [ ...currentArtefact.runes ];
    setSelectedArtefact( artefact );
  }

  const removeSelectedArtefact = () => {
    setSelectedArtefact({});
  }
  //USE EFFECTS
  useEffect(() => {
    setSelectedArtefact( getArtefactByPlace( artefacts, place ) )
  }, [ artefacts, place ]);

  return { selectedArtefact, artefactsArrayByPlace, onArtefactClick, removeSelectedArtefact };
}