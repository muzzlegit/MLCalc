import PropTypes from "prop-types";
//STORE
import useBuffsStore from "../store/useBuffsStore";
//HOOKS
import usePlayerContext from "shared/hooks/usePlayerContext";

function useBuffsStorage() {
  const player = usePlayerContext();
  const buffsStorage = useBuffsStore(state => state[player]);
  const addBuff = useBuffsStore(state => state.functions.addBuff);
  const removeBuff = useBuffsStore(state => state.functions.removeBuff);

  const addBuffToStorage = (player, buffs) => {
    buffs.forEach(buff => {
      addBuff(player, buff);
    });
  };
  const removeBuffFromStorage = (player, buffs) => {
    buffs.forEach(buff => {
      removeBuff(player, buff);
    });
  };

  return { buffsStorage, addBuffToStorage, removeBuffFromStorage };
}

export default useBuffsStorage;

useBuffsStorage.propTypes = {
  player: PropTypes.string.isRequired,
};
