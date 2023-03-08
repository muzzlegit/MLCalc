//STYLES
import { FilterBox, ButtonsBox, ButtonItem } from "./TypeFilter.styled";



export default function ArtefactTypeFilter({ filter, onTypeClick, onPerfectClick }) {
  const { ancient, perfect } = filter;

  return (
    <>
      <FilterBox>
        <ButtonsBox>
          <ButtonItem
            id = "common"
            onClick = { onTypeClick }
            checked = { !ancient }
          >
            Обычный
          </ButtonItem>
          <ButtonItem 
            id = "ancient"
            onClick = { onTypeClick }
            checked = { ancient }
          >
            Древний
          </ButtonItem>
          <ButtonItem
            id = "perfect"
            onClick = { onPerfectClick }
            checked = { perfect }
          >
            Совершенный
          </ButtonItem>
        </ButtonsBox>  
      </FilterBox>
    </>
  )
}