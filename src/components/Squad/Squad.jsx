import { nanoid } from "nanoid";

//COMPONENTS
import Hero from '../Hero/Hero';
import UnitCard from '../UnitCard';

//STYLES
import { SquadBox, UnitsBox } from './Squad.styled';
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
            <Hero />
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