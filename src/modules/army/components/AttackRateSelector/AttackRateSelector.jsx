//HOOKS
import useAttackRate from "modules/army/hooks/useAttackRate";
//STYLES
import { Container, Label, Select, Option } from "./styles/AttackRateSelector.styled";

function AttackRateSelector({ title }) {
  const { changeAttackRate } = useAttackRate();

  return (
    <Container>
      <Label>{title ?? "Уровень атаки"}</Label>
      <Select
        id="index"
        onChange={e => {
          changeAttackRate(e.target.value);
        }}
      >
        <Option value="Min">MIN</Option>
        <Option value="Max">MAX</Option>
      </Select>
    </Container>
  );
}

export default AttackRateSelector;
