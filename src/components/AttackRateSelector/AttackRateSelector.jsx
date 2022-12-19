import { useContext } from 'react';
//CONTEXT
import PlayerContext from '../../helpers/context';
//HOOKS
import useAttackRateIndex from '../../hooks/useAttackRateIndex';
//STyLES
import { SelectorBox, SelectorLabel, Select } from "./AttackRateSelector.styled";

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