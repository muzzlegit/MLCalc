//DATA
import useRunes from "./useRunes";
//STYLES
import { Wrap, RuneWrap, RuneImg, RuneInput } from "./Runes.styled";


export default function Runes({ player, artefact, setArtefact }) {
  const { runes, runesImages, input, onChange, addRunesToArtefact } = useRunes( player, artefact.runes );

  return (
    <Wrap>
      {
        runes.map( rune => {
          return (
          <RuneWrap
            key = { rune.id }
          >
            <RuneImg
              background = { runesImages[ rune.name ] }
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
        onClick = { () => addRunesToArtefact( artefact, setArtefact ) }
      >Жмак</button>
    </Wrap>
  )
}