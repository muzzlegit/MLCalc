//COMPONENTS
import { BattlefieldSelector, BattlefieldPicture } from "modules/battlefield";
//HOOKS
import useBattlefield from "modules/battlefield/hooks/useBattlefield";
//STYLES
import { Container } from "./styles/BattlePlace.styled";

function BattlePlace() {
  useBattlefield();
  return (
    <Container className="my-2 p-3 rounded-lg bg-primary">
      <BattlefieldSelector />
      <BattlefieldPicture />
    </Container>
  );
}

export default BattlePlace;
