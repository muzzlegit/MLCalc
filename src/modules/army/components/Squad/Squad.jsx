import { nanoid } from "nanoid";
//COMPONENTS
import UnitCard from "../UnitCard/UnitCard";
//STYLES
import { Container } from "./styles/Squad.styled";
//CoNSTS
import { UNITS } from "shared/utils/constants";

function Squad() {
  return (
    <Container>
      {UNITS.map(trooper => {
        return (
          <li key={nanoid()}>
            <UnitCard unitName={trooper} />
          </li>
        );
      })}
    </Container>
  );
}

export default Squad;
