//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//COMPONENTS
import { ArtCell } from "modules/artefacts/components";
//HOOKS

//STORE
import useStore from "store/useStore";
//CONSTS
import { DALL_CELLS } from "shared/utils/constants";
//STYLES
import { Container } from "./styles/ArtefactsDall.styled";

const ArtefactsDall = () => {
  return (
    <Container>
      {DALL_CELLS.map(cell => {
        return (
          <li key={cell.place}>
            <ArtCell cell={cell} />
          </li>
        );
      })}
    </Container>
  );
};

export default ArtefactsDall;
