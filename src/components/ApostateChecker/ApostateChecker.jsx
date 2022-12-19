import { useContext } from 'react';
//CONTEXT
import PlayerContext from '../../helpers/context';
//HOOKS
import useApostateChecker from '../../hooks/useApostateChecker';
//STYLES
import { CheckerBox, CheckerLabel } from "./ApostateChecker.styled";

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