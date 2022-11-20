//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//STyLES
import { SelectorBox, SelectorLabel, Select } from "./AttackRateSelector.styled";

export default function AttackRateSelector({role}) {
  const [playerData, playerFunctions] = usePlayerStoreData(role);

  //HaNDLE FUNCTIONS
  const onSelect = (e) => {
      let attackRate = e.target.value;
      playerFunctions.setRateAttack(attackRate);
  }
  
  return (
    <SelectorBox>
      <SelectorLabel>Уровень атаки</SelectorLabel>
        <Select id="attackRate" onChange={ onSelect }>
          <option value="Min">MIN</option> 
          <option value="Max">MAX</option>
      </Select>
    </SelectorBox>
  )
}