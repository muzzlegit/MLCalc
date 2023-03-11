import { useState } from "react";

export default function useTypeFilter( artefact ) {
  const [ ancient, setAncient ] = useState( artefact.ancient ?? artefact.ancient ? ( artefact.ancient === "none" ? false : artefact.ancient )  : false );
  const [ perfect, setPerfect ] = useState( artefact.perfect ?? artefact.perfect ? artefact.perfect : false );

  const onTypeClick = ( value ) => {
    switch ( value ) {
      case "ancient":
        setAncient( true );      
        break;
      case "common":
        setAncient( false );      
        break;    
      default:
        break;
    }
  };

  const onPerfectClick = () => {
    setPerfect( prev => !prev );
  };

  return [ { ancient, perfect}, onTypeClick, onPerfectClick ];
};
