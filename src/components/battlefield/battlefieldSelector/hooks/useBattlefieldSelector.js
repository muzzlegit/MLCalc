//HOOKS
import useBattlefieldStorage from "modules/battlefield/store/useBattlefieldStorage";

function useBattlefieldSelector() {
  const { setBattlefield, setStructure } = useBattlefieldStorage();

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
