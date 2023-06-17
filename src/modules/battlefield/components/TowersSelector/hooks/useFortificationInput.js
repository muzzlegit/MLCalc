import { useState } from "react";

export default function useFortificationInput ( defaultValue ) {
  const [ value, setValue ] = useState( defaultValue );

  const onChange = ( e ) => {
    if( e.target.value === "" )
    {
        e.target.value = 1;
    }
    isNaN( Number( e.currentTarget.value )) || value < 0 ?
      setValue( 1 ) : setValue( Number( e.currentTarget.value ));
  };
 
  return [ value, onChange ];
}