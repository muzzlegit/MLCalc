import { useState, useEffect } from 'react';
import { UnitCardBox, UnitFrameWrap, UnitFrame, UnitImg, UnitCardInput, UnitAttack, UnitLevel} from './UnitCard.styled';
//STORE
//DATA
import UNITS from '../../data/Units.json'
//IMAGES
import frames from '../../img/common/Frames.png';
import UndeadUnitsCard from '../../img/undead/UndeadCards.png';
import DemonUnitsCard from '../../img/demon/DemonCards.png';
import DrowUnitsCard from '../../img/drow/DrowCards.png';
import ElfUnitsCard from '../../img/elf/ElfCards.png';
import HumanUnitsCard from '../../img/human/HumanCards.png';

const UnitFramePosition = '-1px -117px'

export default function UnitCard ({player, unit, setUnit}) {

    const [unitImgs, setUnitImg] = useState(UndeadUnitsCard);
    const [unitImgsPositions, setUnitImgsPositions] = useState(player[unit].position);
    const [unitFrame, setUnitFrame] = useState(`url(frames) ${UnitFramePosition}`);

    const [query, setQuery] = useState(0);
    const [unitLevel, setUnitLevel] = useState(player[unit].level);
    const { 
        race,
        
    } = player;
    const {
        amount,
        frameIcon,
        level,

    } = player[unit]


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

    const handleInput = (e) => {
        if(e.target.value === ""){
            e.target.value = 0;
        }
        setQuery(Number.parseInt(e.target.value.replaceAll(/\D/g, ''), 0));
    }

    const onUnitClick = () => {
        unitLevel === 4 ? setUnitLevel(1) : setUnitLevel(prev => prev += 1);
        console.log(player[unit])
    }

    useEffect(() => {
        setUnitImg(getUnitImgs(race));
    }, [race]);

    useEffect(() => {
        setUnit({...UNITS[race][unit][`level${unitLevel}`]});
        setUnitImgsPositions(UNITS[race][unit][`level${unitLevel}`].position);
    }, [unitLevel, setUnit, unit, race]);

    useEffect(() => {
        const trooper = player[unit];
        trooper.amount = query;
        setUnit(trooper);
    }, [query, setUnit, unit, player]);

    useEffect(() => {
        level === 4 ?
        setUnitFrame(`url(${frames}) ${frameIcon} `)
        : setUnitFrame(`url(${frames}) ${UnitFramePosition}`);
    }, [level, frameIcon]);

    return (
        <UnitCardBox>
            <UnitFrameWrap
                onClick={onUnitClick}
            >
                <UnitFrame
                    background={unitFrame}
                    height={
                        level !== 4 ?
                        `92px`
                        :`100px`
                    }                
                >
                    <UnitImg
                        background={
                            `url(${unitImgs}) ${unitImgsPositions}`
                        }
                    >
                    </UnitImg>
                </UnitFrame>
            </UnitFrameWrap>
            <UnitCardInput
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="0"
                value={query}
                onChange={handleInput}                    
            />
        </UnitCardBox>
    )
}