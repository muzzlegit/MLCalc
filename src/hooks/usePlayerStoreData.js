//STORE
import { useEffect, useState } from 'react';
import useMainAttaker from '../data/store/useMainAttacker';
import useMainDefender from '../data/store/useMainDefender';

export default function usePlayerStoreData(role) {
  const mainAttacker =  useMainAttaker();
  const mainDefender =  useMainDefender();

  const [playerData, setPlayerData] = useState(mainAttacker.player);
  const [playerFunctions, setPlayerFunctions] = useState(mainAttacker.functions);



  //USE EFFECTS
  useEffect(() => {
    switch (role) {
      case 'mainAttacker':
        setPlayerData(mainAttacker.player);
        setPlayerFunctions(mainAttacker.functions);
        break;
      case 'mainDefender':
        setPlayerData(mainDefender.player);
        setPlayerFunctions(mainDefender.functions);
      break;  
      default:
        break;
    }
  }, [role]);

  return [playerData, playerFunctions];
}