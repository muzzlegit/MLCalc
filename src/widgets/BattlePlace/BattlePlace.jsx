//COMPONENTS
import { BattlefieldSelector, BattlefieldPicture, Towers } from "modules/battlefield";
import { Garrison, AttackRateSelector } from "modules/army";

//STYLES
import { Container, SelectorsBox, GarrisonBox } from "./styles/BattlePlace.styled";

function BattlePlace() {
  return (
    <Container>
      <Towers />
      <SelectorsBox>
        <BattlefieldSelector />
        <AttackRateSelector title="Уровень атаки гарнизона" />
      </SelectorsBox>
      <GarrisonBox>
        <BattlefieldPicture />
        <Garrison />
      </GarrisonBox>
    </Container>
  );
}

export default BattlePlace;
