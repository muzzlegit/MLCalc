//HOOKS
import useRace from "modules/army/hooks/useRace";
//STYLES
import { Container, Label, Select, Option } from "./styles/RaceSelector.styled";

function RaceSelector() {
  const { сhangeRace, isMonstersShow } = useRace();

  return (
    <Container>
      <Label>Расса</Label>
      <Select
        id="race"
        onChange={e => {
          сhangeRace(e.target.value);
        }}
      >
        <Option value="undead">Нежить</Option>
        <Option value="demon">Демоны</Option>
        <Option value="drow">Темные эльфы</Option>
        <Option value="human">Рыцари</Option>
        <Option value="elf">Эльфы</Option>
        {isMonstersShow ? <Option value="monsters">Монстры</Option> : null}
      </Select>
    </Container>
  );
}

export default RaceSelector;
