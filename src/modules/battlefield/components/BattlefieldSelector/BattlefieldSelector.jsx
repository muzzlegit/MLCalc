//HOOKS
import useBattlefield from "modules/battlefield/hooks/useBattlefield";
//STORE
import useStore from "store/useStore";
//STYLES
import { SelectorBox, Label, Select } from "./styles/BattlefieldSelector.styled";

function BattlefieldSelector() {
  const battlefield = useStore(state => state.battlePlace.battlefield);
  const { onBattlefieldChange, onStructureChange } = useBattlefield();

  return (
    <SelectorBox>
      <Label>Поле битвы</Label>
      <Select id="battlefield" onChange={onBattlefieldChange}>
        <option value="cursedForest">Проклятые леса</option>
        <option value="deadLand">Мёртвая земля</option>
        <option value="hollyLand">Священная земля</option>
        <option value="magicForest">Волшебные леса</option>
        <option value="mountain">Горы</option>
        <option value="desert">Пустыня</option>
        <option value="forest">Лес</option>
        <option value="steppe">Степь</option>
        <option value="mine">Подземелье</option>
      </Select>
      {battlefield !== "mine" ? (
        <>
          <Label>Место битвы</Label>
          <Select id="structure" onChange={onStructureChange}>
            <option value="town">Город</option>
            <option value="castle">Клановый замок</option>
            <option value="puddle">Соленое озеро</option>
          </Select>
        </>
      ) : null}
    </SelectorBox>
  );
}

export default BattlefieldSelector;
