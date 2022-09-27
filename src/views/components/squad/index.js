import { useState, useEffect } from 'react';
import { useStore } from '../../../data/store/useStore';

import UnitCard from '../UnitCard';
import Hero from '../../Hero/Hero';

import getValueFromUnitPropertyArray from '../../../helpers/getValueFromUnitPropertyArray';
import { SquadBox,ArmyBox } from './index.styled';
import TowersCard from '../TowersCard/TowersCard';

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