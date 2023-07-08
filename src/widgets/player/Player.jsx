import PropTypes from "prop-types";
//COMPONENTS
import { Modal } from "shared/components";
//MODULES
import { Squad, RaceSelector, AttackRateSelector, ApostateChecker } from "modules/army";
import { ArtefactSelector } from "modules/artefacts/enteties";
import { Hero, HeroSelector } from "modules/hero";
//HOOKS
import useModal from "shared/components/Modal/useModal";
import { useArtefactSelector } from "modules/artefacts/hooks";
//STYLES
import { Container, Title } from "./styles/Player.styled";

function Player({ title }) {
  const { isModal, toggleModal } = useModal();
  const {
    selectedArtefact,
    selectedPlace,
    isArtefactChanged,
    apllySelectedArtefact,
    handleSelectedArtefact,
    changeSelectedArtefact,
  } = useArtefactSelector();

  return (
    <Container>
      <Title>{title}</Title>
      <div className="flex justify-between gap-4">
        <RaceSelector />
        <AttackRateSelector />
        <ApostateChecker />
      </div>
      <div className="flex gap-4">
        <Hero toggleModal={toggleModal} />
        <Squad />
      </div>
      {isModal ? (
        <Modal>
          <div className="flex">
            <ArtefactSelector
              artefact={selectedArtefact}
              selectedPlace={selectedPlace}
              isArtefactChanged={isArtefactChanged}
              changeSelectedArtefact={changeSelectedArtefact}
              handleSelectedArtefact={handleSelectedArtefact}
              apllySelectedArtefact={apllySelectedArtefact}
            />
            {/* <HeroSelector /> */}
          </div>
        </Modal>
      ) : null}
    </Container>
  );
}

export default Player;

Player.propTypes = {
  title: PropTypes.string.isRequired,
};
