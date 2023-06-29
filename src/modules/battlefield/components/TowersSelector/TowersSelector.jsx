//HOOKS
import useTowerSelector from "modules/battlefield/hooks/useTowerSelector";
import useBattlefield from "modules/battlefield/hooks/useBattlefield";
import useTowers from "modules/battlefield/hooks/useTowers";
import useBattlefieldImages from "modules/battlefield/hooks/useBattlefieldImages";
//STYLES
import {
  TowerSelectorBox,
  SelectorsWrap,
  TowersBox,
  TowerBox,
  Tower,
  LevelBox,
  Level,
  AddButton,
  RemoveButton,
  ButtonImg,
  Input,
  SelectorsBox,
} from "./styles/TowersSelector.styled";

export default function TowersSelector() {
  const {
    levelsArray,
    level,
    isSelected,
    isButtonActive,
    fortificationAmount,
    isSelectorActive,
    onTowerClick,
    onLevelClick,
    onfortificationAmountChange,
  } = useTowerSelector();
  const { onAddButtonClick, onRemoveButtonClick } = useTowers(
    isSelected,
    level,
    fortificationAmount,
  );
  const { getBattlefieldImage } = useBattlefieldImages();
  const { isCastle } = useBattlefield();

  const selectShadow = "drop-shadow(#61e7fd 0px 0px 7px) drop-shadow(#61e7fd 0px 0px 7px)";

  //HELPERS
  const getFilter = (itemLevel, currentLevel) => {
    if (itemLevel !== 8 && itemLevel === currentLevel) {
      return selectShadow;
    }
    if (itemLevel === 8) {
      return currentLevel !== 8 ? "grayscale(100%) brightness(70%)" : null;
    }
  };

  return (
    <TowerSelectorBox>
      <SelectorsWrap isActive={isSelectorActive}>
        <RemoveButton type="button" onClick={onRemoveButtonClick}>
          <ButtonImg background={getBattlefieldImage("deleteIcon")}></ButtonImg>
        </RemoveButton>
        <SelectorsBox>
          <TowersBox>
            <TowerBox>
              <Tower
                id="tower"
                background={getBattlefieldImage("towerIcon")}
                width={"28px"}
                filter={isSelected === "tower" ? selectShadow : "none"}
                onClick={onTowerClick}
              ></Tower>
            </TowerBox>
            <TowerBox>
              <Tower
                id="magicTower"
                background={getBattlefieldImage("magicTowerIcon")}
                width={"23px"}
                filter={isSelected === "magicTower" ? selectShadow : "none"}
                onClick={onTowerClick}
              ></Tower>
            </TowerBox>
            <TowerBox>
              <Tower
                id="fortification"
                background={getBattlefieldImage("fortificationIcon")}
                width={"40px"}
                filter={isSelected === "fortification" ? selectShadow : "none"}
                onClick={onTowerClick}
              ></Tower>
              <Input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="0"
                value={fortificationAmount}
                onChange={onfortificationAmountChange}
                disabled={isSelected === "fortification" ? false : true}
              />
            </TowerBox>
            {isCastle ? (
              <TowerBox>
                <Tower
                  id="gate"
                  title="Внутренние ворота"
                  background={getBattlefieldImage("gateIcon")}
                  width={"32px"}
                  filter={isSelected === "gate" ? selectShadow : "none"}
                  onClick={onTowerClick}
                ></Tower>
              </TowerBox>
            ) : null}
          </TowersBox>
          <LevelBox>
            {levelsArray.map(lev => {
              if (isCastle && lev === 8) return null;
              return (
                <Level
                  id={lev}
                  key={lev}
                  color={lev === level ? "#ddddbd" : "#294b77"}
                  filter={getFilter(lev, level)}
                  onClick={onLevelClick}
                  background={lev === 8 ? getBattlefieldImage("largePerfectIcon") : null}
                >
                  {lev !== 8 ? lev : null}
                </Level>
              );
            })}
          </LevelBox>
        </SelectorsBox>

        <AddButton type="button" disabled={isButtonActive} onClick={onAddButtonClick}>
          <ButtonImg
            background={getBattlefieldImage("addIcon")}
            filter={isButtonActive ? "grayscale(100%) brightness(70%)" : null}
          ></ButtonImg>
        </AddButton>
      </SelectorsWrap>
    </TowerSelectorBox>
  );
}
