import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
//HOOKS
import usePlayerStoreData from '../../hooks/usePlayerStoreData';
//IMAGES
import undeadTowersImg from '../../img/undead/UndeadCommon.png';
import drowTowersImg from '../../img/drow/DrowCommon.png';
import demonTowersImg from '../../img/demon/DemonCommon.png';
import humanTowersImg from '../../img/human/HumanCommon.png';
import elfTowersImg from '../..//img/elf/ElfCommon.png';
import commonAssets from '../../data/CommonAssets.json';


//STYLES
import { TowerBox, TowerImgBox } from './TowersCard.styled';

export default function TowersCard ({ role }) {
    const [playerData, playerFunctions] = usePlayerStoreData(role);
    const [towersImg, setTowersImg] = useState(undeadTowersImg);

    //CONSTS
    const {
        race,
        towers,
        fortifications
    } = playerData

    //USE EFFECTS
    useEffect(() => {
        switch (race) {
            case 'undead':
                setTowersImg(undeadTowersImg);
                break;
            case 'demon':
                setTowersImg(demonTowersImg);
                break;
            case 'drow':
                setTowersImg(drowTowersImg);
                break;
            case 'human':
                setTowersImg(humanTowersImg);
                break;
            case 'elf':
                setTowersImg(elfTowersImg);
                break;  
            default:
                break;
        }
    }, [race])

    //HaNDLE FUNCTIONS    
    const onTowerClick = (e) => {
        playerFunctions.setTowers(towers.filter(tower => tower.id !== e.currentTarget.id));
        playerFunctions.setFortification(fortifications.filter(fortification => fortification.id !== e.currentTarget.id));
    }

    return (
        <TowerBox>
            { towers.map((tower) => {
                return (
                    <TowerImgBox
                        key={ nanoid() }
                        id = { tower.id }
                        background = { `url(${towersImg}) ${commonAssets[`${tower.type}PositionUnit`]}` }
                        onClick = { onTowerClick }
                    />
                )
            })}
            { fortifications.map((fortification) => {
                return (
                    <div
                        key={ nanoid() }
                    >
                        <TowerImgBox

                            id = { fortification.id }
                            background = { `url(${towersImg}) ${commonAssets.fortificationPositionUnit}` }
                            onClick = { onTowerClick }
                        />
                        <div>
                            x{ fortification.quantity }
                        </div>
                    </div>
                )
            })}
        </TowerBox>
    )
}