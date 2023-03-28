import PropTypes from "prop-types";
//STORE
import useUnitStore from "../store/useUnitStore";

function useTroops(player, unitName) {
  const troops = useUnitStore(state => state[player]);
  const [unitData] = troops.filter(trooper => trooper.unit === unitName);
  return { troops, unitData };
}

export default useTroops;

useTroops.propTypes = {
  player: PropTypes.string.isRequired,
  unitName: PropTypes.string.isRequired,
};
