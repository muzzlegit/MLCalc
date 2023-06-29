//COMPONENTS
import TowersSelector from "modules/battlefield/components/TowersSelector/TowersSelector";
import TowersList from "modules/battlefield/components/TowersCard/TowersList";
//STYLES
import { Container, Cell } from "./styles/Towers.styled";

const Towers = () => {
  return (
    <Container>
      <Cell></Cell>
      <Cell>
        <TowersSelector />
      </Cell>
      <Cell>
        <TowersList />
      </Cell>
    </Container>
  );
};

export default Towers;
