//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//COMPONENTS
import UnitInput from "shared/ui/unitInput/UnitInput";
//HOOKS
import useUnit from "modules/unit/hooks/useUnit";
import useUnitImg from "modules/unit/hooks/useUnitImg";
import useUnitIcons from "modules/unit/hooks/useUnitIcons";
//STYLES
import {
  UnitCardBox,
  UnitPicture,
  UnitFrame,
  UnitImg,
  UnitName,
  UnitPropertiesWrap,
  UnitProperty,
} from "./styles/UnitCard.styled";
import * as inputStyles from "./styles/unitInput.stuled";
import useTroops from "modules/unit/hooks/useTroops";

const UnitCard = ({ unitName }) => {
  const player = usePlayerContext();
  const { unitData } = useTroops(player, unitName);
  const { race, unit, name, properties, level } = unitData;
  const { onLevelClick, onAmountChange } = useUnit(player, unit, race);
  const { unitImg, unitFrame, unitRaceFrame } = useUnitImg(race, unit, level);
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
        <UnitProperty width="22px" height="22px" background={icons.unitIco}>
          Уровень {level}
        </UnitProperty>
        {properties.map(property => {
          return (
            <UnitProperty
              key={property.name}
              title={property.description}
              width="16px"
              height="16px"
              background={icons[property.name]}
            >
              {property.name === "amount"
                ? new Intl.NumberFormat("ru-RU").format(property.value)
                : property.value}
            </UnitProperty>
          );
        })}
      </UnitPropertiesWrap>
    </UnitCardBox>

    // <UnitCardBox>

    //   <PropertiesWrap>
    //     <UnitCardInput
    //       type="text"
    //       autoComplete="off"
    //       autoFocus
    //       placeholder="0"
    //       value={amount}
    //       onChange={onAmountChange}
    //     />
    //     <UnitProperty background={unitIcon}>{level}</UnitProperty>
    //     <UnitProperty background={attackIcon}>
    //       {attack}
    //       <AddValue color={attackRate > 0 ? "#08f169" : "#bb0a01"}>
    //         {attackRate > 0
    //           ? "+" + Math.floor(attackRate * 100) + "%"
    //           : attackRate < 0
    //           ? Math.floor(attackRate * 100) + "%"
    //           : null}
    //       </AddValue>
    //     </UnitProperty>
    //     <UnitProperty background={defenseIcon}>
    //       <AddValue color={defense < 0 ? "#f7ad0e" : "#ddddbd"}>
    //         {defense < 0 ? 0 : defense}
    //       </AddValue>
    //     </UnitProperty>
    //     <UnitProperty background={healthIcon}>
    //       {health}
    //       <AddValue
    //         color={
    //           healthRate > 0
    //             ? "#08f169"
    //             : healthRate < 0 && healthRate > -0.75
    //             ? "#bb0a01"
    //             : "#f7ad0e"
    //         }
    //       >
    //         {healthRate > 0
    //           ? "+" + Math.floor(healthRate * 100) + "%"
    //           : healthRate < 0
    //           ? Math.floor(healthRate * 100) + "%"
    //           : null}
    //       </AddValue>
    //     </UnitProperty>
    //     <UnitProperty background={persecutorIcon}>
    //       <AddValue color={"#08f169"}>
    //         {persecutionRate > 0
    //           ? "+" + Math.floor(persecutionRate * 100) + "%"
    //           : persecutionRate < 0
    //           ? Math.floor(persecutionRate * 100) + "%"
    //           : null}
    //       </AddValue>
    //     </UnitProperty>
    //   </PropertiesWrap>
    // </UnitCardBox>
  );
};

export default UnitCard;
