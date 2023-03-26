import { useState } from 'react';

export default function useArtefactsLevelFilter() {
  const [ artLevel, setArtLevel ] = useState( 'all' );

  const onLevelClick = ( e ) => {
    setArtLevel( e.currentTarget.value );
  };
  
  return { artLevel, onLevelClick };
}