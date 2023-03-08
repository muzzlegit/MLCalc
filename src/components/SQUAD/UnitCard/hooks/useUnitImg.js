import { useState, useEffect } from "react";
//HOOKS
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData.js";
//DATA
import commonImgData from '../../../../data/CommonAssets.json';
//IMAGES
import UndeadСommonImg from '../../../../img/undead/UndeadCommon.png';
import DemonСommonImg from '../../../../img/demon/DemonCommon.png';
import DrowСommonImg from '../../../../img/drow/DrowCommon.png';
import HumanСommonImg from '../../../../img/human/HumanCommon.png';
import ElfСommonImg from '../../../../img/elf/ElfCommon.png';

import UndeadUnitsCard from '../../../../img/undead/UndeadCards.png';
import DemonUnitsCard from '../../../../img/demon/DemonCards.png';
import DrowUnitsCard from '../../../../img/drow/DrowCards.png';
import ElfUnitsCard from '../../../../img/elf/ElfCards.png';
import HumanUnitsCard from '../../../../img/human/HumanCards.png';

export default function useUnitImg( player, unit ) {
  const playerData = usePlayerStoreData( player );
  const [ unitImg, setUnitImg ] = useState( `url(${ UndeadUnitsCard }) ${ unit.position }` );
  const [ unitRaceFrame, setUnitRaceFrame ] = useState( `url(${ UndeadСommonImg }) ${ commonImgData.undead.levelFrame }` );
  
  //CONSTS
  const { race } = playerData;

  //USE EFFECTS
  useEffect(() => {
    switch ( race ) {
        case 'undead':
            setUnitImg( `url(${ UndeadUnitsCard }) ${ unit.position }` );
            setUnitRaceFrame( `url(${ UndeadСommonImg }) ${ commonImgData.undead.levelFrame }` );
        break;
        case 'demon':
            setUnitImg( `url(${ DemonUnitsCard }) ${ unit.position }` );
            setUnitRaceFrame( `url(${ DemonСommonImg }) ${ commonImgData.demon.levelFrame }` );                
        break;
        case 'drow':
            setUnitImg( `url(${ DrowUnitsCard }) ${ unit.position }` );
            setUnitRaceFrame( `url(${ DrowСommonImg }) ${ commonImgData.drow.levelFrame }` );                
        break;
        case 'human':
            setUnitImg( `url(${ HumanUnitsCard }) ${ unit.position }` );
            setUnitRaceFrame( `url(${ HumanСommonImg }) ${ commonImgData.human.levelFrame }` );
        break;
        case 'elf':
            setUnitImg( `url(${ ElfUnitsCard }) ${ unit.position }` );
            setUnitRaceFrame( `url(${ ElfСommonImg }) ${ commonImgData.elf.levelFrame }` );
        break;
        default:
        break;
    }
}, [ race, unit.position ]);

  return [ unitImg, unitRaceFrame ];
}