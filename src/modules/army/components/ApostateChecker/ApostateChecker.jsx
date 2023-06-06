//HOOKS
import useApostate from "../../hooks/useApostate";
//STYLES
import { Container, Label } from "./styles/ApostateChecker.styled";

function ApostateChecker() {
  const { changeApostate } = useApostate();
  return (
    <Container>
      <Label>Отступник</Label>
      <input type="checkbox" onClick={changeApostate} />
    </Container>
  );
}

export default ApostateChecker;
