//HOOKS
import useRace from "./hooks/useRace";
//STYLES
import { SelectorBox, SelectorLabel, Select, Option } from "./styles/RaceSelector.styled";
//CONSTS

function RaceSelector() {
  const { onRaceChange } = useRace();

  return (
    <SelectorBox>
      <SelectorLabel>Расса</SelectorLabel>
      <Select id="race" onChange={onRaceChange}>
        <Option value="undead">Нежить</Option>
        <Option value="demon">Демоны</Option>
        <Option value="drow">Темные эльфы</Option>
        <Option value="human">Рыцари</Option>
        <Option value="elf">Эльфы</Option>
        <Option value="monsters">Монстры</Option>
      </Select>
    </SelectorBox>
  );
}

export default RaceSelector;
