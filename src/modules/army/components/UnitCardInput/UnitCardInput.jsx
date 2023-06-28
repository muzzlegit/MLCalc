//HOOKS
import useUnit from "modules/army/hooks/useUnit";
//STYLES
import { Input } from "./styles/UnitCardInput.styled";

const UnitCardInput = ({ unitData }) => {
  const { unit, amount } = unitData;
  const { changeAmount } = useUnit(unit);
  return (
    <Input
      id={unit}
      type="text"
      autoComplete="off"
      placeholder="0"
      value={amount}
      onChange={e => {
        changeAmount(e.currentTarget.value);
      }}
    />
  );
};

export default UnitCardInput;
