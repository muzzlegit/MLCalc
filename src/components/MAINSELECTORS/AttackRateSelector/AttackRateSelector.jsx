//HOOKS
import { useContext } from 'react';
import useAttackRateIndex from './hooks/useAttackRateIndex';
//CONTEXT
import PlayerContext from '../../../helpers/context.js';
//STyLES
import { SelectorBox, SelectorLabel, Select } from "./styles/AttackRateSelector.styled";

export default function AttackRateSelector() {
  const player = useContext( PlayerContext );
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