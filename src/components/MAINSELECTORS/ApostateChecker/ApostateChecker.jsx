//HOOKS
import { useContext } from 'react';
import useApostateChecker from './hooks/useApostateChecker.js';
//CONTEXT
import PlayerContext from '../../../helpers/context';
//STYLES
import { CheckerBox, CheckerLabel } from "./styles/ApostateChecker.styled";

export default function ApostateChecker() {
  const player = useContext( PlayerContext );
  const setApostateValue = useApostateChecker( player );

  return (
    <CheckerBox>
      <CheckerLabel>Отступник</CheckerLabel>
      <input 
        type = "checkbox"
        onClick = { setApostateValue }
      />
    </CheckerBox>
  )
};