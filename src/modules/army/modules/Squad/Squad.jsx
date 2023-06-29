//COMPONENTS
import UnitCard from "../../components/UnitCard/UnitCard";
//CoNSTS
import { UNITS } from "shared/utils/constants";
//STYLES
import { Container } from "./styles/Squad.styled";

function Squad() {
  return (
    <Container>
      {UNITS.map(unit => {
        return (
          <li key={unit}>
            <UnitCard unitName={unit} />
          </li>
        );
      })}
    </Container>
  );
}

export default Squad;
