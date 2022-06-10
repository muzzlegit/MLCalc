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

export default function TowersCard ({ race }) {
    const mainAttackerTowers = useStore(state => state.mainAttacker.towers);
    const mainAttackerFortification = useStore(state => state.mainAttacker.fortification);
    const setMainAttackerTowers = useStore(state => state.setMainAttackerTowers);
    const setMainAttackerFortification = useStore(state => state.setMainAttackerFortification);  
    const [mainAttackerRaceImg, setMainAttackerRaceImg] = useState(undeadTowersImg);

    useEffect(() => {
        switch (race) {
            case 'undead':
                setMainAttackerRaceImg(undeadTowersImg);
                break;
            case 'demon':
                setMainAttackerRaceImg(demonTowersImg);
                break;
            case 'drow':
                setMainAttackerRaceImg(drowTowersImg);
                break;
            case 'human':
                setMainAttackerRaceImg(humanTowersImg);
                break;
            case 'elf':
                setMainAttackerRaceImg(elfTowersImg);
                break;  
            default:
                break;
        }
    }, [race])
    
    const onTowerClick = (e) => {

        setMainAttackerTowers(mainAttackerTowers.filter(tower => tower.id !== e.currentTarget.id));
        setMainAttackerFortification(mainAttackerFortification.filter(fortification => fortification.id !== e.currentTarget.id));
    }


    return (
        <TowerBox>
            { mainAttackerTowers.map((tower) => {
                return (
                    <TowerImgBox
                        key={nanoid()}
                        id = {tower.id}
                        background = { `url(${mainAttackerRaceImg}) ${commonAssets[`${tower.type}PositionUnit`]}` }
                        onClick = {onTowerClick}
                    />
                )
            })}
            { mainAttackerFortification.map((fortification) => {
                return (
                    <TowerImgBox
                        key={nanoid()}
                        id = {fortification.id}
                        background = { `url(${mainAttackerRaceImg}) ${commonAssets.fortificationPositionUnit}` }
                        onClick = {onTowerClick}
                    />
                )
            })}
        </TowerBox>
    )
}