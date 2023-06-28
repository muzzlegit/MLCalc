//HOOKS
import useUnitIcons from "modules/army/hooks/useUnitIcons";
//STYLES
import { Container, Level, PropertyIcon } from "./styles/UnitCardLevel.styled";

const UnitCardLevel = ({ unitData }) => {
  const { unit, level } = unitData;
  const icons = useUnitIcons(unit);

  return (
    <Container>
      <PropertyIcon background={icons.unitIco}></PropertyIcon>
      <Level>Уровень {level}</Level>
    </Container>
  );
};

export default UnitCardLevel;
