//COMPONENTS
import { BattlefieldSelector, BattlefieldPicture, Towers } from "modules/battlefield";
import { Garrison, AttackRateSelector } from "modules/army";

//STYLES
import { Container } from "./styles/BattlePlace.styled";

function BattlePlace() {
  return (
    <Container className="my-2 p-3 rounded-lg bg-primary">
      <Towers />
      <BattlefieldSelector />
      <AttackRateSelector title="Уровень атаки гарнизона" />
      <BattlefieldPicture />
      {/* <Garrison /> */}
    </Container>
  );
}

export default BattlePlace;
