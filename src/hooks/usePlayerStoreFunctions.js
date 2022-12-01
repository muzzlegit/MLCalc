//STORE
import { useEffect, useState } from 'react';
import useMainAttaker from '../data/store/useMainAttacker';
import useMainDefender from '../data/store/useMainDefender';

export default function usePlayerStoreFunctions( player ) {
  const mainAttacker =  useMainAttaker();
  const mainDefender =  useMainDefender();

  const [ playerFunctions, setPlayerFunctions ] = useState( mainDefender.functions );



  //USE EFFECTS
  useEffect(() => {
    switch ( player ) {
      case 'mainAttacker':
        setPlayerFunctions( mainAttacker.functions );
        break;
      case 'mainDefender':
        setPlayerFunctions( mainDefender.functions );
      break;  
      default:
        break;
    }
  }, [ player, mainAttacker, mainDefender ]);

  return  playerFunctions;
}