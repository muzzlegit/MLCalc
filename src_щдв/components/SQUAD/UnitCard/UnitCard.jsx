//HOOKS
import usePlayerContext from '../../../hooks/usePlayerContext.js';
import useUnit from './hooks/useUnit.js';
import useUnitImg from './hooks/useUnitImg.js';
import useCommonImg from '../../../hooks/useCommonImg.js';
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
} from './styles/UnitCard.styled';

export default function UnitCard({ unitName }) {
    const player = usePlayerContext();
    const { amount, troops, onLevelClick, onAmountChange } = useUnit( player, unitName );
    const unit = troops[ unitName ];

    const {
        level, 
        attack,
        attackRate,
        defense,
        health,
        healthRate,
        persecutionRate
    } = unit;

    const [ unitImg, unitRaceFrame ] = useUnitImg( player, unit );
    const unitIcon = useCommonImg( `${ unit.unit }Icon` );
    const unitFrame = useCommonImg( 'unitFame' );
    const attackIcon = useCommonImg( 'attackIcon' );
    const defenseIcon = useCommonImg( 'defenseIcon' );
    const healthIcon = useCommonImg( 'healthIcon' );
    const persecutorIcon = useCommonImg( 'swordRight' );

    return (
        <UnitCardBox>
            <UnitFrameWrap onClick = { onLevelClick } >
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
                    onChange = { onAmountChange }                    
                />
                <UnitProperty background = { unitIcon } >
                    { level }
                </UnitProperty>
                <UnitProperty background = { attackIcon } >
                    { attack }
                    <AddValue color = { attackRate > 0 ? '#08f169' : '#bb0a01' } >
                        { attackRate > 0 ? '+' + Math.floor( attackRate * 100 ) + '%' :  attackRate < 0 ? Math.floor( attackRate * 100 ) + '%' : null }
                    </AddValue>
                </UnitProperty>
                <UnitProperty background = { defenseIcon } >
                    <AddValue color = { defense < 0 ? '#f7ad0e' : '#ddddbd' } >
                        { defense < 0 ? 0 : defense }
                    </AddValue>
                </UnitProperty>
                <UnitProperty background = { healthIcon } >
                    { health }
                    <AddValue color = { healthRate > 0 ? '#08f169' : healthRate < 0 && healthRate > -0.75 ? '#bb0a01' : '#f7ad0e' } > 
                        { healthRate > 0 ? '+' + Math.floor( healthRate * 100 ) + '%' :  healthRate < 0 ? Math.floor( healthRate * 100 ) + '%' : null }
                    </AddValue>
                </UnitProperty>
                <UnitProperty background = { persecutorIcon } >
                    <AddValue color = { '#08f169' } >
                        { persecutionRate > 0 ? '+' + Math.floor( persecutionRate * 100 ) + '%' :  persecutionRate < 0 ? Math.floor( persecutionRate * 100 ) + '%' : null }
                    </AddValue>
                </UnitProperty>
            </PropertiesWrap>
        </UnitCardBox>
    )
};