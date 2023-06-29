//COMPONENTS
import GarrisonUnitCard from "../../components/GarrisonUnitCard/GarrisonUnitCard";
//STORE
import useStore from "store/useStore";
//CONSTS
import { UNITS } from "shared/utils/constants";
//STYLES
import { Container } from "./styles/garrison.styled";

const Garrison = () => {
  const structure = useStore(state => state.battlePlace.structure);

  return (
    <Container isActive={structure === "castle" && "active"}>
      {UNITS.map(unit => {
        return (
          <li key={unit}>
            <GarrisonUnitCard unitName={unit} />
          </li>
        );
      })}
    </Container>
  );
};

export default Garrison;
