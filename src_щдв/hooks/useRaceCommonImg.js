import { useEffect, useState } from 'react';
//DATA
import commonImgData from '../data/CommonAssets.json';
//HOOKS
import usePlayerStoreData from './usePlayerStoreData';
//IMAGES
import UndeadСommonImg from '../img/undead/UndeadCommon.png';
import DemonСommonImg from '../img/demon/DemonCommon.png';
import DrowСommonImg from '../img/drow/DrowCommon.png';
import HumanСommonImg from '../img/human/HumanCommon.png';
import ElfСommonImg from '../img/elf/ElfCommon.png';

export default function useRaceCommonImg( player, index ) {
  const playerData = usePlayerStoreData( player );
  const [ img, setImg ] = useState( `url(${ UndeadСommonImg }) ${ commonImgData[ index ] }` );
  const { race } = playerData;

  //USE EFFECT
  useEffect(() => {
    switch ( race ) {
      case 'undead':
        setImg( `url(${ UndeadСommonImg }) ${ commonImgData.undead[ index ] }` );
      break;
      case 'demon':
        setImg( `url(${ DemonСommonImg }) ${ commonImgData.demon[ index ] }` );                
      break;
      case 'drow':
        setImg( `url(${ DrowСommonImg }) ${ commonImgData.drow[ index ] }` );                
      break;
      case 'human':
        setImg( `url(${ HumanСommonImg }) ${ commonImgData.human[ index ] }` );
      break;
      case 'elf':
        setImg( `url(${ ElfСommonImg }) ${ commonImgData.elf[ index ] }` );
      break;
      default:
      break;
  }
  }, [ race, index ]);

  return img;
}