//HOOKS
import useBattlefield from "./hooks/useBattlefield";
//STYLES
import { SelectorBox, SelectorLabel, Select, Option } from "./styles/BattlefieldSelector.styled";

function BattlefieldSelector() {
  const { battlefield, onBattlefieldChange, onStructureChange } = useBattlefield();
  return (
    <SelectorBox>
      <SelectorLabel>Поле битвы</SelectorLabel>
      <Select id="battlefield" onChange={onBattlefieldChange}>
        <Option value="cursedForest">Проклятые леса</Option>
        <Option value="deadLand">Мёртвая земля</Option>
        <Option value="hollyLand">Священная земля</Option>
        <Option value="magicForest">Волшебные леса</Option>
        <Option value="mountain">Горы</Option>
        <Option value="desert">Пустыня</Option>
        <Option value="forest">Лес</Option>
        <Option value="steppe">Степь</Option>
        <Option value="mine">Подземелье</Option>
      </Select>
      {battlefield !== "mine" ? (
        <>
          <SelectorLabel>Место битвы</SelectorLabel>
          <Select id="structure" onChange={onStructureChange}>
            <Option value="town">Город</Option>
            <Option value="castle">Клановый замок</Option>
            <Option value="puddle">Соленое озеро</Option>
          </Select>
        </>
      ) : null}
    </SelectorBox>
  );
}

export default BattlefieldSelector;
