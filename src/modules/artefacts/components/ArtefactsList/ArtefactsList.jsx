//HOOKS
import { useArtefact, useArtefactsImg } from "modules/artefacts/hooks";
//STYLES
import { Container, ArtefactImg } from "./styles/ArtefactsList.styled";

const ArtefactsList = ({ artefact, place, filter, handleSelectedArtefact }) => {
  const { getArtefactsByPlace } = useArtefact();
  const { getArtefactImage } = useArtefactsImg();

  return (
    <Container>
      {getArtefactsByPlace(place)
        .filter(item => {
          if (filter === "Все" && artefact?.id !== item.id) return item;
          if (filter !== "Все" && item.level === Number(filter) && artefact?.id !== item.id)
            return item;
          return null;
        })
        .map(artefact => (
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
