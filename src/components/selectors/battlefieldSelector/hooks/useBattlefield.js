//STORE
import useBattleFieldStore from "../store/useBattleFieldStore";

function useBattlefield() {
  const battlefield = useBattleFieldStore(state => state.battlefield);
  const structure = useBattleFieldStore(state => state.structure);
  const setBattlefield = useBattleFieldStore(state => state.functions.setBattlefield);
  const setStructure = useBattleFieldStore(state => state.functions.setStructure);
  const onBattlefieldChange = e => {
    setBattlefield(e.currentTarget.value);
    if (e.currentTarget.value === "mine") setStructure("town");
  };
  const onStructureChange = e => {
    setStructure(e.currentTarget.value);
  };
  return { battlefield, structure, onBattlefieldChange, onStructureChange };
}

export default useBattlefield;
