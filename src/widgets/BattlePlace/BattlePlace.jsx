//COMPONENTS
import {
  BattlefieldSelector,
  BattlefieldPicture,
  TowersSelector,
  TowersList,
} from "modules/battlefield";
import { Garrison, AttackRateSelector } from "modules/army";

//STYLES
import { Container } from "./styles/BattlePlace.styled";

function BattlePlace() {
  return (
    <Container className="my-2 p-3 rounded-lg bg-primary">
      <TowersSelector />
      <BattlefieldSelector />
      <AttackRateSelector title="Уровень атаки гарнизона" />
      <BattlefieldPicture />
      <TowersList />
      {/* <Garrison /> */}
    </Container>
  );
}

export default BattlePlace;
