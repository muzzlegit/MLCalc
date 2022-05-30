import { useState, useEffect } from 'react';
import { UnitImg, UnitImgBox, ArticleBox, ArticleInput, UnitHealth, UnitDefense, UnitAttack, UnitLevel, UnitFrame  } from './index.styled';

import UndeadUnitsCard from '../../../img/undead/UndeadCards.png';
import DemonUnitsCard from '../../../img/demon/DemonCards.png';
import DrowUnitsCard from '../../../img/drow/DrowCards.png';
import ElfUnitsCard from '../../../img/elf/ElfCards.png';
import HumanUnitsCard from '../../../img/human/HumanCards.png';

import commonAssetsImg from '../../../img/common/CommonAssets.png';
import commonDemonImg from '../../../img/demon/DemonCommon.png';
import commonUndeadImg from '../../../img/undead/UndeadCommon.png';
import commonDrowImg from '../../../img/drow/DrowCommon.png';
import commonElfImg from '../../../img/elf/ElfCommon.png';
import commonHumanImg from '../../../img/human/HumanCommon.png';

import units from '../../../data/Units.json';
import commonAssets from '../../../data/CommonAssets.json';


export default function UnitCard ({trooper, setUnit, race, attackRate}) {
    const [level, setLevel] = useState(1);
    const [amount, setAmount] = useState(0);
    const [troopsRaceImg, setTroopsRaceImg] = useState(UndeadUnitsCard);
    // console.log('v kartu', trooper);
    const onClick = (e) => {
        if(level === 4) {
            setLevel(1);
        } else {
           setLevel(prev => prev += 1);
        }
        setUnit({...units[race][trooper.unit][`level${level}`], amount: amount, partOfTroops:0, totalHealth:0, totalAttackMax:0, totalAttackMin:0});
    }
    const handleAmount = (e) => {
        if(e.target.value === ""){
            e.target.value = 0;
        }
        setAmount(Number.parseInt(e.target.value.replaceAll(/\D/g, ''), 0));
    }

    useEffect(() => {
        switch (race) {
            case 'undead':
                setTroopsRaceImg(UndeadUnitsCard);
                break;
            case 'demon':
                setTroopsRaceImg(DemonUnitsCard);
                break;
            case 'drow':
                setTroopsRaceImg(DrowUnitsCard);
                break;
            case 'human':
                setTroopsRaceImg(HumanUnitsCard);
                break;
            case 'elf':
                setTroopsRaceImg(ElfUnitsCard);
                break;  
            default:
                break;
        }
    }, [race])

    useEffect(() => {
        setUnit({...units[race][trooper.unit][`level${level}`], amount: amount, partOfTroops:0, totalHealth: 0, totalAttackMax:0, totalAttackMin:0 });   
    }, [amount, level, race,trooper.unit, setUnit])

    return (
        <ArticleBox>
            <UnitImgBox
                background = { trooper.level === 4 ? `url(${commonUndeadImg}) ${commonAssets.levelFramePosition}` : `url(${commonAssetsImg}) ${commonAssets.unitFramePosition}`}
            >
                <UnitImg 
                    background = { `url(${troopsRaceImg}) ${trooper.position}` }
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
                >{trooper.level}</UnitLevel>
                <UnitAttack
                    background = { `url(${commonAssetsImg}) ${commonAssets.attackIcon}` }                 
                >{trooper[`attack${attackRate}`]}</UnitAttack>
                <UnitDefense
                    background = { `url(${commonAssetsImg}) ${commonAssets.defenseIcon}` }                   
                >{trooper.defense}</UnitDefense>
                <UnitHealth
                    background = { `url(${commonAssetsImg}) ${commonAssets.healthIcon}` }               
                >{trooper.health}</UnitHealth>
            </div>
        </ArticleBox>
    )
}