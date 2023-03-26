import { useState } from "react";

export default function useModalToggle ( defaultValue ) {
  const [ toggle, setToggle ] = useState( defaultValue );

  const toggleModal = () => {
    setToggle( prev => !prev)
  };

  return [ toggle, toggleModal ];
}