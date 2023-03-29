import PropTypes from "prop-types";
//COMPONENTS
import { RaceSelector, AttackRateSelector, ApostateChecker } from "components/selectors";
//STYLES
import { SelectorsWrap } from "./styles/PlayerSelectors.styled";

function PlayerSelectors() {
  return (
    <SelectorsWrap>
      <RaceSelector />
      <AttackRateSelector />
      <ApostateChecker />
    </SelectorsWrap>
  );
}

export default PlayerSelectors;

PlayerSelectors.propTypes = {};
