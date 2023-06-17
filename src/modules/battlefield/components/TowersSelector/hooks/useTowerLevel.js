import { useState } from "react";

export default function useTowerLevel ( defaultValue ) {
  const [ level, setLevel ] = useState( defaultValue );

  const onClick = ( e ) => {
    setLevel( Number( e.currentTarget.id ));
  };
  
  return [ level, onClick ];
};
