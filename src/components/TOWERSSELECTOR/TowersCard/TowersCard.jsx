import { nanoid } from 'nanoid'
//HOOKS
import { useContext } from 'react';
import usePlayerStoreData from '../../../hooks/usePlayerStoreData';
import useCommonImg from '../../../hooks/useCommonImg';
import useRaceCommonImg from '../../../hooks/useRaceCommonImg';
import useTowersList from './hooks/useTowersList';
//CONTEXT
import PlayerContext from '../../../helpers/context.js';
//STYLES
import { TowerBox, ImgWrap, TowerImgBox, LevelLabel } from './styles/TowersCard.styled';


export default function TowersCard () {
    const player = useContext( PlayerContext );
    const playerData = usePlayerStoreData( player );
    const [ onTowerClick, onFortificationClick  ] = useTowersList( player );

    const towerImg = useRaceCommonImg( player, 'tower' );
    const magicTowerImg = useRaceCommonImg( player, 'magicTower' );
    const fortificationImg = useRaceCommonImg( player, 'fortification' );
    const perfectIcon = useCommonImg( 'smallPerfectIcon' );

    const { towers, fortifications } = playerData;

    return (
        <TowerBox>
            { towers.map(( tower ) => {
                return (
                    <ImgWrap
                        key = { nanoid() }
                    >
                        <TowerImgBox
                            key= { nanoid() }
                            id = { tower.id }
                            background = { tower.type === 'tower' ? towerImg : magicTowerImg }
                            onClick = { onTowerClick }
                        />
                        <LevelLabel
                            border = { tower.level }
                            background = { tower.level === 8 ? perfectIcon : null }
                        >
                            { tower.level === 8 ? null : tower.level }
                        </LevelLabel>
                    </ImgWrap>
                )
            })}
            { fortifications.map(( fortification ) => {
                return (
                    <ImgWrap
                        key = { nanoid() }
                    >
                        <TowerImgBox
                            id = { fortification.id }
                            background = { fortificationImg }
                            onClick = { onFortificationClick }
                        />
                        <div>
                            x{ fortification.quantity }
                        </div>
                        <LevelLabel
                            border = { fortification.level }
                            background = { fortification.level === 8 ? perfectIcon : null}
                        >
                            { fortification.level === 8 ? null : fortification.level }
                        </LevelLabel>
                    </ImgWrap>
                )
            })}    
        </TowerBox>
    )
}