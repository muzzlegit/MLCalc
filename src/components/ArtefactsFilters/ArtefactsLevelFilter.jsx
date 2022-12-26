//STYLES
import { FilterBox, ButtonItem } from "./ArtefactsLevelFilter.styled";

const levelsArray = [ "all", "1", "2", "3", "4", "5" ];

export default function ArtefactsLevelFilter({ filter, onLevelClick }) {

  const { level } = filter;

  return (
    <FilterBox>
    {
      levelsArray.map( item => {
        return (
          <ButtonItem
            key = { `level1${ item }` }
            type = "radio"
            id = { `level1${ item }` }
            value = { item }
            onClick = { onLevelClick }
            checked = { level === item ? true : false }
          >
            { item === 'all' ? 'Все' : item }
          </ButtonItem>
        )
      })
    }
    </FilterBox>
  )
}