import { useState, useEffect } from 'react';
import { useStore } from '../../../data/store/useStore';
//COMPONENTS
import UnitCard from '../UnitCard';
import Hero from '../../../views/components/Hero/Hero';
import TowersCard from '../TowersCard/TowersCard';
//HELPERS
import getValueFromUnitPropertyArray from '../../../helpers/getValueFromUnitPropertyArray';
//STYLES
import { SquadBox,ArmyBox } from './index.styled';


export default function Squad ({ player, setUnit, attackRate  }) {

    const troops = player.troops;
    const troopsArray = [
        troops.porter,
        troops.swordsman, 
        troops.cavalier,  
        troops.flying,  
        troops.archer,  
        troops.healer,
        troops.mercenary,
        troops.mage 
    ]

    return (
        <>
            <SquadBox>
                <Hero
                    player={player}
                />
                { troopsArray.map((trooper) => {
                        return (
                            <li key={trooper.unit}>  
                                <UnitCard
                                    player={player}
                                    trooper={trooper}
                                    setUnit={setUnit}
                                    attackRate = {attackRate}
                                />
                            </li>
                        )
                    })}
            </SquadBox>
        </>
    )
}