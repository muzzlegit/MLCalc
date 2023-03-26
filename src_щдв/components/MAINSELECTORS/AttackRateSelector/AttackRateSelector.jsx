//HOOKS
import usePlayerContext from '../../../hooks/usePlayerContext.js';
import useAttackRateIndex from './hooks/useAttackRateIndex.js';
//STyLES
import { SelectorBox, SelectorLabel, Select } from "./styles/AttackRateSelector.styled";

export default function AttackRateSelector() {
  const player = usePlayerContext();
  const setRateAttack = useAttackRateIndex( player );

  return (
    <SelectorBox>
      <SelectorLabel>Уровень атаки</SelectorLabel>
        <Select id = "attackRate" onChange = { setRateAttack } >
          <option value = "Min" >MIN</option> 
          <option value = "Max" >MAX</option>
      </Select>
    </SelectorBox>
  )
};