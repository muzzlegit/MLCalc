//DATA
import useRunes from "./hooks/useRunes.js";
//STYLES
import {
  Wrap,
  RunesBox,
  RuneWrap,
  RuneImg,
  RuneInput,
  ButtonsBox,
  ButtonItem
} from "./styles/Runes.styled";


export default function Runes({ checker, place, setArtefact }) {
  const { runes, runesImages, input, artefactChecker, onChange, addRunesToArtefact, clearRunes } = useRunes( place );

  return (
    <Wrap
      boxShadow = { checker }
    >
      <RunesBox>
        {
          runes.map( rune => {
            return (
            <RuneWrap
              key = { rune.id }
            >
              <RuneImg
                background = {
                  runesImages[ rune.name ]
                }
                filter = { `${ input[ rune.name ] ? true: null }` }
              >
              </RuneImg>
              <RuneInput
                id = { rune.name }
                value = { input[ rune.name ] }
                onChange = { onChange }
              />
            </RuneWrap>
            )
          })
        }
      </RunesBox>
      <ButtonsBox>
        <ButtonItem
          type = 'button'
          onClick = { () => addRunesToArtefact( place, setArtefact ) }
          disabled = { artefactChecker }
        >
          Применить
        </ButtonItem>
        <ButtonItem
          type = 'button'
          onClick = { () => clearRunes( place, setArtefact ) }
          disabled = { artefactChecker }
        >
          Удалить
        </ButtonItem> 
      </ButtonsBox>
    </Wrap>
  )
}