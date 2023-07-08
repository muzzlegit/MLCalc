//COMPONENTS
import {
  ArtefactsDall,
  SelectedArtefact,
  ArtefactsList,
  LevelFilter,
} from "modules/artefacts/components";
//HOOKS
import { useArtefactFilter } from "modules/artefacts/hooks";
//STYLES
import { Container, ListWrap, SelectorWrap } from "./styles/ArtefactSelector.styled";

const ArtefactSelector = ({
  artefact,
  selectedPlace,
  isArtefactChanged,
  handleSelectedArtefact,
  changeSelectedArtefact,
  apllySelectedArtefact,
}) => {
  const { filter, handleFilter } = useArtefactFilter();

  return (
    <Container>
      <SelectorWrap>
        <SelectedArtefact
          artefact={artefact}
          isArtefactChanged={isArtefactChanged}
          changeSelectedArtefact={changeSelectedArtefact}
          apllySelectedArtefact={apllySelectedArtefact}
        />
        <ListWrap>
          <LevelFilter filter={filter} handleFilter={handleFilter} />
          <ArtefactsList
            artefact={artefact}
            place={selectedPlace}
            filter={filter}
            handleSelectedArtefact={handleSelectedArtefact}
          />
        </ListWrap>
      </SelectorWrap>

      <ArtefactsDall handleSelectedArtefact={handleSelectedArtefact} />
    </Container>
  );
};

export default ArtefactSelector;
