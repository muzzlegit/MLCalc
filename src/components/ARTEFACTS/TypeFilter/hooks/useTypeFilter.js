import { useEffect, useState } from "react";

export default function useTypeFilter( currentArtefact ) {
  const [ ancient, setAncient ] = useState( currentArtefact.ancient === "none" ? false : currentArtefact.ancient );
  const [ perfect, setPerfect ] = useState( currentArtefact.perfect );

  const onTypeClick = ( e ) => {
    switch ( e.currentTarget.id ) {
      case "ancient":
        currentArtefact.ancient === "none" ? setAncient( false ) : setAncient( true );
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

  //USE EFFECT
  useEffect(() => {
    if( currentArtefact.ancient === "none" ) setAncient( false );
  }, [ currentArtefact ]);

  return [ { ancient, perfect }, onTypeClick, onPerfectClick ];
};
