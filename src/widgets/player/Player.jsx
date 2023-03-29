import PropTypes from "prop-types";
import { PlayerSelectors, Squad } from "modules";
//STYLES
import { PlayerWrap, PlayerTitle } from "./styles/Player.styled";

function Player({ title }) {
  return (
    <PlayerWrap>
      <PlayerTitle>{title}</PlayerTitle>
      <PlayerSelectors />
      <Squad />
    </PlayerWrap>
  );
}

export default Player;

Player.propTypes = {
  title: PropTypes.string.isRequired,
};
