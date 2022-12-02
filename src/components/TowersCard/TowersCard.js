import { nanoid } from 'nanoid'
//HOOKS
import usePlayerStoreData from '../../hooks/usePlayerStoreData';
import usePlayerStoreFunctions from '../../hooks/usePlayerStoreFunctions';
import useCommonImg from '../../hooks/useCommonImg';
import useRaceCommonImg from '../../hooks/useRaceCommonImg';
//STYLES
import { TowerBox, ImgWrap, TowerImgBox, LevelLabel } from './TowersCard.styled';

export default function TowersCard ({ player }) {
    const playerData = usePlayerStoreData( player );
    const playerFunctions = usePlayerStoreFunctions( player );
    const towerImg = useRaceCommonImg( player, 'tower' );
    const magicTowerImg = useRaceCommonImg( player, 'magicTower' );
    const fortificationImg = useRaceCommonImg( player, 'fortification' );
    
    //CONSTS
    const {
        towers,
        fortifications 
    } = playerData
    const {
        setTowers,
        setFortification
    } = playerFunctions;
    const perfectIcon = useCommonImg( 'smallPerfectIcon' );

    //HaNDLE FUNCTIONS    
    const onTowerClick = ( e ) => {
        setTowers( towers.filter( tower => tower.id !== e.currentTarget.id ));
        setFortification( fortifications.filter( fortification => fortification.id !== e.currentTarget.id ));
    }

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
                            onClick = { onTowerClick }
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