//HOOKS
import usePlayerContext from '../../../hooks/usePlayerContext.js';
import useApostateChecker from './hooks/useApostateChecker.js';
//STYLES
import { CheckerBox, CheckerLabel } from "./styles/ApostateChecker.styled";

export default function ApostateChecker() {
  const player = usePlayerContext();
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