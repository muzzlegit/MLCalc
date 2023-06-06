import PropTypes from "prop-types";
import { Squad, RaceSelector, AttackRateSelector, ApostateChecker } from "modules/army";
//STYLES
import { Container, Title } from "./styles/Player.styled";

function Player({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <div className="flex justify-between gap-4">
        <RaceSelector />
        <AttackRateSelector />
        <ApostateChecker />
      </div>
      <Squad />
    </Container>
  );
}

export default Player;

Player.propTypes = {
  title: PropTypes.string.isRequired,
};
