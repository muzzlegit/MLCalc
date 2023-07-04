import PropTypes from "prop-types";
//COMPONENTS
import { Modal } from "shared/components";
//MODULES
import { Squad, RaceSelector, AttackRateSelector, ApostateChecker } from "modules/army";
import { Hero, HeroDall, HeroSelector } from "modules/hero";
//HOOKS
import useModal from "shared/components/Modal/useModal";
//STYLES
import { Container, Title } from "./styles/Player.styled";

function Player({ title }) {
  const { isModal, toggleModal } = useModal();
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
          <HeroDall />
          <HeroSelector />
        </Modal>
      ) : null}
    </Container>
  );
}

export default Player;

Player.propTypes = {
  title: PropTypes.string.isRequired,
};
