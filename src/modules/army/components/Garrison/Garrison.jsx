//COMPONENTS
import GarrisonUnitCard from "../GarrisonUnitCard/GarrisonUnitCard";
//STORE
import useStore from "store/useStore";
//CONSTS
import { UNITS } from "shared/utils/constants";
//STYLES
import { Container } from "./styles/garrison.styled";

const Garrison = () => {
  const battlePlace = useStore(state => state.battlePlace);
  const { structure } = battlePlace;

  return (
    <>
      {structure === "castle" ? (
        <Container>
          {UNITS.map(unit => {
            return <GarrisonUnitCard key={unit} unitData={battlePlace[unit]} />;
          })}
        </Container>
      ) : null}
    </>
  );
};

export default Garrison;
