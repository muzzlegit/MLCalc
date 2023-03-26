//HOOKS
import useAdditionBonuses from "./hooks/useAdditionBonuses.js";
//HELPERS
import { getBonusColor } from '../../../helpers/helpers.js';
//STYLES
import { 
  Wrap,
  PlayerBox,
  InputWrap,
  SelectorLabel,
  SelectorBox,
  Select,
  Option,
  BonusInput,
  BonusSpan,
  ButtonItem
} from "./styles/AdditionBonuses.styled"
const runesWords = [
  "Атака всех войск",
  "Защита всех войск",
  "Здоровье всех войск",
  "Предел максимальной защиты всех войск",
  "Ужас",
  "Атака всех войск и войск союзника",
  "Здоровье всех войск и войск союзника",
  "Атака всех войск противника",
  "Здоровье всех войск противника"
]

export default function AdditionBonuses() {
  const { BONUSES, currentBonus, value, onValueChange, onBonus } = useAdditionBonuses()
  return(
    <Wrap
      // boxShadow = { checker }
    >
      <PlayerBox>
        <SelectorLabel>На себя</SelectorLabel>
          <SelectorBox  >
            <Select 
              onChange = { onBonus }
              title = { `${ currentBonus.description } + ${ value === "" ? 0 : value }`  }
            >
              {
                BONUSES
                .filter( bonus =>bonus.effect === "player" )
                .map( bonus => {
                  return (
                    <Option
                      color = { getBonusColor( bonus.effect ) }
                      value = { bonus.id }
                      key = { bonus.id }
                    >
                    { bonus.name }
                    </Option>
                  )
                })
              }          
            </Select>
            <InputWrap>
              <BonusInput
                id = "player"
                type = "text"
                autoComplete = "off"
                autoFocus
                placeholder = "0"
                value = { value.player }
                onChange = { onValueChange }           
              />
              <BonusSpan>{ currentBonus.measure === "%" && "%" }</BonusSpan>
              <ButtonItem
                type = 'button'
                // onClick = {() => { addToSharpeningsList( currentSharpening) }}
              >
                Добавить
              </ButtonItem>
            </InputWrap>
          </SelectorBox>
     
      </PlayerBox>
      <PlayerBox>
        <SelectorLabel>На союзника</SelectorLabel>
          <SelectorBox  >
            <Select 
              onChange = { onBonus }
              title = { `${ currentBonus.description } + ${ value === "" ? 0 : value }`  }
            >
              {
                BONUSES
                .filter( bonus =>bonus.effect === "ally" )
                .map( bonus => {
                  return (
                    <Option
                      color = { getBonusColor( bonus.effect ) }
                      value = { bonus.id }
                      key = { bonus.id }
                    >
                    { bonus.name }
                    </Option>
                  )
                })
              }          
            </Select>
            <InputWrap>
              <BonusInput
                id = "ally"
                type = "text"
                autoComplete = "off"
                autoFocus
                placeholder = "0"
                value = { value.ally }
                onChange = { onValueChange }           
              />
              <BonusSpan>{ currentBonus.measure === "%" && "%" }</BonusSpan>
              <ButtonItem
                type = 'button'
                // onClick = {() => { addToSharpeningsList( currentSharpening) }}
              >
                Добавить
              </ButtonItem>
            </InputWrap>
          </SelectorBox>
     
      </PlayerBox>
      <PlayerBox>
        <SelectorLabel>На противника</SelectorLabel>
          <SelectorBox  >
            <Select 
              onChange = { onBonus }
              title = { `${ currentBonus.description } + ${ value === "" ? 0 : value }`  }
            >
              {
                BONUSES
                .filter( bonus =>bonus.effect === "enemy" )
                .map( bonus => {
                  return (
                    <Option
                      color = { getBonusColor( bonus.effect ) }
                      value = { bonus.id }
                      key = { bonus.id }
                    >
                    { bonus.name }
                    </Option>
                  )
                })
              }          
            </Select>
            <InputWrap>
              <BonusInput
                id = "enemy"
                type = "text"
                autoComplete = "off"
                autoFocus
                placeholder = "0"
                value = { value.enemy }
                onChange = { onValueChange }           
              />
              <BonusSpan>{ currentBonus.measure === "%" && "%" }</BonusSpan>
              <ButtonItem
                type = 'button'
                // onClick = {() => { addToSharpeningsList( currentSharpening) }}
              >
                Добавить
              </ButtonItem>
            </InputWrap>
          </SelectorBox>
     
      </PlayerBox>
      {/* <SharpeningsList
        checker = { checker }
        sharpeningsList = { sharpeningsList }
        removeFromSharpeningsList = { removeFromSharpeningsList }
      /> */}
      {/* <ButtonsBox>
        <ButtonItem
          type = 'button'
          onClick = { () => { addBuffsToArtefact( place, "sharpening", sharpeningsList ) } }
        >
          Применить заточки к артефакту
        </ButtonItem>
        <ButtonItem
          type = 'button'
          onClick = { () => { clearSharpeningsList(); removeBuffsFromArtefact( place, "sharpening" ); } }
        >
          Удалить заточки с артефакта
        </ButtonItem>
      </ButtonsBox> */}
    </Wrap>
  )
}