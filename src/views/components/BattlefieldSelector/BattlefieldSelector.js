import { useEffect } from "react";
import { useStore } from "../../../data/store/useStore";

import useMainAttacker from "../../../data/store/useMainAttacker";
import useMainDefender from "../../../data/store/useMainDefender";

import isNativeLand from "../../../helpers/2/isNativeLand";

export default function BattlefieldSelector() {
  //MAIN ATTACKER
  const mainAttackerHomeLand = useMainAttacker(state => state.homeLand);
  const mainAttackerApostateValue = useMainAttacker(state => state.apostate);
  const setMainAttackerDefenseArr = useMainAttacker(state => state.setDefenseArr);
  //MAIN DEFENDER
  const mainDefenderHomeLand = useMainDefender(state => state.homeLand);
  const mainDefenderApostateValue = useMainDefender(state => state.apostate);
  const setMainDefenderDefenseArr = useMainDefender(state => state.setDefenseArr);

  const battlefield = useMainDefender(state => state.battlefield);
  const setBattlefield = useMainDefender(state => state.setBattlefield);

  const onSelect = (e) => {
    setBattlefield(e.target.value);
  }

  useEffect(() => {
    console.log(isNativeLand(mainAttackerHomeLand,battlefield))
    if(isNativeLand(mainAttackerHomeLand, battlefield) && !mainAttackerApostateValue){
      setMainAttackerDefenseArr({ name: 'homeLand', unit: 'all', property: 'defenseArr', value: 25 });
    }
    if(!isNativeLand(mainAttackerHomeLand, battlefield) || mainAttackerApostateValue){
      setMainAttackerDefenseArr({ name: 'homeLand', unit:'all', property: 'defenseArr', value: 0 });
    }
  }, [ battlefield, mainAttackerHomeLand, mainAttackerApostateValue, setMainAttackerDefenseArr ]);

  useEffect(() => {
    if(isNativeLand(mainDefenderHomeLand,battlefield) && !mainDefenderApostateValue){
      setMainDefenderDefenseArr({ name: 'homeLand', unit: 'all', property: 'defenseArr', value: 25 });
    }
    if(!isNativeLand(mainDefenderHomeLand,battlefield) || mainDefenderApostateValue){
      setMainDefenderDefenseArr({ name: 'homeLand', unit:'all', property: 'defenseArr', value: 0 });
    }
  }, [ battlefield, mainDefenderHomeLand, mainDefenderApostateValue, setMainDefenderDefenseArr ]);

  return (
    <select id="battlefield" onChange={ onSelect }>
      <option value="cursedForest">Проклятые леса</option>
      <option value="deadLand">Мёртвая земля</option>
      <option value="hollyLand">Священная земля</option>
      <option value="magicForest">Волшебные леса</option>
      <option value="mountain">Горы</option>
      <option value="desert">Пустыня</option>
      <option value="forest">Лес</option> 
      <option value="steppe">Степь</option>
      <option value="mine">Подземелье</option>
    </select>   
  )
}