//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//STyLES
import { SelectorBox, SelectorLabel } from "./AttackRateSelector.styled";

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
        <select id="attackRate" onChange={ onSelect }>
        <option value="Min">MIN</option> 
        <option value="Max">MAX</option>
      </select>
    </SelectorBox>
  )
}