//HOOKS
import { useArtefact, useArtefactsImg } from "modules/artefacts/hooks";
//STYLES
import { Container, ArtefactImg } from "./styles/ArtefactsList.styled";

const ArtefactsList = ({ place, handleSelectedArtefact }) => {
  const { getArtefactsByPlace } = useArtefact();
  const { getArtefactImage } = useArtefactsImg();

  return (
    <Container>
      {getArtefactsByPlace(place).map(artefact => (
        <ArtefactImg
          key={artefact.id}
          onClick={() => {
            handleSelectedArtefact(null, artefact);
          }}
          background={getArtefactImage(artefact.name)}
        />
      ))}
    </Container>
  );
};

export default ArtefactsList;
