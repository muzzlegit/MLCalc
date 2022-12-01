import { useState } from 'react';

//HOOKS
import useUnit from '../../hooks/useUnit';
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

export default function UnitCard ({ player, unitName }) {
    const [ unitLevel, setUnitLevel ] = useState( 1 );
    const [ amount, setAmount ] = useState( 0 );
    const unit = useUnit( player, unitName, unitLevel, amount );
    const [ unitImg, unitRaceFrame ] = useUnitImg( player, unit );

    //CONSTS
    const {
        level,
        attack,
        attackRate,
        defense,
        health,
        healthRate
    } = unit
    const unitIcon = useCommonImg( `${ unit.unit }Icon` );
    const unitFrame = useCommonImg( 'unitFame' );
    const attackIcon = useCommonImg( 'attackIcon' );
    const defenseIcon = useCommonImg( 'defenseIcon' );
    const healthIcon = useCommonImg( 'healthIcon' );

    //HANDLE FUNCTIONS
    const handleInput = ( e ) => {
        if( e.target.value === "" ) e.target.value = 0;
        setAmount( Number.parseInt( e.target.value.replaceAll( /\D/g, '' ), 0 ));
    }
    const onUnitClick = () => {
        unitLevel === 4 ? setUnitLevel( 1 ) : setUnitLevel( prev => prev += 1 );
    }

    return (
        <UnitCardBox>
            <UnitFrameWrap onClick = { onUnitClick }>
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
                    onChange = { handleInput }                    
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
}