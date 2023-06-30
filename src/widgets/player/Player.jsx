import PropTypes from "prop-types";
import { Squad, RaceSelector, AttackRateSelector, ApostateChecker } from "modules/army";
import { Hero } from "modules/hero";
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
      <div className="flex gap-4">
        <Hero />
        <Squad />
      </div>
    </Container>
  );
}

export default Player;

Player.propTypes = {
  title: PropTypes.string.isRequired,
};
