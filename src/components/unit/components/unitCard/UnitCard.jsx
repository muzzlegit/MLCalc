import PropTypes from "prop-types";
import { nanoid } from "nanoid";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//COMPONENTS
import UnitInput from "shared/ui/unitInput/UnitInput";
//HOOKS
import useUnit from "components/unit/hooks/useUnit";
import useUnitImg from "components/unit/hooks/useUnitImg";
import useUnitIcons from "components/unit/hooks/useUnitIcons";
import useTroops from "components/unit/hooks/useTroops";
import useUnitsBuffs from "components/unit/hooks/useUnitsBuffs";
//HELPERS
import getUnitPropertyRate from "components/unit/helpers/getUnitPropertyRate";
import getUnitPropertyRateColor from "components/unit/helpers/getUnitPropertyRateColor";
import getUnitPropertyValue from "components/unit/helpers/getUnitPropertyValue";
import getUnitDefenseValueColor from "components/unit/helpers/getUnitDefenseValueColor";
//STYLES
import {
  UnitCardBox,
  UnitPicture,
  UnitFrame,
  UnitImg,
  UnitName,
  UnitPropertiesWrap,
  PropertyBox,
  PropertyRate,
  UnitProperty,
} from "./styles/UnitCard.styled";
import * as inputStyles from "./styles/unitInput.stuled";

const UnitCard = ({ unitName }) => {
  const player = usePlayerContext();
  const { unitData } = useTroops(player, unitName);
  const { unit, name, properties, level, enhancements } = unitData;
  const { onLevelClick, onAmountChange } = useUnit(player, unit);
  const { unitImg, unitFrame, unitRaceFrame } = useUnitImg(unit, level);
  const icons = useUnitIcons(unit);
  const [amount] = properties.filter(property => property.name === "amount");

  return (
    <UnitCardBox>
      <UnitName>{name}</UnitName>
      <UnitPicture onClick={onLevelClick}>
        <UnitFrame
          background={level === 4 ? unitRaceFrame : unitFrame}
          filter={Number(amount.value)}
        ></UnitFrame>
        <UnitImg background={unitImg} filter={Number(amount.value)}></UnitImg>
      </UnitPicture>
      <UnitInput value={amount.value} onInput={onAmountChange} styles={inputStyles} />
      <UnitPropertiesWrap>
        <UnitProperty width="22px" height="22px" background={icons.unitIco} color={"text"}>
          <strong> Уровень {level} </strong>
        </UnitProperty>
        {properties.map(property => {
          return (
            <PropertyBox key={nanoid()}>
              <UnitProperty
                title={property.description}
                width="16px"
                height="16px"
                background={icons[property.name]}
                color={getUnitDefenseValueColor(property.name, enhancements)}
              >
                {property.name === "amount"
                  ? new Intl.NumberFormat("ru-RU").format(
                      Math.floor(property.value * (1 + enhancements[property.name])),
                    )
                  : getUnitPropertyValue(property, enhancements)}
              </UnitProperty>
              {property.measure === "%" ? (
                <PropertyRate
                  color={getUnitPropertyRateColor(property.name, enhancements[property.name])}
                >
                  {getUnitPropertyRate(property, enhancements)}
                </PropertyRate>
              ) : null}
            </PropertyBox>
          );
        })}
      </UnitPropertiesWrap>
    </UnitCardBox>
  );
};

export default UnitCard;

UnitCard.propTypes = {
  unitName: PropTypes.string.isRequired,
};
