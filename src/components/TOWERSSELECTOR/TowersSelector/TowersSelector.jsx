//HOOKS
import { useContext } from "react";
import useTowerSelect from "./hooks/useTowerSelect";
import useTowerLevel from "./hooks/useTowerLevel";
import useFortificationInput from "./hooks/useFortificationInput";
import useTowers from "./hooks/useTowers";
import useCommonImg from "../../../hooks/useCommonImg";
//CONTEXT
import PlayerContext from '../../../helpers/context.js';
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
  Input
} from "./styles/TowersSelector.styled";

export default function TowerSelector( ) {
  const player = useContext( PlayerContext );
  const [ isSelected, isButtonActive, onTowerClick ] = useTowerSelect( player, 'magicTower' );
  const [ level, onLevelClick ] = useTowerLevel( 1 );
  const [ value, onFortificationAmountChange ] = useFortificationInput( 1 );
  const [ onAddButtonClick, onRemoveButtonClick ] = useTowers( player, isSelected, level, value );

  const levels = [ 1,2,3,4,5,6,7,8 ];
  const selectShadow = 'drop-shadow(#61e7fd 0px 0px 7px) drop-shadow(#61e7fd 0px 0px 7px)';
  const perfectIcon = useCommonImg( 'perfectIcon' );
  const addIcon = useCommonImg( 'addIcon' );
  const removeIcon = useCommonImg( 'removeIcon' );
  const towerImg = useCommonImg( 'towerPosition' );
  const magicTowerImg = useCommonImg( 'magicTowerPosition' );
  const fortificationImg = useCommonImg( 'fortificationPosition' );

  //HELPERS
  const getFilter = ( itemLevel, currentLevel ) => {
    if( itemLevel !== 8 && itemLevel === currentLevel ) { return selectShadow };
    if( itemLevel === 8 ) { return currentLevel !== 8 ? 'grayscale(100%) brightness(70%)': null };
  }

  return (
    <TowerSelectorBox>
      <SelectorsWrap>
        <TowersBox>
          <TowerBox>
            <Tower
              id = "tower"
              background = { towerImg }
              width = { '28px' }
              filter = { isSelected ===  'tower' ? selectShadow : 'none' }
              onClick = { onTowerClick }
            >
            </Tower>
          </TowerBox>
          <TowerBox>
            <Tower
              id = "magicTower"
              background = { magicTowerImg }
              width = { '23px' }
              filter = { isSelected ===  'magicTower' ? selectShadow : 'none' }
              onClick = { onTowerClick }
            >
            </Tower>
          </TowerBox>
          <TowerBox>
            <Tower
              id = "fortification"
              background = { fortificationImg }
              width = { '40px' }
              filter = { isSelected ===  'fortification' ? selectShadow : 'none' }            
              onClick = { onTowerClick }
            >
            </Tower>
            <Input
              type = "text"
              autoComplete = "off"
              autoFocus
              placeholder = "0"
              value = { value }
              onChange = { onFortificationAmountChange } 
              disabled = { isSelected === 'fortification' ? false : true }       
            />
          </TowerBox>
        </TowersBox>
        <LevelBox>
          { levels.map(( lev ) => {
              return (
                <Level
                  id = { lev }
                  key = { lev }
                  color = { lev ===  level ? '#ddddbd' : '#294b77' }
                  filter = {  getFilter( lev, level ) }
                  onClick = { onLevelClick }
                  background = { lev === 8 ? perfectIcon : null }
                >  
                  { lev !== 8 ? lev : null }
                </Level>
              )
            })
          }
        </LevelBox>
        <AddButton
          type = "button"
          disabled = { isButtonActive }
          onClick = { onAddButtonClick }
        >
          <ButtonImg
            background = { addIcon }
            filter = { isButtonActive ? 'grayscale(100%) brightness(70%)' : null }
          ></ButtonImg>
        </AddButton>
        <RemoveButton
          type = "button"
          onClick = { onRemoveButtonClick }
        >
          <ButtonImg
            background = { removeIcon }
          ></ButtonImg>
        </RemoveButton>
      </SelectorsWrap>
    </TowerSelectorBox>
  )
}