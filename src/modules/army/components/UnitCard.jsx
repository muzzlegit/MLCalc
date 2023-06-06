import PropTypes from "prop-types";
//HOOKS
import useUnit from "modules/army/hooks/useUnit";
import useUnitImg from "modules/army/hooks/useUnitImg";
import useUnitIcons from "modules/army/hooks/useUnitIcons";
//CONSTS
import { LIMITS } from "shared/utils/constants";

const UnitCard = ({ unitName }) => {
  const { unitDate, changeLevel, changeAmount } = useUnit(unitName);
  const {
    unit,
    name,
    level,
    amount,
    amountRate,
    attack,
    attackRate,
    defense,
    defenseLevel,
    health,
    healthRate,
    capacity,
    capacityRate,
    persecutionRate,
    resurrection,
    resurrectionRate,
    suppression,
    towersSuppression,
    towersSuppressionRate,
  } = unitDate;
  const { unitImg, unitFrame, unitRaceFrame } = useUnitImg(unit, level);
  const icons = useUnitIcons(unit);
  const { attackLimit, healthLimit, defenseLevelLimit, persecutionLimit } = LIMITS;

  return (
    <div className="p-1 w-[140px] h-full flex flex-col items-center gap-1 rounded bg-secondary">
      <p className="text-[10px] text-text">{name}</p>
      {/*---IMAGE BLOCK---*/}
      <div
        className=" relative w-[74px] h-[100px]  hover:cursor-pointer"
        id={unit}
        onClick={changeLevel}
      >
        {/*---FRAME IMAGE---*/}
        <div
          style={level === 4 ? { background: `${unitRaceFrame}` } : { background: `${unitFrame}` }}
          className={`absolute  z-20  w-full h-full flex justify-center items-center
          ${Number(amount) ? "grayscale-0" : "grayscale"}`}
        ></div>
        {/*---UNIT IMAGE---*/}
        <div
          style={{ background: `${unitImg}` }}
          className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[82px]
          ${Number(amount) ? "grayscale-0" : "grayscale"}`}
        ></div>
      </div>
      {/*---INPUT UNIT AMOUNT---*/}
      <input
        className="p-1 w-11/12 h-4 rounded text-center text-xs text-secondary outline-none"
        id={unit}
        type="text"
        autoComplete="off"
        placeholder="0"
        value={amount}
        onChange={e => {
          changeAmount(e.currentTarget.value);
        }}
      />
      {/*---PROPERTYES SECTION---*/}
      <div className="p-2 w-full flex flex-col justify-normal items-start gap-2">
        {/*---UNIT LEVEL---*/}
        <div className="w-full flex items-center gap-2">
          {/*---LEVEL IMAGE---*/}
          <div style={{ background: `${icons.unitIco}` }} className="w-[22px] h-[22px]"></div>
          {/*---LEVEL---*/}
          <p className="text-xs text-ligth">Уровень {level}</p>
        </div>
        {/*---PROPERTYES BOX---*/}
        {/*---AMOUNT---*/}
        <div title="Количество войск вступившик в бой" className="w-full flex items-center gap-2">
          <div style={{ background: `${icons.amount}` }} className="w-4 h-4"></div>
          <p className={`text-[10px] ${amountRate >= 0 ? "text-text" : "text-red"}`}>
            {new Intl.NumberFormat("ru-RU").format(Math.abs(Math.floor(amount * (1 + amountRate))))}
          </p>
          {amountRate ? <p className="text-[10px] text-red">{amountRate * 100}%</p> : null}
        </div>
        {/*---ATTACK---*/}
        <div title="Атака юнита" className="w-full flex items-center gap-2">
          <div style={{ background: `${icons.attack}` }} className="w-4 h-4"></div>
          <p className="text-[10px] text-text">{attack}</p>
          {attackRate ? (
            <p
              className={`text-[10px]  ${
                attackRate > 0
                  ? "text-green"
                  : attackRate >= attackLimit
                  ? "text-red"
                  : "text-orange"
              }`}
            >
              {attackRate > 0 ? "+" : ""}
              {attackRate >= attackLimit
                ? `${attackRate * 100}%`
                : `${attackLimit * 100}% (${attackRate * 100}%)`}
              {}
            </p>
          ) : null}
        </div>
        {/*---DEFENSE---*/}
        <div title="Защита юнита" className="w-full flex items-center gap-2">
          <div style={{ background: `${icons.defense}` }} className="w-4 h-4"></div>
          <p
            className={`text-[10px] ${
              defense > defenseLevel || defense < 0 ? "text-orange" : "text-text"
            }`}
          >
            {defenseLevel < 0
              ? 0
              : defense > defenseLevel
              ? defenseLevel
              : defense < 0
              ? 0
              : defense}
          </p>
          {defense > defenseLevel || defense < 0 ? (
            <p className="text-[10px] text-orange">{`(${defense})`}</p>
          ) : null}
        </div>
        {/*---HEALTH---*/}
        <div title="Здоровье юнита" className="w-full flex items-center gap-2">
          <div style={{ background: `${icons.health}` }} className="w-4 h-4"></div>
          <p className="text-[10px] text-text">{health}</p>
          {healthRate ? (
            <p
              className={`text-[10px]  ${
                healthRate > 0
                  ? "text-green"
                  : healthRate >= healthLimit
                  ? "text-red"
                  : "text-orange"
              }`}
            >
              {healthRate > 0 ? "+" : ""}
              {healthRate >= healthLimit
                ? `${healthRate * 100}%`
                : `${healthLimit * 100}% (${healthRate * 100}%)`}
              {}
            </p>
          ) : null}
        </div>
        {/*---DEFENSE LEVEL---*/}
        <div title="Предел максимальной защиты" className="w-full flex items-center gap-2">
          <div style={{ background: `${icons.defenseLevel}` }} className="w-4 h-4"></div>
          <p
            className={`text-[10px] ${
              defenseLevel > defenseLevelLimit || defenseLevel < 0 ? "text-orange" : "text-text"
            }`}
          >
            {defenseLevel > defenseLevelLimit
              ? defenseLevelLimit
              : defenseLevel < 0
              ? 0
              : defenseLevel}
          </p>
          {defenseLevel < 0 || defenseLevel > defenseLevelLimit ? (
            <p className="text-[10px] text-orange">
              {defenseLevel > defenseLevelLimit ? `(+${defenseLevel})` : `(${defenseLevel})`}
            </p>
          ) : null}
        </div>
        {/*---CAPACITY---*/}
        {capacity ? (
          <div title="Вместимость носильщика" className="w-full flex items-center gap-2">
            <div style={{ background: `${icons.capacity}` }} className="w-4 h-4"></div>
            <p className="text-[10px]  text-text">{capacity}</p>
            {capacityRate ? (
              <p className="text-[10px] text-green">{`(+${capacityRate * 100}%)`}</p>
            ) : null}
          </div>
        ) : null}
        {/*---PERSECUTION---*/}
        {persecutionRate ? (
          <div title="Преследование" className="w-full flex items-center gap-2">
            <div style={{ background: `${icons.persecution}` }} className="w-4 h-4"></div>

            <p
              className={`text-[10px]  ${
                persecutionRate > 0
                  ? "text-green"
                  : persecutionRate >= persecutionLimit
                  ? "text-red"
                  : "text-orange"
              }`}
            >
              {persecutionRate > 0 ? "+" : ""}
              {persecutionRate >= persecutionLimit
                ? `${persecutionRate * 100}%`
                : `${persecutionLimit * 100}% (${persecutionRate * 100}%)`}
              {}
            </p>
          </div>
        ) : null}
        {/*---RESURRECTION---*/}
        {resurrectionRate ? (
          <div
            title="Количество воскрешаемых юнитов 1 целителем"
            className="w-full flex items-center gap-2"
          >
            <div style={{ background: `${icons.resurrection}` }} className="w-4 h-4"></div>
            <p className="text-[10px] text-text">{resurrection}</p>
            <p className={`text-[10px]  ${resurrectionRate > 0 ? "text-green" : "text-red"}`}>
              {`${resurrectionRate > 0 ? "+" : ""} ${resurrectionRate * 100}`}%
            </p>
          </div>
        ) : null}
        {/*---SUPPRESSION---*/}
        {suppression ? (
          <div title="Подавление урона магами" className="w-full flex items-center gap-2">
            <div style={{ background: `${icons.suppression}` }} className="w-4 h-4"></div>
            <p className="text-[10px] text-text">{suppression}</p>
          </div>
        ) : null}
        {/*---TOWER_SUPPRESSION---*/}
        {towersSuppressionRate ? (
          <div
            title="Уменьшение урона от Башен и магических башен"
            className="w-full flex items-center gap-2"
          >
            <div style={{ background: `${icons.towersSuppression}` }} className="w-4 h-4"></div>
            <p className="text-[10px] text-text">{towersSuppression}</p>
            <p className={`text-[10px]  ${towersSuppressionRate > 0 ? "text-green" : "text-red"}`}>
              {`${towersSuppressionRate > 0 ? "+" : ""} ${towersSuppressionRate * 100}`}%
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UnitCard;

UnitCard.propTypes = {
  unitName: PropTypes.string.isRequired,
};
