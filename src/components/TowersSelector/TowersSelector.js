import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'


import dialogFrameImg from '../../img/common/dialog.png';
import commonAssetsImg from '../../img/common/CommonAssets.png';
import commonAssets from '../../data/CommonAssets.json';
import towersData from '../../data/Towers.json';

//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//STYLES
import { TowerSelectorBox, TowersBox, TowerBox, Tower, LevelBox, Level } from "./TowersSelector.styled";

const levels = [1,2,3,4,5,6,7,8]
const selectShadow = 'drop-shadow(rgb(0, 128, 255) 0px 0px 5px) drop-shadow(rgb(0, 128, 255) 0px 0px 5px)';

export default function TowerSelector({role}) {
  const [playerData, playerFunctions] = usePlayerStoreData(role);
    //CONSTS
    const {
      towers,
    } = playerData;
    const {
      addTowers,
      addFortification
    } = playerFunctions;

  const [isSelected, setIsSelected] = useState('magicTower');
  const [level, setLevel] = useState(1);
  const [isButtonActive, setIsButtonActive] = useState(towers.length >= 2 || isSelected === 'fortification' ? true : false);



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
    setLevel(Number(e.currentTarget.textContent));
  }
  const onAddButtonClick = () => {

    if (isSelected !== 'fortification' && towers.length < 2) {
      addTowers({ ...towersData[`${isSelected}`][`level${level}`], type: `${isSelected}`, id: nanoid()});
    } else {
 
      addFortification({...towersData[`${isSelected}`][`level${level}`], type: `${isSelected}`, id: nanoid()});
    }
  }

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
  }, [towers,isSelected])

  return (
    <TowerSelectorBox>
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
                  key={ lev }
                  filter = { lev ===  level ? selectShadow : 'none' }
                  onClick = { onLevelClick }
                >  
                  { lev }
                </Level>
              )
            })
          }
        </LevelBox> 
        <button
          type="button"
          disabled = { isButtonActive }
          onClick = { onAddButtonClick }
        >
          Добавить
        </button>

    </TowerSelectorBox>
  )
}