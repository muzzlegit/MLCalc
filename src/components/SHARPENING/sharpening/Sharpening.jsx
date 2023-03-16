
//COMPONENTS
import SharpeningsList from '../SharpeningsList/SharpeningsList.jsx';
//HOOKS
import useArtefacts from '../../ARTEFACTS/hooks/useArtefacts.js';
import usePlayerContext from '../../../hooks/usePlayerContext.js';
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



export default function Sharpening({ checker, currentSharpenings, place }) {
  const player = usePlayerContext();
  const { SHARPENINGS, currentSharpening, value, onSharpening, onValueChange } = useSharpening();
  const { sharpeningsList, addToSharpeningsList, removeFromSharpeningsList, clearSharpeningsList } = useSharpeningsList( currentSharpenings );
  const { addBuffsToArtefact, removeBuffsFromArtefact } = useArtefacts( player);
  return(
    <Wrap
      boxShadow = { checker }
    >
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
        checker = { checker }
        sharpeningsList = { sharpeningsList }
        removeFromSharpeningsList = { removeFromSharpeningsList }
      />
      <ButtonsBox>
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
      </ButtonsBox>      
    </Wrap>
  )
}
