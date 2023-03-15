import { useState, useEffect } from "react";
//HOOKS
import usePlayerStoreData from "../../../hooks/usePlayerStoreData.js";
import usePlayerStoreFunctions from "../../../hooks/usePlayerStoreFunctions.js";
//HELPERS
import { addBuffValues, removeBuffValues } from '../../../helpers/helpers.js';

//COSTS
const ARTS = [
  { place: 'head', top: '80px', left: '110px', art: false },
  { place: 'armor', top: '180px', left: '110px', art: false },
  { place: 'belt', top: '280px', left: '110px', art: false },
  { place: 'pants', top: '380px', left: '110px', art: false },
  { place: 'boots', top: '480px', left: '110px', art: false },
  { place: 'neck', top: '130px', left: '20px', art: false },
  { place: 'bracers', top: '230px', left: '20px', art: false },
  { place: 'ring', top: '330px', left: '20px', art: false },
  { place: 'rightHand', top: '430px', left: '20px', art: false },
  { place: 'bag', top: '200px', left: '200px', art: false },
  { place: 'back', top: '300px', left: '200px', art: false },
  { place: 'leftHand', top: '400px', left: '200px', art: false },
]

export default function useArtefacts( player ) {
  const [ dallArts, setDallArts ] = useState( ARTS );
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();
  const { artefacts: heroArtefacts } = playerData;
  const { addArtefact, removeArtefact, addBuff, removeBuff } = playerFunctions;

  const setArtefact = ( artefact ) => {
    if( !artefact.place ) return;
    const [ prevArtefact ] = heroArtefacts.filter( item => item.place === artefact.place );
    if( prevArtefact ) 
    {
      removeArtefact( player, prevArtefact );
      removeBuffValues( player, prevArtefact.value, removeBuff );
      removeBuffValues( player, prevArtefact.runes, removeBuff );
    }
    addArtefact( player, artefact );
    addBuffValues( player, artefact.value, addBuff );
    addBuffValues( player, artefact.runes, addBuff );
  };

  const deleteArtefact = ( artefact ) => {
    if( !artefact.id ) return;
    const [ newArtefact ] = heroArtefacts.filter( item => item.id === artefact.id );
    if( newArtefact )
    {
      removeArtefact( player, newArtefact );
      removeBuffValues( player, newArtefact.value, removeBuff );
      removeBuffValues( player, newArtefact.runes, removeBuff );
    };
  };

  //USE EFFECTS
  useEffect(() => {
    const artsArr = ARTS.map( art => {
      return  heroArtefacts.find( item =>  item.place === art.place ) ? 
        { ...art, art: heroArtefacts.find( item =>  item.place === art.place )} : art 
      });
      setDallArts( artsArr );
  }, [ heroArtefacts ]);

  return { dallArts, heroArtefacts, setArtefact, deleteArtefact };
}


