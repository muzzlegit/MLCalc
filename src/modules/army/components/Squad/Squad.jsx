//COMPONENTS
import UnitCard from "../UnitCard/UnitCard";
//HOOKS
import usePlayerContext from "shared/hooks/usePlayerContext";
import useUnit from "modules/army/hooks/useUnit";
//STORE
import useStore from "store/useStore";
//CoNSTS
import { UNITS } from "shared/utils/constants";
//STYLES
import { Container } from "./styles/Squad.styled";

function Squad() {
  const player = usePlayerContext();
  const playerData = useStore(state => state[player]);
  const { changeLevel, changeAmount } = useUnit("porter");
  return (
    <Container>
      {UNITS.map(unit => {
        return (
          <li key={unit}>
            <UnitCard
              unitData={playerData[unit]}
              changeLevel={changeLevel}
              changeAmount={changeAmount}
            />
          </li>
        );
      })}
    </Container>
  );
}

export default Squad;
