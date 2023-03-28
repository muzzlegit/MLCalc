import PropTypes from "prop-types";
//COMPONENTS
import RaceSelector from "modules/raceSelector/RaceSelector";
//STYLES
import { SelectorsWrap } from "./styles/PlayerSelectors.styled";

function PlayerSelectors() {
  return (
    <SelectorsWrap>
      <RaceSelector />
    </SelectorsWrap>
  );
}

export default PlayerSelectors;

PlayerSelectors.propTypes = {};
