//HOOKS
import { useState, useEffect } from "react";
import usePlayerStoreData from "../../../hooks/usePlayerStoreData";
//DATA
import commonImgData from '../../../data/CommonAssets.json';
//IMAGES
import heroesImg from '../../../img/common/Heroes.webp';
import UndeadСommonImg from '../../../img/undead/UndeadCommon.png';
import DemonСommonImg from '../../../img/demon/DemonCommon.png';
import DrowСommonImg from '../../../img/drow/DrowCommon.png';
import HumanСommonImg from '../../../img/human/HumanCommon.png';
import ElfСommonImg from '../../../img/elf/ElfCommon.png';

export default function useHeroImg( player ) {
  const playerData = usePlayerStoreData( player );
  const [ heroImg, setHeroImg ] = useState( `url(${ heroesImg }) ${ 0 }` );
  const [ heroBackground, setHeroBackground ] = useState( `url(${ UndeadСommonImg }) ${ commonImgData.undead.heroBackground }` );
  
  //CONSTS
  const { race, hero } = playerData;

  //USE EFFECTS
  useEffect(() => {
    setHeroImg( `url(${ heroesImg }) ${ hero.icon }` );
    switch ( race ) {
        case 'undead':
          setHeroBackground( `url(${ UndeadСommonImg }) ${ commonImgData.undead.heroBackground }` );
        break;
        case 'demon':
          setHeroBackground( `url(${ DemonСommonImg }) ${ commonImgData.demon.heroBackground }` );                
        break;
        case 'drow':
          setHeroBackground( `url(${ DrowСommonImg }) ${ commonImgData.drow.heroBackground }` );                
        break;
        case 'human':
          setHeroBackground( `url(${ HumanСommonImg }) ${ commonImgData.human.heroBackground }` );
        break;
        case 'elf':
          setHeroBackground( `url(${ ElfСommonImg }) ${ commonImgData.elf.heroBackground }` );
        break;
        default:
        break;
    }
}, [ race, hero.icon ]);

  return [ heroImg, heroBackground ];
}