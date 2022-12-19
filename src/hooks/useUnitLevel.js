import { useState } from "react";

export default function useUnitLevel ( defaultValue ) {
  const [ level, setLevel ] = useState( defaultValue );

  const onClick = ( ) => {
     level === 4 ? setLevel( 1 ) : setLevel( prev => prev + 1 );
  };
  
  return [ level, onClick ];
};