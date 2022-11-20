import { useState, useEffect } from 'react';

//DATA
import UNITS from '../../data/Units.json';
import commonAssets from '../../data/CommonAssets.json';
//IMAGES
import commonImg from '../../img/common/CommonAssets.png';

import UndeadСommonImg from '../../img/undead/UndeadCommon.png';
import DemonСommonImg from '../../img/demon/DemonCommon.png';
import DrowСommonImg from '../../img/drow/DrowCommon.png';
import HumanСommonImg from '../../img/human/HumanCommon.png';
import ElfСommonImg from '../../img/elf/ElfCommon.png';

import UndeadUnitsCard from '../../img/undead/UndeadCards.png';
import DemonUnitsCard from '../../img/demon/DemonCards.png';
import DrowUnitsCard from '../../img/drow/DrowCards.png';
import ElfUnitsCard from '../../img/elf/ElfCards.png';
import HumanUnitsCard from '../../img/human/HumanCards.png';

//STYLES
import {
    UnitCardBox,
    UnitFrameWrap,
    UnitFrame,
    UnitImg,
    UnitCardInput,
    PropertiesWrap,
    UnitProperty,
    AddValue
} from './UnitCard.styled';



export default function UnitCard ({ player, unit, setUnit }) {

    const [unitImg, setUnitImg] = useState(`url(${ UndeadUnitsCard }) ${ player[unit].position }`);
    const [unitFrame, setUnitFrame] = useState(`url(${ commonImg }) ${ commonAssets.unitFame }`);
    const [unitCommonImg, setUnitCommonImg] = useState(commonImg);
    const [raceCommonImg, setRaceUnitCommonImg] = useState(UndeadСommonImg);

    const [query, setQuery] = useState(0);
    const [unitLevel, setUnitLevel] = useState(player[unit].level);
    //CONSTS
    const { 
        race,
        attackRateIndex
    } = player;
    const {
        level,
        attackRate,
        defense,
        health,
        healthRate,
    } = player[unit]

    //HaNDLE FUNCTIONS
    const handleInput = (e) => {
        if(e.target.value === ""){
            e.target.value = 0;
        }
        setQuery(Number.parseInt(e.target.value.replaceAll(/\D/g, ''), 0));
    }
    const onUnitClick = () => {
        unitLevel === 4 ? setUnitLevel(1) : setUnitLevel(prev => prev += 1);
    }
    //USE EFFECTS
    useEffect(() => {
        switch (race) {
            case 'undead':
                setUnitImg(`url(${ UndeadUnitsCard }) ${ player[unit].position }`);
                setRaceUnitCommonImg(UndeadСommonImg);
            break;
            case 'demon':
                setUnitImg(`url(${ DemonUnitsCard }) ${ player[unit].position }`);
                setRaceUnitCommonImg(DemonСommonImg);                
            break;
            case 'drow':
                setUnitImg(`url(${ DrowUnitsCard }) ${ player[unit].position }`);
                setRaceUnitCommonImg(DrowСommonImg);                
            break;
            case 'human':
                setUnitImg(`url(${ HumanUnitsCard }) ${ player[unit].position }`);
                setRaceUnitCommonImg(HumanСommonImg);
            break;
            case 'elf':
                setUnitImg(`url(${ ElfUnitsCard }) ${ player[unit].position }`);
                setRaceUnitCommonImg(ElfСommonImg);
            break;
            default:
            break;
        }
    }, [race, player, unit, level]);

    useEffect(() => {
        setUnit({ ...UNITS[race][unit][`level${unitLevel}`] });
    }, [unitLevel, setUnit, unit, race]);

    useEffect(() => {
        const trooper = player[unit];
        trooper.amount = query;
        setUnit(trooper);
    }, [query, setUnit, unit, player]);

    useEffect(() => {
        level !== 4 ?
        setUnitFrame(`url(${ commonImg }) ${ commonAssets.unitFame } `)
        : setUnitFrame(`url(${ raceCommonImg }) ${ commonAssets[race].levelFrame }`);
    }, [level, raceCommonImg, race]);

    return (
        <UnitCardBox>
            <UnitFrameWrap
                onClick={ onUnitClick }
            >
                <UnitFrame
                    background={ unitFrame }
                    height={ level }
                    filter={ query === 0 ? 'grayscale(50%) brightness(70%)': null }            
                >

                </UnitFrame>
                <UnitImg
                    background={ unitImg }
                    filter={ query === 0 ?'grayscale(60%) brightness(70%)': null }
                >
                </UnitImg>
            </UnitFrameWrap>
            <PropertiesWrap>
                <UnitCardInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="0"
                    value={ query }
                    onChange={ handleInput }                    
                />
                <UnitProperty
                    background = { `url(${ unitCommonImg }) ${UNITS[race][unit].unitIcon}` }                 
                >
                    { level }
                </UnitProperty>
                <UnitProperty
                    background = { `url(${ unitCommonImg }) ${commonAssets.attackIcon}` }                 
                >
                    { player[unit][`attack${attackRateIndex}`] }
                    <AddValue
                        color={'#08f169'}
                    >
                        {attackRate === 0 ? null : '+' + Math.floor(attackRate * 100) + '%'}
                    </AddValue>
                </UnitProperty>
                <UnitProperty
                    background = { `url(${ unitCommonImg }) ${commonAssets.defenseIcon}` }                   
                >
                    { defense }
                </UnitProperty>
                <UnitProperty
                    background = { `url(${ unitCommonImg }) ${ commonAssets.healthIcon}` }               
                >
                    { health }
                    <AddValue
                        color={ '#08f169' }
                    >
                        { healthRate === 0 ? null : '+' + (healthRate * 100) + '%' }
                    </AddValue>
                </UnitProperty>
            </PropertiesWrap>
        </UnitCardBox>
    )
}