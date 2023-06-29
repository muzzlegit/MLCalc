import { useState } from "react";
//COMPONENTS
import UnitCardImage from "../UnitCardImage/UnitCardImage";
import UnitCardInput from "../UnitCardInput/UnitCardInput";
import UnitCardLevel from "../UnitCardLevel/UnitCardLevel";
import UnitCardTitle from "../UnitCardTitle/UnitCardTitle";
import UnitCardProperty from "../UnitCardProperty/UnitCardProperty";
//HOOKS
import useUnit from "modules/army/hooks/useUnit";
//STYLES
import {
  Container,
  UnitWrap,
  PropertyesContainer,
  OnClickWrap,
  BlockClickWrap,
} from "./styles/GarrisonUnitCard.styled";

//CONSTS
const propertyes = ["amount", "attack", "defense", "health", "persecution", "resurrection"];

const GarrisonUnitCard = ({ unitName }) => {
  const { unitData } = useUnit(unitName);
  const { name, amount } = unitData;

  const [isPropertyesShow, setIsPropertyesShow] = useState(false);

  return (
    <Container boxShadow={Number(amount) && "active"}>
      <UnitWrap>
        {!isPropertyesShow ? (
          <>
            <OnClickWrap
              onClick={() => {
                setIsPropertyesShow(prev => !prev);
              }}
            >
              <BlockClickWrap>
                <UnitCardImage unitData={unitData} />
              </BlockClickWrap>
            </OnClickWrap>
            <UnitCardInput unitData={unitData} />
            <UnitCardLevel unitData={unitData} />
          </>
        ) : (
          <PropertyesContainer
            onClick={() => {
              setIsPropertyesShow(prev => !prev);
            }}
          >
            <UnitCardTitle title={name} />
            {propertyes.map(property => (
              <UnitCardProperty key={property} unitData={unitData} name={property} />
            ))}
          </PropertyesContainer>
        )}
      </UnitWrap>
    </Container>
  );
};

export default GarrisonUnitCard;
