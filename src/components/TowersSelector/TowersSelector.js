import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
//IMG
import commonAssetsImg from '../../img/common/CommonAssets.png';
//DATA
import commonAssets from '../../data/CommonAssets.json';
import towersData from '../../data/Towers.json';
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//STYLES
import { TowerSelectorBox,
  SelectorsWrap,
  TowersBox,
  TowerBox,
  Tower,
  LevelBox,
  Level,
  ButtonsWrap,
  AddButton,
  ButtonImg,
  Input } from "./TowersSelector.styled";

export default function TowerSelector({role}) {
  const [playerData, playerFunctions] = usePlayerStoreData(role);
  
  //CONSTS
  const {
    towers,
  } = playerData;
  const {
    setTowers,
    setFortification,
    addTowers,
    addFortification
  } = playerFunctions;

  const [isSelected, setIsSelected] = useState('magicTower');
  const [level, setLevel] = useState(1);
  const [isButtonActive, setIsButtonActive] = useState(towers.length >= 2 || isSelected === 'fortification' ? true : false);
  const [query, setQuery] = useState(1);

  const levels = [1,2,3,4,5,6,7,8]
  const selectShadow = 'drop-shadow(#61e7fd 0px 0px 7px) drop-shadow(#61e7fd 0px 0px 7px)';
  const perfectIcon = `url(${commonAssetsImg}) ${commonAssets.perfectIcon}`;
  const addIcon = `url(${commonAssetsImg}) ${commonAssets.addIcon}`;
  const removeIcon = `url(${commonAssetsImg}) ${commonAssets.removeIcon}`;

  //HANDLE FUCTIONS
  const onTowerClick = (e) => {
    setIsSelected(e.target.id);
    if(e.target.id === 'fortification'){
      setIsButtonActive(false);
    } else {
      if(towers.length >= 2) {
        setIsButtonActive(true);
      } else {
        setIsButtonActive(false);
      }
    }
  }

  const onLevelClick = (e) => {
    setLevel(Number(e.currentTarget.id));
  }
  const onAddButtonClick = () => {
    if (isSelected !== 'fortification' && towers.length < 2) {
      addTowers({ ...towersData[`${isSelected}`][`level${level}`], type: `${isSelected}`, id: nanoid()});
    } else {

      addFortification({...towersData[`${isSelected}`][`level${level}`], type: `${isSelected}`, id: nanoid()}, query);
    }
  }
  const onremoveButtonClick = () => {
    setTowers([]);
    setFortification([]);
  }
  const handleInput = (e) => {
    if(e.target.value === ""){
        e.target.value = 1;
    }
    setQuery(Number.parseInt(e.target.value.replaceAll(/\D/g, ''), 0));
  }
  //HELPERS
  const getFilter = (itemLevel, currentLevel) => {
    if(itemLevel !== 8 && itemLevel === currentLevel) { return selectShadow };
    if(itemLevel === 8) { return currentLevel !== 8 ? 'grayscale(100%) brightness(70%)': null };
  }

  //USE EFFECTS
  useEffect(() => {
    if(isSelected === 'fortification'){
      setIsButtonActive(false);
    } else {
      if(towers.length >= 2) {
        setIsButtonActive(true);
      } else {
        setIsButtonActive(false);
      }
    }
  }, [towers, isSelected])

  return (
    <TowerSelectorBox>
      <SelectorsWrap>
        <TowersBox>
          <TowerBox>
            <Tower
              id="tower"
              background = { `url(${commonAssetsImg}) ${commonAssets.towerPosition}` }
              width = {'28px'}
              filter ={ isSelected ===  'tower' ? selectShadow : 'none' }
              onClick = { onTowerClick }
            >
            </Tower>
          </TowerBox>
          <TowerBox>
            <Tower
              id="magicTower"
              background = { `url(${commonAssetsImg}) ${commonAssets.magicTowerPosition}`}
              width = {'23px'}
              filter = { isSelected ===  'magicTower' ? selectShadow : 'none' }
              onClick = { onTowerClick }
            >
            </Tower>
          </TowerBox>
          <TowerBox>
            <Tower
              id="fortification"
              background = { `url(${commonAssetsImg}) ${commonAssets.fortificationPosition}`}
              width = {'40px'}
              filter ={ isSelected ===  'fortification' ? selectShadow : 'none' }            
              onClick = { onTowerClick }
            >
            </Tower>
          </TowerBox>
        </TowersBox>
        <LevelBox>
          { levels.map((lev) => {
              return (
                <Level
                  id={ lev }
                  key={ lev }
                  color={ lev ===  level ? '#61e7fd' : '#000000' }
                  filter={  getFilter(lev, level) }
                  onClick={ onLevelClick }
                  background={ lev === 8 ? perfectIcon : null }
                >  
                  { lev !== 8 ? lev : null }
                </Level>
              )
            })
          }
        </LevelBox> 
      </SelectorsWrap>
      <ButtonsWrap>
        <AddButton
          type="button"
          disabled = { isButtonActive }
          onClick = { onAddButtonClick }
        >
          <ButtonImg
            background ={ addIcon }
            filter={ isButtonActive ? 'grayscale(100%) brightness(70%)': null }
          ></ButtonImg>
        </AddButton>
        <AddButton
          type="button"
          onClick = { onremoveButtonClick }
        >
          <ButtonImg
            background ={ removeIcon }
          ></ButtonImg>
        </AddButton>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="0"
          value={ query }
          onChange={ handleInput } 
          disabled = { isSelected === 'fortification' ? false : true }       
        />
      </ButtonsWrap>
    </TowerSelectorBox>
  )
}