//STORE
import useBattleFieldStore from "modules/battlefield/store/useBattleFieldStore";

function useBattlefieldSelector() {
  const setBattlefield = useBattleFieldStore(state => state.functions.setBattlefield);
  const setStructure = useBattleFieldStore(state => state.functions.setStructure);
  const onBattlefieldChange = e => {
    setBattlefield(e.currentTarget.value);
    if (e.currentTarget.value === "mine") setStructure("town");
  };
  const onStructureChange = e => {
    setStructure(e.currentTarget.value);
  };

  return { onBattlefieldChange, onStructureChange };
}

export default useBattlefieldSelector;
