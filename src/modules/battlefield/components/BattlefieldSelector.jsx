//HOOKS
import useBattlefield from "modules/battlefield/hooks/useBattlefield";
//STORE
import useStore from "store/useStore";

function BattlefieldSelector() {
  const battlefield = useStore(state => state.battlePlace.battlefield);
  const { onBattlefieldChange, onStructureChange } = useBattlefield();

  return (
    <div className="flex justify-center items-center gap-4">
      <label className="text-text">Поле битвы</label>
      <select
        className="px-1 rounded text-secondary bg-text"
        id="battlefield"
        onChange={onBattlefieldChange}
      >
        <option value="cursedForest">Проклятые леса</option>
        <option value="deadLand">Мёртвая земля</option>
        <option value="hollyLand">Священная земля</option>
        <option value="magicForest">Волшебные леса</option>
        <option value="mountain">Горы</option>
        <option value="desert">Пустыня</option>
        <option value="forest">Лес</option>
        <option value="steppe">Степь</option>
        <option value="mine">Подземелье</option>
      </select>
      {battlefield !== "mine" ? (
        <>
          <label className="text-text">Место битвы</label>
          <select
            className="px-1 rounded text-secondary bg-text"
            id="structure"
            onChange={onStructureChange}
          >
            <option value="town">Город</option>
            <option value="castle">Клановый замок</option>
            <option value="puddle">Соленое озеро</option>
          </select>
        </>
      ) : null}
    </div>
  );
}

export default BattlefieldSelector;
