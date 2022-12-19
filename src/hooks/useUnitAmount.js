import { useState } from "react";

export default function useUnitAmount( defaultValue ) {
  const [ value, setValue ] = useState( defaultValue );

  const onChange = ( e ) => {
    isNaN( Number( e.currentTarget.value )) || value < 0 ?
      setValue( 0 ) : setValue( Number( e.currentTarget.value ));
  };
 
  return [ value, onChange ];
};