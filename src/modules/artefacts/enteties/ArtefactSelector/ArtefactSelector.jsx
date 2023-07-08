//COMPONENTS
import {
  ArtefactsDall,
  SelectedArtefact,
  ArtefactsList,
  LevelFilter,
  KitsSelector,
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
  deleteArtefact,
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
        <KitsSelector />
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

      <ArtefactsDall
        handleSelectedArtefact={handleSelectedArtefact}
        deleteArtefact={deleteArtefact}
      />
    </Container>
  );
};

export default ArtefactSelector;
