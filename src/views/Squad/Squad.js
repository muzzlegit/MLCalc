import { useState, useEffect } from 'react';
// import { useStore } from '../../../data/store/useStore';

//COMPONENTS
import Hero from '../Hero/Hero';
import UnitCard from '../../components/UnitCard/UnitCard';
// import UnitCard from '../UnitCard';
// import Hero from '../../../views/components/Hero/Hero';
// import TowersCard from '../TowersCard/TowersCard';
// //HELPERS
// import getValueFromUnitPropertyArray from '../../../helpers/getValueFromUnitPropertyArray';
//HOOKS
import usePlayerStoreData from '../../hooks/usePlayerStoreData';
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

export default function Squad ({ role }) {
    const [playerData, playerFunctions] = usePlayerStoreData(role);

    return (
        <SquadBox>
            <Hero
                role={ role }
            />
            <UnitsBox>
                { troopsArray.map((trooper) => {
                        return (
                            <li key={trooper.unit}>  
                                <UnitCard
                                    player={ playerData }
                                    unit={ trooper }
                                    setUnit={ playerFunctions.setUnit }
                                />
                            </li>
                        )
                    })
                }
            </UnitsBox>
        </SquadBox>
    )
}