//HOOKS
import useBattlefield from "../../hooks/useBattlefield";
//STYLES
import { SelectorBox, SelectorLabel, Select } from "./BattlefieldSelector.styled";

export default function BattlefieldSelector() {
  const setBattlefield = useBattlefield( "cursedForest" );

  return (
    <SelectorBox>
      <SelectorLabel>Поле битвы</SelectorLabel>
      <Select id = "battlefield" onChange = { setBattlefield } >
        <option value = "cursedForest" >Проклятые леса</option>
        <option value = "deadLand" >Мёртвая земля</option>
        <option value = "hollyLand" >Священная земля</option>
        <option value = "magicForest" >Волшебные леса</option>
        <option value = "mountain" >Горы</option>
        <option value = "desert" >Пустыня</option>
        <option value = "forest" >Лес</option> 
        <option value = "steppe" >Степь</option>
        <option value = "mine" >Подземелье</option>
      </Select>  
    </SelectorBox>
 
  )
}