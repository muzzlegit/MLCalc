import { useState, useEffect } from 'react';
import UnitCard from '../UnitCard';
import { SquadBox,ArmyBox } from './index.styled';
import TowersCard from '../TowersCard/TowersCard';

export default function Squad ({race, troops , setUnit, attackRate  }) {
    // console.log('troops to squad',troops);
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
                { troopsArray.map((trooper) => {
                        return (
                            <li key={trooper.unit}>  
                                <UnitCard trooper={trooper} setUnit={setUnit} race={race} attackRate = {attackRate}/>
                            </li>
                        )
                    })}
            </SquadBox>
        </>
    )
}