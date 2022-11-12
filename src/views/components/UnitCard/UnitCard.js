import { useState, useEffect } from 'react';
import { useStore } from '../../../data/store/useStore';
import { UnitCardBox, UnitFrame, UnitImg, UnitDefense, UnitAttack, UnitLevel} from './UnitCard.styled';
//STORE

//IMAGES
import frames from '../../../img/common/Frames.png';
import UndeadUnitsCard from '../../../img/undead/UndeadCards.png';
import DemonUnitsCard from '../../../img/demon/DemonCards.png';
import DrowUnitsCard from '../../../img/drow/DrowCards.png';
import ElfUnitsCard from '../../../img/elf/ElfCards.png';
import HumanUnitsCard from '../../../img/human/HumanCards.png';

const g = 1

export default function UnitCard ({player, unit}) {

    const [unitImg, setUnitImg] = useState(UndeadUnitsCard);

    const { 
        race,
        
    } = player;

    useEffect(() => {
        switch (race) {
            case 'undead':
                
            break;
            case 'undead':
                    
            break;
            case 'undead':
                    
            break;
            case 'undead':
                    
            break;       
            default:
            break;
        }
    }, []);

    return (
        <UnitCardBox>
            <UnitFrame
                background={
                    g === 1 ?
                    `url(${frames}) -1px -117px`
                    :`url(${frames}) -102px -101px
                    , url(${frames}) -1px -117px`
                }
                height={
                    g === 1 ?
                    `92px`
                    :`100%`
                }                
            >
                <UnitImg
                    background={
                        `url(${unitImg}) -1px -1px`
                    }
                >
                </UnitImg>
            </UnitFrame>
        </UnitCardBox>
    )
}