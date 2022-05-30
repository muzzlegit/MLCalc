import { useState, useEffect } from 'react';
import { UnitImg, UnitImgBox, ArticleBox, ArticleInput, UnitHealth, UnitDefense, UnitAttack, UnitLevel, UnitFrame  } from './UnitCard.styled';

import UndeadUnitsCard from '../../img/undead/UndeadCards.png';
import DemonUnitsCard from '../../img/demon/DemonCards.png';
import DrowUnitsCard from '../../img/drow/DrowCards.png';
import ElfUnitsCard from '../../img/elf/ElfCards.png';
import HumanUnitsCard from '../../img/human/HumanCards.png';

import commonAssetsImg from '../../img/common/CommonAssets.png';
import commonDemonImg from '../../img/demon/DemonCommon.png';
import commonUndeadImg from '../../img/undead/UndeadCommon.png';
import commonDrowImg from '../../img/drow/DrowCommon.png';
import commonElfImg from '../../img/elf/ElfCommon.png';
import commonHumanImg from '../../img/human/HumanCommon.png';

import units from '../../data/Units.json';
import commonAssets from '../../data/CommonAssets.json';


export default function UnitCard ({trooper, handleSquad, race}) {
    const [level, setLevel] = useState(1);
    const [troops, setTroops] = useState(trooper);
    const [amount, setAmount] = useState(0);
    let troopsRace = UndeadUnitsCard;

    switch (race) {
        case 'undead':
            troopsRace = UndeadUnitsCard;
            break;
        case 'demon':
            troopsRace = DemonUnitsCard;
            break;
        case 'drow':
            troopsRace = DrowUnitsCard;
            break;
        case 'human':
            troopsRace = HumanUnitsCard;
            break;
        case 'elf':
            troopsRace = ElfUnitsCard;
            break;  
        default:
            break;
    }

    const onClick = (e) => {
        if(level === 4) {
            setLevel(1);
        } else {
           setLevel(prev => prev += 1);
        }
        setTroops({...units[race][trooper.unit][`level${level}`], amount: amount});
     
    }
    const handleAmount = (e) => {
        if(e.target.value === ""){
            e.target.value = 0;
        }
        setAmount(Number.parseInt(e.target.value.replaceAll(/\D/g, ''), 0));
        
    }
    

    useEffect(() => {
        handleSquad(troops);
    }, [troops, handleSquad])

    useEffect(() => {
        setTroops({...units[race][trooper.unit][`level${level}`], amount: amount});
        handleSquad(troops);
    }, [handleSquad, troops, amount, level, race,trooper.unit])

    return (
        <ArticleBox>
            <UnitImgBox
                background = { troops.level === 4 ? `url(${commonUndeadImg}) ${commonAssets.levelFramePosition}` : `url(${commonAssetsImg}) ${commonAssets.unitFramePosition}`}
            >
                <UnitImg 
                    background = { `url(${troopsRace}) ${troops.position}` }
                    filter = { amount === 0 || amount === '' ? `grayscale(100%) brightness(70%)` : 'none' }
                    onClick={onClick}
                >
                </UnitImg>

            </UnitImgBox>
            <ArticleInput
                    type="text"
                    
                    autoComplete="off"
                    autoFocus
                    placeholder="0"
                    value={amount}
                    onChange={handleAmount}                    
            />
            <div>
                <UnitLevel
                    background = { `url(${commonAssetsImg}) ${units[race][trooper.unit].unitIcon}` } 
                >{troops.level}</UnitLevel>
                <UnitAttack
                    background = { `url(${commonAssetsImg}) ${commonAssets.attackIcon}` }                 
                >{troops.attackMax}</UnitAttack>
                <UnitDefense
                    background = { `url(${commonAssetsImg}) ${commonAssets.defenseIcon}` }                   
                >{troops.defense}</UnitDefense>
                <UnitHealth
                    background = { `url(${commonAssetsImg}) ${commonAssets.healthIcon}` }               
                >{troops.health}</UnitHealth>
            </div>
        </ArticleBox>
    )
}