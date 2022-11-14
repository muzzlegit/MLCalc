import { useState, useEffect } from 'react';

//STORE
//DATA
import UNITS from '../../data/Units.json';
import commonAssets from '../../data/CommonAssets.json';
//IMAGES
import frames from '../../img/common/Frames.png';
import UndeadUnitsCard from '../../img/undead/UndeadCards.png';
import DemonUnitsCard from '../../img/demon/DemonCards.png';
import DrowUnitsCard from '../../img/drow/DrowCards.png';
import ElfUnitsCard from '../../img/elf/ElfCards.png';
import HumanUnitsCard from '../../img/human/HumanCards.png';
import commonAssetsImg from '../../img/common/CommonAssets.png';
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
//CONST
const unitFrameIcon = UNITS.commonProperties.unitFrameIcon;



export default function UnitCard ({player, unit, setUnit}) {

    const [unitImg, setUnitImg] = useState(`url(${UndeadUnitsCard}) ${player[unit].position}`);
    const [unitFrame, setUnitFrame] = useState(`url(${frames}) ${unitFrameIcon}`);

    const [query, setQuery] = useState(0);
    const [unitLevel, setUnitLevel] = useState(player[unit].level);
//CONSTS
    const { 
        race,
        attackRateIndex
    } = player;
    const {
        frameIcon,
        level,
        attackRate,
        defense,
        health,
        healthRate,
    } = player[unit]

//HELPERS
    const getUnitImgs = (race) => {
        switch (race) {
            case 'undead':
            return UndeadUnitsCard;
            case 'demon':
            return DemonUnitsCard;
            case 'drow':
            return DrowUnitsCard;
            case 'human':
            return HumanUnitsCard;
            case 'elf':
            return ElfUnitsCard;
            default:
            break;
        }
    }
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
        setUnitImg(`url(${getUnitImgs(race)}) ${player[unit].position}`);
    }, [race, player, unit, level]);

    useEffect(() => {
        setUnit({...UNITS[race][unit][`level${unitLevel}`]});
    }, [unitLevel, setUnit, unit, race]);

    useEffect(() => {
        const trooper = player[unit];
        trooper.amount = query;
        setUnit(trooper);
    }, [query, setUnit, unit, player]);

    useEffect(() => {
        level !== 4 ?
        setUnitFrame(`url(${frames}) ${unitFrameIcon} `)
        : setUnitFrame(`url(${frames}) ${UNITS[race].levelFrameIcon}`);
    }, [level, frameIcon, race]);

    return (
        <UnitCardBox>
            <UnitFrameWrap
                onClick={ onUnitClick }
            >
                <UnitFrame
                    background={ unitFrame }
                    height={ level }                
                >
                    <UnitImg
                        background={ unitImg }
                    >
                    </UnitImg>
                </UnitFrame>
            </UnitFrameWrap>
            <PropertiesWrap>
                <UnitCardInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="0"
                    value={ query }
                    onChange={handleInput}                    
                />
                <UnitProperty
                    background = { `url(${commonAssetsImg}) ${UNITS[race][unit].unitIcon}` }                 
                >
                    { level }
                </UnitProperty>
                <UnitProperty
                    background = { `url(${commonAssetsImg}) ${commonAssets.attackIcon}` }                 
                >
                    { player[unit][`attack${attackRateIndex}`] }
                    <AddValue
                        color={'#08f169'}
                    >
                        {attackRate === 0 ? null : '+' + (attackRate * 100) + '%'}
                    </AddValue>
                </UnitProperty>
                <UnitProperty
                    background = { `url(${commonAssetsImg}) ${commonAssets.defenseIcon}` }                   
                >
                    { defense }
                </UnitProperty>
                <UnitProperty
                    background = { `url(${commonAssetsImg}) ${commonAssets.healthIcon}` }               
                >
                    { health }
                    <AddValue
                        color={'#08f169'}
                    >
                        {healthRate === 0 ? null : '+' + (healthRate * 100) + '%'}
                    </AddValue>
                </UnitProperty>
            </PropertiesWrap>
        </UnitCardBox>
    )
}