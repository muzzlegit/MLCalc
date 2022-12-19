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

export default function Squad ( ) {
    console.log('squad render')
    return (
        <SquadBox>
            {/* <Hero 
                player = { player }
            /> */}
            <UnitsBox
            >
                { troopsArray.map(( trooper ) => {
                        return (
                            <li key = { trooper } >  
                                <UnitCard
                                    unitName = { trooper }
                                />
                            </li>
                        )
                    })
                }
            </UnitsBox>
        </SquadBox>
    )
}