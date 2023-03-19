import { nanoid } from "nanoid";
//HOOKS
import usePlayerContext from "../../../hooks/usePlayerContext.js";
//COMPONENTS
import HeroSquadClickWrap from '../../HERO/HeroSquadClickWrap';
import UnitCard from '../UnitCard';
import AlliesButton from "../AlliesButton/AlliesButton.jsx";
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

export default function Squad ({ buttonChecker, setChecker }) {
    const player = usePlayerContext()
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
            {
                buttonChecker &&
                <AlliesButton
                    player = { player }
                    setChecker = { setChecker }
                />                
            }
        </SquadBox>
    )
}