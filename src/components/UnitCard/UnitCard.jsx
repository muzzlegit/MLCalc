import { useContext } from 'react';
//CONTEXT
import PlayerContext from '../../helpers/context';
//HOOKS
import usePlayerStoreData from '../../hooks/usePlayerStoreData';
import useUnit from '../../hooks/useUnit';
import useUnitAmount from '../../hooks/useUnitAmount';
import useUnitLevel from '../../hooks/useUnitLevel';
import useUnitImg from '../../hooks/useUnitImg';
import useCommonImg from '../../hooks/useCommonImg';
//STYLES
import {
    UnitCardBox,
    UnitFrameWrap,
    UnitFrame,
    UnitImg,
    UnitCardInput,
    PropertiesWrap,
    UnitProperty,
    AddValue
} from './UnitCard.styled';


export default function UnitCard({ unitName }) {
    const player = useContext( PlayerContext );
    // console.log('Render UnitCard', player);
    
    
    const [ unitLevel, setUnitLevel ] = useUnitLevel( 1 );
    const [ amount, setAmount ] = useUnitAmount( 0 );
    useUnit( player, unitLevel, unitName, amount );
    const playerData = usePlayerStoreData( player );
    const { troops } = playerData;
    const unit = troops[ unitName ];
    // if(unitName === 'mage')console.log(unit) ;
    const {
        level, 
        attack,
        attackRate,
        defense,
        health,
        healthRate
    } = unit;

    const [ unitImg, unitRaceFrame ] = useUnitImg( player, unit );
    const unitIcon = useCommonImg( `${ unit.unit }Icon` );
    const unitFrame = useCommonImg( 'unitFame' );
    const attackIcon = useCommonImg( 'attackIcon' );
    const defenseIcon = useCommonImg( 'defenseIcon' );
    const healthIcon = useCommonImg( 'healthIcon' );

    

    return (
        <UnitCardBox>
            <UnitFrameWrap onClick = { setUnitLevel } >
                <UnitFrame
                    background = { level === 4 ? unitRaceFrame : unitFrame }
                    height = { level }
                    filter = { amount === 0 ? 'grayscale(50%) brightness(70%)' : null }            
                ></UnitFrame>
                <UnitImg
                    background ={  unitImg }
                    filter = { amount === 0 ? 'grayscale(60%) brightness(70%)' : null }
                ></UnitImg>
            </UnitFrameWrap>
            <PropertiesWrap>
                <UnitCardInput
                    type = "text"
                    autoComplete = "off"
                    autoFocus
                    placeholder = "0"
                    value = { amount }
                    onChange = { setAmount }                    
                />
                <UnitProperty background = { unitIcon } >
                    { level }
                </UnitProperty>
                <UnitProperty background = { attackIcon } >
                    { attack }
                    <AddValue color = {'#08f169'} >
                        { attackRate === 0 ? null : '+' + Math.floor( attackRate * 100 ) + '%' }
                    </AddValue>
                </UnitProperty>
                <UnitProperty background = { defenseIcon } >
                    { defense }
                </UnitProperty>
                <UnitProperty background = { healthIcon } >
                    { health }
                    <AddValue color = { '#08f169' } >
                        { healthRate === 0 ? null : '+' + Math.floor( healthRate * 100) + '%' }
                    </AddValue>
                </UnitProperty>
            </PropertiesWrap>
        </UnitCardBox>
    )
};