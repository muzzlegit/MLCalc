
//COMPONENTS
import SharpeningsList from '../SharpeningsList/SharpeningsList.jsx';
//HOOKS
import useSharpening from './hooks/useSharpening.js';
import useSharpeningsList from '../SharpeningsList/hooks/useSharpeningsList.js';
//STYLES
import {
  Wrap,
  SelectorBox,
  SelectorLabel,
  Select,
  SharpeningInput,
  SharpeningSpan,
  ButtonsBox,
  ButtonItem
} from './styles/Sharpening.styled.js';


export default function Sharpening() {
  const { SHARPENINGS, currentSharpening, value, onSharpening, onValueChange, addSharpeningToArtefact } = useSharpening();
  const { sharpeningsList, addToSharpeningsList, removeFromSharpeningsList, clearSharpeningsList } = useSharpeningsList();
  console.log(sharpeningsList)
  return(
    <Wrap>
      <SelectorLabel>Выбирете заточку</SelectorLabel>
      <SelectorBox>
        <Select id = "sharpening" onChange = { onSharpening } >
          {
            SHARPENINGS.map( sharpening => {
              return(
                <option 
                  value = { sharpening.id }
                  key = { sharpening.id }
                >
                  { sharpening.name }
                </option>
              )
            })
          }          
        </Select>
        <SharpeningSpan>{ currentSharpening.maxValue < 0 && "-" }</SharpeningSpan>
        <SharpeningInput
          type = "text"
          autoComplete = "off"
          autoFocus
          placeholder = "0"
          value = { value }
          onChange = { onValueChange }           
        />
        <SharpeningSpan>{ currentSharpening.measure !== "number" ? currentSharpening.measure : null }</SharpeningSpan>
        <ButtonItem
          type = 'button'
          onClick = {() => { addToSharpeningsList( currentSharpening) }}
        >
          Жмак
        </ButtonItem>
      </SelectorBox>
      <SharpeningsList
        sharpeningsList = { sharpeningsList }
        removeFromSharpeningsList = { removeFromSharpeningsList }
      />
      <ButtonsBox>
        <ButtonItem
          type = 'button'
          onClick = { () => { addSharpeningToArtefact( addToSharpeningsList ) } }
        >
          Применить заточки к артефакту
        </ButtonItem>
        <ButtonItem
          type = 'button'
          onClick = { clearSharpeningsList }
        >
          Удалить заточки с артефакта
        </ButtonItem>
      </ButtonsBox>      
    </Wrap>
  )
}
