import PropTypes from "prop-types";
import { nanoid } from "nanoid";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//COMPONENTS
import UnitInput from "shared/ui/unitInput/UnitInput";
//HOOKS
import useUnit from "modules/unit/hooks/useUnit";
import useUnitImg from "modules/unit/hooks/useUnitImg";
import useUnitIcons from "modules/unit/hooks/useUnitIcons";
import useTroops from "modules/unit/hooks/useTroops";
import useUnitsBuffs from "modules/unit/hooks/useUnitsBuffs";
//HELPERS
import getUnitPropertyRate from "modules/unit/helpers/getUnitPropertyRate";
import getUnitPropertyRateColor from "modules/unit/helpers/getUnitPropertyRateColor";
import getUnitPropertyValue from "modules/unit/helpers/getUnitPropertyValue";
import getUnitDefenseValueColor from "modules/unit/helpers/getUnitDefenseValueColor";
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
          Уровень {level}
        </UnitProperty>
        {properties.map(property => {
          return (
            <PropertyBox key={nanoid()}>
              <UnitProperty
                title={property.description}
                width="16px"
                height="16px"
                background={icons[property.name]}
                color={
                  property.name === "defense"
                    ? getUnitDefenseValueColor(property.value, properties)
                    : "text"
                }
              >
                {property.name === "amount"
                  ? new Intl.NumberFormat("ru-RU").format(
                      property.value * (1 + enhancements[property.name]),
                    )
                  : getUnitPropertyValue(property, enhancements)}
              </UnitProperty>
              {property.measure === "%" ? (
                <PropertyRate color={getUnitPropertyRateColor(property.name, property.rate)}>
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
