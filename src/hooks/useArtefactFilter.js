import { useEffect, useState } from "react";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
//HELPERS
import isArtefact from "../helpers/isArtefact";

export default function useArtefactFilter( player, place ) {
  const playerData = usePlayerStoreData( player );
  const { artefacts } = playerData;
  const currentArtefact  = isArtefact( place, artefacts );

  const [ artLevel, setArtLevel ] = useState( 'all' );
  const [ ancientArt, setAncientArt ] = useState( currentArtefact ? currentArtefact.ancient : false );
  const [ perfectArt, setPerfectArt ] = useState( currentArtefact ? currentArtefact.perfect : false );

  //HANDLE FUNCTIONS
  const onLevelClick = ( e ) => {
    setArtLevel( e.currentTarget.value );
  }
  const onTypeClick = ( value, artefact ) => {
    if( value === "common" && ancientArt && artefact.ancient !== "none"   ) { setAncientArt( false ) };
    if( value === "ancient" && !ancientArt && artefact.ancient !== "none" ) {  setAncientArt( true ) };
    if( value === "none" && artefact.ancient === "none" )setAncientArt( false );
  }

  const onPerfectClick = () => {
    setPerfectArt( prev => !prev );
  }

  return [ { level: artLevel, perfect: perfectArt, ancient: ancientArt } , onLevelClick, onTypeClick, onPerfectClick ];
};