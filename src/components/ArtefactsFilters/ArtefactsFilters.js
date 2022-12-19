import { useEffect, useState } from "react";

const levelsArray = [ "all", "1", "2", "3", "4", "5" ]
export default function ArtefactsFilters({ artefactsFilter, setArtefactsFilter }) {
  const [ artLevel, setArtLevel ] = useState( 'all' );
  const [ ancientArt, setAncientArt ] = useState( artefactsFilter.ancient );
  const [ perfectArt, setPerfectArt ] = useState( artefactsFilter.perfect );

  //HANDLE FUNCTIONS
  const onLevelFilterClick = ( e ) => {
    setArtLevel( e.currentTarget.value );
  }
  const onTypeClick = ( e ) => {
    setAncientArt(  e.currentTarget.value === "ancient" ? true : false );
  }
  const onPerfectClick = ( e ) => {
    setPerfectArt( e.currentTarget.value === "perfect" ? true : false  );
  }

  return (
    <>
      <fieldset>
        <legend>Уровень артефактов:</legend>
        {
          levelsArray.map( item => {
            return (
              <div>
                <input 
                  type = "radio"
                  id = { `level1${ item }` }
                  value = { item }
                  onChange = { onLevelFilterClick }
                  checked = { artLevel === item ? true : false }
                />
                <label htmlFor = { `level1${ item }` } >{ item === 'all' ? 'Все' : item }</label>
              </div>
            )
          })
        }
      </fieldset>
      <fieldset>
        <div>
          <input 
              type = "radio"
              id = "common"
              value = "common"
              onChange = { onTypeClick }
              checked = { !ancientArt  }
            />
          <label htmlFor = "common" >Обычный</label>
        </div>
        <div>
          <input 
              type = "radio"
              id = "ancient"
              value = "ancient"
              onChange = { onTypeClick }
              checked = { ancientArt }
            />
          <label htmlFor = "ancient" >Древний</label>
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input 
              type = "radio"
              id = "regular"
              value = 'regular'
              onChange = { onPerfectClick }
              checked = { !perfectArt }
            />
          <label htmlFor = "common" >Обычный</label>
        </div>
        <div>
          <input 
              type = "radio"
              id = "perfect"
              value = "perfect"
              onChange = { onPerfectClick }
              checked = { perfectArt }
            />
          <label htmlFor = "ancient" >Совершенный</label>
        </div>
      </fieldset>       
    </>
  )
}