//HOOKS
import usePlayerStoreFunctions from "../../hooks/usePlayerStoreFunctions";
//STyLES
import { SelectorBox, SelectorLabel, Select } from "./AttackRateSelector.styled";

export default function AttackRateSelector({ player }) {
  const playerFunctions = usePlayerStoreFunctions(player);

  //HaNDLE FUNCTIONS
  const onSelect = (e) => {
      let attackRate = e.target.value;
      playerFunctions.setRateAttack( attackRate );
  }
  
  return (
    <SelectorBox>
      <SelectorLabel>Уровень атаки</SelectorLabel>
        <Select id = "attackRate" onChange = { onSelect } >
          <option value = "Min" >MIN</option> 
          <option value = "Max" >MAX</option>
      </Select>
    </SelectorBox>
  )
}