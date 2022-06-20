import { useState, useEffect } from 'react';
import { useStore } from '../../../data/store/useStore';
import { TowerBox, TowerImgBox } from './TowersCard.styled';
import undeadTowersImg from '../../../img/undead/UndeadCommon.png';
import drowTowersImg from '../../../img/drow/DrowCommon.png';
import demonTowersImg from '../../../img/demon/DemonCommon.png';
import humanTowersImg from '../../../img/human/HumanCommon.png';
import elfTowersImg from '../../../img/elf/ElfCommon.png';
import commonAssets from '../../../data/CommonAssets.json';
import { nanoid } from 'nanoid'

export default function TowersCard ({ race, towers, fortifications, setTowers, setFortification }) {
    const [towersImg, setTowersImg] = useState(undeadTowersImg);

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
    
    const onTowerClick = (e) => {
        setTowers(towers.filter(tower => tower.id !== e.currentTarget.id));
        setFortification(fortifications.filter(fortification => fortification.id !== e.currentTarget.id));
    }


    return (
        <TowerBox>
            { towers.map((tower) => {
                return (
                    <TowerImgBox
                        key={nanoid()}
                        id = {tower.id}
                        background = { `url(${towersImg}) ${commonAssets[`${tower.type}PositionUnit`]}` }
                        onClick = {onTowerClick}
                    />
                )
            })}
            { fortifications.map((fortification) => {
                return (
                    <div
                        key={nanoid()}
                    >
                        <TowerImgBox

                            id = {fortification.id}
                            background = { `url(${towersImg}) ${commonAssets.fortificationPositionUnit}` }
                            onClick = {onTowerClick}
                        />
                        <div
  
                        >
                            x{fortification.quantity}
                        </div>
                    </div>

                )
            })}
        </TowerBox>
    )
}