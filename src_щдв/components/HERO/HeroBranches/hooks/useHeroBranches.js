import { useState } from "react";

export default function useHeroBranches( toggleModal ) {
  const [ branch, setBranch ] = useState( '' );

  const openBranchesList = ( e ) => {
    setBranch( e.currentTarget.name );
    toggleModal();
  }

  return [ branch, openBranchesList ]
}