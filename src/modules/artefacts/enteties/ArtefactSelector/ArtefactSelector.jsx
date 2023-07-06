//COMPONENTS
import { ArtefactsDall, SelectedArtefact, ArtefactsList } from "modules/artefacts/components";

const ArtefactSelector = ({
  artefact,
  selectedPlace,
  changeSelectedArtefact,
  handleSelectedArtefact,
}) => {
  return (
    <div>
      <SelectedArtefact artefact={artefact} changeSelectedArtefact={changeSelectedArtefact} />
      <ArtefactsDall handleSelectedArtefact={handleSelectedArtefact} />
      <ArtefactsList place={selectedPlace} handleSelectedArtefact={handleSelectedArtefact} />
    </div>
  );
};

export default ArtefactSelector;
