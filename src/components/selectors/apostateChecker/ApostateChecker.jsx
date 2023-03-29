//HOOKS
import useApostate from "./hooks/useApostate";
//STYLES
import { CheckerBox, CheckerLabel } from "./styles/ApostateChecker.styled";

function ApostateChecker() {
  const { apostate, onApostateClick } = useApostate();
  return (
    <CheckerBox>
      <CheckerLabel>Отступник</CheckerLabel>
      <input type="checkbox" onClick={onApostateClick} />
    </CheckerBox>
  );
}

export default ApostateChecker;
