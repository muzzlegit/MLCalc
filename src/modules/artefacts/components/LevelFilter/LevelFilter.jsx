//STYLES
import { Container, LevelBtn } from "./styles/LevelFilter.styled";
//CONSTS
const LEVELS = ["Все", "1", "2", "3", "4", "5"];

const LevelFilter = ({ filter, handleFilter }) => {
  return (
    <Container>
      {LEVELS.map(level => (
        <LevelBtn
          key={level}
          id={level}
          isActive={level === filter ? "true" : null}
          onClick={handleFilter}
        >
          {level}
        </LevelBtn>
      ))}
    </Container>
  );
};

export default LevelFilter;
