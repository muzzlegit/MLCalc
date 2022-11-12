// import { useState, useEffect } from 'react';
// import { useStore } from '../../../data/store/useStore';
// import { UnitImg, UnitImgBox, ArticleBox, ArticleInput, UnitHealth, UnitDefense, UnitAttack, UnitLevel, UnitFrame  } from './index.styled';

// import useMainAttacker from '../../../data/store/useMainAttacker';
// import useMainDefender from '../../../data/store/useMainDefender';

// import UndeadUnitsCard from '../../../img/undead/UndeadCards.png';
// import DemonUnitsCard from '../../../img/demon/DemonCards.png';
// import DrowUnitsCard from '../../../img/drow/DrowCards.png';
// import ElfUnitsCard from '../../../img/elf/ElfCards.png';
// import HumanUnitsCard from '../../../img/human/HumanCards.png';

// import commonAssetsImg from '../../../img/common/CommonAssets.png';
// import commonDemonImg from '../../../img/demon/DemonCommon.png';
// import commonUndeadImg from '../../../img/undead/UndeadCommon.png';
// import commonDrowImg from '../../../img/drow/DrowCommon.png';
// import commonElfImg from '../../../img/elf/ElfCommon.png';
// import commonHumanImg from '../../../img/human/HumanCommon.png';

// import units from '../../../data/Units.json';
// import commonAssets from '../../../data/CommonAssets.json';

// import isUnitNativeLand from '../../../helpers/isUnitNativeLand';
// import getValueFromUnitPropertyArray from '../../../helpers/getValueFromUnitPropertyArray';

// export default function UnitCard ({player, trooper, setUnit, attackRate}) {

//     const [level, setLevel] = useState(1);
//     const [amount, setAmount] = useState(0);
//     const [troopsRaceImg, setTroopsRaceImg] = useState(UndeadUnitsCard);

//     const battlefield = useMainDefender(state => state.battlefield);
//     const setMainAttackerAttackArr = useMainAttacker(state => state.setAttackArr);
//     const setMainDefenderttackArr = useMainDefender(state => state.setAttackArr);

//     const race = player.race;

//     const onClick = (e) => {
//         if(level === 4) {
//             setLevel(1);
//         } else {
//            setLevel(prev => prev += 1);
//         }
//         setUnit({...units[race][trooper.unit][`level${level}`]});
// +=
//     }
//     const handleAmount = (e) => {
//         if(e.target.value === ""){
//             e.target.value = 0;
//         }
//         setAmount(Number.parseInt(e.target.value.replaceAll(/\D/g, ''), 0));
//     }

//     useEffect(() => {
//         switch (race) {
//             case 'undead':
//                 setTroopsRaceImg(UndeadUnitsCard);
//                 break;
//             case 'demon':
//                 setTroopsRaceImg(DemonUnitsCard);
//                 break;
//             case 'drow':
//                 setTroopsRaceImg(DrowUnitsCard);
//                 break;
//             case 'human':
//                 setTroopsRaceImg(HumanUnitsCard);
//                 break;
//             case 'elf':
//                 setTroopsRaceImg(ElfUnitsCard);
//                 break;  
//             default:
//                 break;
//         }
//     }, [race])

//     useEffect(() => {
//             setUnit({...units[race][trooper.unit][`level${level}`]});
//         }, [
//             amount,
//             level,
//             player.apostate,
//             race,
//             trooper.unit,
//             setUnit
//         ]
//     )
//     useEffect(() => {
//         isUnitNativeLand(trooper.homeLand, battlefield)
//             ? setMainAttackerAttackArr({ name: "homeLand", unit: `${trooper.unit}`, property: 'attackArr', value: .5 })
//             : setMainAttackerAttackArr({ name: "homeLand", unit: `${trooper.unit}`, property: 'attackArr', value: 0 });
//      }, [ battlefield, setMainAttackerAttackArr, trooper.homeLand,trooper.alienLand, trooper.unit ]);
    
//      useEffect(() => {
//         isUnitNativeLand(trooper.alienLand, battlefield)
//             ? setMainAttackerAttackArr({ name: "alienLand", unit: `${trooper.unit}`, property: 'attackArr', value: -.5 })
//             : setMainAttackerAttackArr({ name: "alienLand", unit: `${trooper.unit}`, property: 'attackArr', value: 0 });
//     }, [ battlefield, setMainAttackerAttackArr, trooper.homeLand,trooper.alienLand, trooper.unit ]);
    
//     return (
//         <ArticleBox>
//             <UnitImgBox
//                 background = { trooper.level === 4 ? `url(${commonUndeadImg}) ${commonAssets.levelFramePosition}` : `url(${commonAssetsImg}) ${commonAssets.unitFramePosition}`}
//             >
//                 <UnitImg 
//                     background = { `url(${troopsRaceImg}) ${trooper.position}` }
//                     filter = { amount === 0 || amount === '' ? `grayscale(100%) brightness(70%)` : 'none' }
//                     onClick={onClick}
//                 >
//                 </UnitImg>

//             </UnitImgBox>
//             <ArticleInput
//                 type="text"
//                 autoComplete="off"
//                 autoFocus
//                 placeholder="0"
//                 value={amount}
//                 onChange={handleAmount}                    
//             />
//             <div>
//                 <UnitLevel
//                     background = { `url(${commonAssetsImg}) ${units[race][trooper.unit].unitIcon}` } 
//                 >
//                     {trooper.level}
//                 </UnitLevel>
//                 <UnitAttack
//                     background = { `url(${commonAssetsImg}) ${commonAssets.attackIcon}` }                 
//                 >
//                     { trooper[`attack${attackRate}`] }
//                     { (getValueFromUnitPropertyArray(trooper.attackArr)) >= 0? ' +' : ' -' }
//                     { Math.abs((getValueFromUnitPropertyArray(trooper.attackArr)) * 100) }%
//                 </UnitAttack>
//                 <UnitDefense
//                     background = { `url(${commonAssetsImg}) ${commonAssets.defenseIcon}` }                   
//                 >
//                     {getValueFromUnitPropertyArray(trooper.defenseArr)}
//                 </UnitDefense>
//                 <UnitHealth
//                     background = { `url(${commonAssetsImg}) ${commonAssets.healthIcon}` }               
//                 >
//                     {trooper.health}
//                 </UnitHealth>
//             </div>
//         </ArticleBox>
//     )
// }