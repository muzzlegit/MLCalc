//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//HOOKS
import { useArtefactsImg } from "modules/artefacts/hooks";
//STORE
import useStore from "store/useStore";
//STYLES
import { Container, ArtefactBg, ArtefactImg } from "./styles/ArtCell.styled";

const ArtCell = ({ cell }) => {
  const player = usePlayerContext();
  const artefacts = useStore(state => state[player].artefacts);
  const { getArtefactImage } = useArtefactsImg();

  const { top, left, place } = cell;
  const artefact = artefacts[place];

  return (
    <Container background={getArtefactImage("artCell")} top={top} left={left}>
      {artefacts[place] ? (
        <ArtefactBg backgroundColor={artefact.ancient ? "orange" : null}>
          <ArtefactImg background={getArtefactImage(artefact.name)} />{" "}
        </ArtefactBg>
      ) : null}
    </Container>
  );
};

export default ArtCell;
