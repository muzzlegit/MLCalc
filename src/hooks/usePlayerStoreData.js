//STORE
import { useEffect, useState } from 'react';
import useMainAttaker from '../data/store/useMainAttacker';
import useMainDefender from '../data/store/useMainDefender';

export default function usePlayerStoreData( player ) {
  const mainAttacker =  useMainAttaker();
  const mainDefender =  useMainDefender();

  const [ playerData, setPlayerData ] = useState( player === 'mainAttacker' ? mainAttacker.player : mainDefender.player );

 
  //USE EFFECTS
  useEffect(() => {
    switch ( player ) {
      case 'mainAttacker':
        setPlayerData( mainAttacker.player );
        break;
      case 'mainDefender':
        setPlayerData( mainDefender.player );
      break;  
      default:
        break;
    }
  }, [ player, mainAttacker, mainDefender ]);

  return playerData;
}