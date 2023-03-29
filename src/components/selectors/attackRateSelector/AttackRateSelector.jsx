//HOOKS
import useAttackRate from "./hooks/useAttackRate";
//STYLES
import { SelectorBox, SelectorLabel, Select, Option } from "./styles/AttackRateSelector.styled";

function AttackRateSelector() {
  const { onAttackRateChange } = useAttackRate();

  return (
    <SelectorBox>
      <SelectorLabel>"Уровень атаки</SelectorLabel>
      <Select id="index" onChange={onAttackRateChange}>
        <Option value="Min">MIN</Option>
        <Option value="Max">MAX</Option>
      </Select>
    </SelectorBox>
  );
}

export default AttackRateSelector;
