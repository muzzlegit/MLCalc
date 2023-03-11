import { useContext } from "react";
import { nanoid } from "nanoid";
//CONTEXT
import PlayerContext from '../../helpers/context';
//DATA
import heroes from '../../data/Heroes.json';
import useHeroSet from "../../hooks/useHeroSet";
//IMAGES
import heroesImg from '../../img/common/Heroes.webp';
//STYLES
import { ListBox, HeroesBox, HeroBoxWrap, HeroBox } from "./HeroesList.styled"

export default function HeroesList({ toggleModal }){
  const player = useContext( PlayerContext );
  const onHeroClick = useHeroSet( player, toggleModal );

  return (
    <ListBox key = { nanoid() } >
      { heroes.map(( hero ) => {
        return (
          <HeroesBox key = { nanoid() } >
            <HeroBoxWrap key = { nanoid() } >
              <HeroBox 
                id = { hero.id }
                name = { 'maleIcon' }
                background = { `url(${ heroesImg }) ${ hero.maleIcon }` }
                onClick = { onHeroClick }
                title = { hero.name }
              > 
              </HeroBox>
            </HeroBoxWrap>
            <HeroBoxWrap key = { nanoid() } >
              <HeroBox 
                id = { hero.name }
                name = { 'femaleIcon' }
                background = { `url(${ heroesImg }) ${ hero.femaleIcon }` }
                onClick = { onHeroClick }
                title = { hero.name }
              > 
              </HeroBox>
            </HeroBoxWrap>
          </HeroesBox>
        )})
      }
    </ListBox>
  )
}