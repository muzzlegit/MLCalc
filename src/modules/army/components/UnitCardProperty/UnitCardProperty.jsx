//HOOKS
import useUnitIcons from "modules/army/hooks/useUnitIcons";
//CONSTS
import { LIMITS } from "shared/utils/constants";
//STYLES
import { PropertyBox, PropertyIcon, PropertyValue } from "./styles/UnitCardProperty.styled";
import theme from "shared/utils/theme";

const UnitCardProperty = ({ unitData, name }) => {
  const { unit, defenseLevel } = unitData;
  const property = unitData[name];
  const propertyRate = unitData[`${name}Rate`];
  const icons = useUnitIcons(unit);
  const { attackLimit, healthLimit, defenseLevelLimit, persecutionLimit } = LIMITS;
  if (name === "defense") console.log(property);
  switch (name) {
    case "amount":
      return (
        <PropertyBox title="Количество войск вступившик в бой">
          <PropertyIcon background={icons[name]}></PropertyIcon>
          <PropertyValue
            color={propertyRate < 0 && property ? theme.colors.orange : theme.colors.text}
          >
            {new Intl.NumberFormat("ru-RU").format(
              Math.abs(Math.floor(property * (1 + propertyRate))),
            )}
          </PropertyValue>
          {propertyRate ? (
            <PropertyValue color={theme.colors.red}>{propertyRate * 100}%</PropertyValue>
          ) : null}
        </PropertyBox>
      );
    case "attack":
      return (
        <PropertyBox title="Атака юнита">
          <PropertyIcon background={icons[name]}></PropertyIcon>
          <PropertyValue>{property}</PropertyValue>
          {propertyRate ? (
            <PropertyValue
              color={
                propertyRate > 0
                  ? theme.colors.green
                  : propertyRate >= attackLimit
                  ? theme.colors.red
                  : theme.colors.orange
              }
            >
              {propertyRate > 0 ? "+" : ""}
              {propertyRate >= attackLimit
                ? `${propertyRate * 100}%`
                : `${attackLimit * 100}% (${propertyRate * 100}%)`}
              {}
            </PropertyValue>
          ) : null}
        </PropertyBox>
      );
    case "defense":
      return (
        <PropertyBox title="Защита юнита">
          <PropertyIcon background={icons[name]}></PropertyIcon>
          <PropertyValue
            color={
              property > defenseLevel || property < 0 ? theme.colors.orange : theme.colors.text
            }
          >
            {propertyRate < 0
              ? 0
              : property > defenseLevel
              ? defenseLevel
              : property < 0
              ? 0
              : property}
          </PropertyValue>
          {property > defenseLevel || property < 0 ? (
            <PropertyValue color={theme.colors.orange}>{`(${property})`}</PropertyValue>
          ) : null}
        </PropertyBox>
      );
    case "health":
      return (
        <PropertyBox title="Здоровье юнита">
          <PropertyIcon background={icons[name]}></PropertyIcon>
          <PropertyValue>{property}</PropertyValue>
          {propertyRate ? (
            <PropertyValue
              color={
                propertyRate > 0
                  ? theme.colors.green
                  : propertyRate >= healthLimit
                  ? theme.colors.red
                  : theme.colors.orange
              }
            >
              {propertyRate > 0 ? "+" : ""}
              {propertyRate >= healthLimit
                ? `${propertyRate * 100}%`
                : `${healthLimit * 100}% (${propertyRate * 100}%)`}
              {}
            </PropertyValue>
          ) : null}
        </PropertyBox>
      );
    case "defenseLevel":
      return (
        <PropertyBox title="Предел максимальной защиты">
          <PropertyIcon background={icons[name]}></PropertyIcon>
          <PropertyValue
            color={
              property > defenseLevelLimit || property < 0 ? theme.colors.orange : theme.colors.text
            }
          >
            {property > defenseLevelLimit ? defenseLevelLimit : property < 0 ? 0 : property}
          </PropertyValue>
          {property < 0 || property > defenseLevelLimit ? (
            <PropertyValue color={theme.colors.orange}>
              {property > defenseLevelLimit ? `(+${property})` : `(${property})`}
            </PropertyValue>
          ) : null}
        </PropertyBox>
      );
    case "capacity":
      return (
        <>
          {property ? (
            <PropertyBox title="Вместимость носильщика">
              <PropertyIcon background={icons[name]}></PropertyIcon>
              <PropertyValue color={theme.colors.text}>{property}</PropertyValue>
              {propertyRate ? (
                <PropertyValue color={theme.colors.green}>{`(+${
                  propertyRate * 100
                }%)`}</PropertyValue>
              ) : null}
            </PropertyBox>
          ) : null}
        </>
      );
    case "persecution":
      return (
        <>
          {propertyRate || propertyRate === 0 ? (
            <PropertyBox title="Преследование" className="w-full flex items-center gap-2">
              <PropertyIcon background={icons[name]}></PropertyIcon>
              {propertyRate ? (
                <PropertyValue
                  color={
                    propertyRate > 0
                      ? theme.colors.green
                      : propertyRate >= persecutionLimit
                      ? theme.colors.red
                      : theme.colors.orange
                  }
                >
                  {propertyRate > 0 ? "+" : ""}
                  {propertyRate >= persecutionLimit
                    ? `${propertyRate * 100}%`
                    : `${persecutionLimit * 100}% (${propertyRate * 100}%)`}
                </PropertyValue>
              ) : null}
            </PropertyBox>
          ) : null}
        </>
      );
    case "resurrection":
      return (
        <>
          {propertyRate || propertyRate === 0 ? (
            <PropertyBox title="Количество воскрешаемых юнитов 1 целителем">
              <PropertyIcon background={icons[name]}></PropertyIcon>
              <PropertyValue>{property}</PropertyValue>
              {propertyRate ? (
                <PropertyValue color={propertyRate > 0 ? theme.colors.green : theme.colors.red}>
                  {`${propertyRate > 0 ? "+" : ""} ${propertyRate * 100}`}%
                </PropertyValue>
              ) : null}
            </PropertyBox>
          ) : null}
        </>
      );
    case "suppression":
      return (
        <>
          {property || property === 0 ? (
            <PropertyBox title="Подавление урона магами">
              <PropertyIcon background={icons[name]}></PropertyIcon>
              <PropertyValue>{property}</PropertyValue>
            </PropertyBox>
          ) : null}
        </>
      );
    case "towersSuppression":
      return (
        <>
          {propertyRate || propertyRate === 0 ? (
            <PropertyBox title="Уменьшение урона от Башен и магических башен">
              <PropertyIcon background={icons[name]}></PropertyIcon>
              <PropertyValue>{property}</PropertyValue>
              {propertyRate ? (
                <PropertyValue color={propertyRate > 0 ? theme.colors.green : theme.colors.red}>
                  {`${propertyRate > 0 ? "+" : ""} ${propertyRate * 100}`}%
                </PropertyValue>
              ) : null}
            </PropertyBox>
          ) : null}
        </>
      );
    default:
      break;
  }
};

export default UnitCardProperty;
