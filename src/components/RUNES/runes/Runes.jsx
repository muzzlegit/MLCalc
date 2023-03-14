//DATA
import useRunes from "./hooks/useRunes.js";
//STYLES
import { Wrap, RuneWrap, RuneImg, RuneInput } from "./styles/Runes.styled";


export default function Runes({ place, setArtefact }) {
  const { runes, runesImages, input, artefactChecker, onChange, addRunesToArtefact, clearRunes } = useRunes( place );

  return (
    <Wrap>
      {
        runes.map( rune => {
          return (
          <RuneWrap
            key = { rune.id }
          >
            <RuneImg
              background = {
                input[ rune.name ] ?
                runesImages[ rune.name ].active :
                runesImages[ rune.name ].disabled
              }
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
      <button
        type = 'button'
        onClick = { () => addRunesToArtefact( place, setArtefact ) }
        disabled = { artefactChecker }
      >Жмак</button>
      <button
        type = 'button'
        onClick = { () => clearRunes( place, setArtefact ) }
        disabled = { artefactChecker }
      >Удалить</button>      
    </Wrap>
  )
}