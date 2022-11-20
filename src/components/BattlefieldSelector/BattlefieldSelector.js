import { useState, useEffect } from "react";
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//HELPERS
import isNativeLand from "../../helpers/isNativeLand";
//STYLES
import { SelectorBox, SelectorLabel, Select } from "./BattlefieldSelector.styled";


export default function BattlefieldSelector() {
  const [mainAttackerData, mainAttackerFunctions] = usePlayerStoreData('mainAttacker');
  const [mainDefenderData, mainDefenderFunctions] = usePlayerStoreData('mainDefender');
  const [battlefield, setBattlefield] = useState("cursedForest");

 
  //HaNDLE FUNCTIONS
  const onSelect = (e) => {
    setBattlefield(e.target.value);
  }
  //USE EFFECTS
  useEffect(() => {
    const allUnits = ['porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage'];
    if(isNativeLand(mainAttackerData.homeLand, battlefield) && !mainAttackerData.apostate){
      mainAttackerFunctions.setUnitProperty({
        name: 'homeLand',
        unit: [...allUnits],
        property: 'defenseArr',
        childProperty: 'defense',
        value: 25 });
    } else {
      mainAttackerFunctions.setUnitProperty({
        name: 'homeLand',
        unit: [...allUnits],
        property: 'defenseArr',
        childProperty: 'defense',
        value: 0 });
    }
  }, [ battlefield, mainAttackerData, mainAttackerData.homeLand, mainAttackerData.apostate, mainAttackerFunctions]);

  useEffect(() => {
    const allUnits = ['porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage'];
    if(isNativeLand(mainDefenderData.homeLand, battlefield) && !mainDefenderData.apostate){
      mainDefenderFunctions.setUnitProperty({
        name: 'homeLand',
        unit: [...allUnits],
        property: 'defenseArr',
        childProperty: 'defense',
        value: 25 });
    } else {
      mainDefenderFunctions.setUnitProperty({
        name: 'homeLand',
        unit: [...allUnits],
        property: 'defenseArr',
        childProperty: 'defense',
        value: 0 });
    }
  }, [ battlefield, mainDefenderData, mainDefenderData.homeLand, mainDefenderData.apostate, mainDefenderFunctions]);

  return (
    <SelectorBox>
      <SelectorLabel>Поле битвы</SelectorLabel>
      <Select id="battlefield" onChange={ onSelect }>
        <option value="cursedForest">Проклятые леса</option>
        <option value="deadLand">Мёртвая земля</option>
        <option value="hollyLand">Священная земля</option>
        <option value="magicForest">Волшебные леса</option>
        <option value="mountain">Горы</option>
        <option value="desert">Пустыня</option>
        <option value="forest">Лес</option> 
        <option value="steppe">Степь</option>
        <option value="mine">Подземелье</option>
      </Select>  
    </SelectorBox>
 
  )
}