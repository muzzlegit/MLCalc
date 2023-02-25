//STYLES
import { useEffect } from "react";
import { FilterBox, ButtonsBox, ButtonItem } from "./ArtefactsFilters.styled";



export default function ArtefactTypeFilter({ filter, onTypeClick, onPerfectClick, currentArtefact }) {
  const { ancient, perfect } = filter;

  return (
    <>
      <FilterBox>
        <ButtonsBox>
          <ButtonItem
            id = "common"
            onClick = { ( e ) => { onTypeClick( e.target.id, currentArtefact ) } }
            checked = { !ancient }
          >
            Обычный
          </ButtonItem>
          <ButtonItem 
            id = "ancient"
            onClick = { ( e ) => { onTypeClick( e.target.id, currentArtefact ) } }
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