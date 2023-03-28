import PropTypes from "prop-types";
//STORE
import useBuffsStore from "../store/useBuffsStore";
//CONSTS
const defaultDefenseLevel = {
  id: "nRC1VO01ZEqP0V1t8Eq5_g",
  source: "nRC1VO01ZEqP0V1t8Eq5_g",
  character: "default",
  player: "mainAttacker",
  target: "player",
  appliedOn: "all",
  unit: "units",
  units: ["porter", "swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
  property: "defenseLevel",
  measure: "number",
  value: 50,
  description: "Дефолтный предел защиты",
};

function useBuffsStorage(player) {
  const buffsStorage = useBuffsStore(state => state[player]);
  const addBuff = useBuffsStore(state => state.functions.addBuff);
  function defaultBuffs() {
    addBuff(player, defaultDefenseLevel);
  }
  defaultBuffs();
  return { buffsStorage };
}

export default useBuffsStorage;

useBuffsStorage.propTypes = {
  player: PropTypes.string.isRequired,
};
