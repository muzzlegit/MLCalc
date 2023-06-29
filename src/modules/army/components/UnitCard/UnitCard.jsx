//COMPONENTS
import UnitCardTitle from "../UnitCardTitle/UnitCardTitle";
import UnitCardImage from "../UnitCardImage/UnitCardImage";
import UnitCardInput from "../UnitCardInput/UnitCardInput";
import UnitCardLevel from "../UnitCardLevel/UnitCardLevel";
import UnitCardProperty from "../UnitCardProperty/UnitCardProperty";
//STYLes
import { Container, PropertyesContainer } from "./styles/UnitCard.styled";
import useUnit from "modules/army/hooks/useUnit";

//CONSTS
const propertyes = [
  "amount",
  "attack",
  "defense",
  "health",
  "defenseLevel",
  "capacity",
  "persecution",
  "resurrection",
  "suppression",
  "towersSuppression",
];

const UnitCard = ({ unitName }) => {
  const { unitData } = useUnit(unitName);
  const { amount, name } = unitData;

  return (
    <Container boxShadow={Number(amount) && "active"}>
      <UnitCardTitle title={name} />
      <UnitCardImage unitData={unitData} />
      <UnitCardInput unitData={unitData} />
      <PropertyesContainer>
        <UnitCardLevel unitData={unitData} />
        {propertyes.map(property => (
          <UnitCardProperty key={property} unitData={unitData} name={property} />
        ))}
      </PropertyesContainer>
    </Container>
  );
};

export default UnitCard;
