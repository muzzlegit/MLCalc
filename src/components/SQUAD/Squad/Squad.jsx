import { nanoid } from "nanoid";
//HOOKS
import { useContext } from 'react';
//CONTEXT
import PlayerContext from '../../../helpers/context.js';
//COMPONENTS
import HeroSquadClickWrap from '../../HERO/HeroSquadClickWrap';
import UnitCard from '../UnitCard';

//STYLES
import { SquadBox, UnitsBox } from './styles/Squad.styled';
//CONST
const troopsArray = [
    'porter',
    'swordsman', 
    'cavalier',  
    'flying',  
    'archer',  
    'healer',
    'mercenary',
    'mage' 
]

export default function Squad () {
    return (
        <SquadBox>
            <HeroSquadClickWrap />
            <UnitsBox
            >
                { troopsArray.map(( trooper ) => {
                        return (
                            <li key = { nanoid() } >  
                                <UnitCard unitName = { trooper } />
                            </li>
                        )
                    })
                }
            </UnitsBox>
        </SquadBox>
    )
}