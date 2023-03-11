import { nanoid } from "nanoid";
//HOOKS
import useHeroesList from "./hooks/useHeroesList.js";
//IMAGES
import heroesImg from '../../../img/common/Heroes.webp';
//STYLES
import { ListBox, HeroesBox, HeroBoxWrap, HeroBox } from "./styles/HeroesList.styled"

export default function HeroesList({ player, toggleModal }){
  const { heroesList, onHeroClick } = useHeroesList( player, toggleModal );

  return (
    <ListBox key = { nanoid() } >
      { 
        heroesList.map(( hero ) => {
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
                  id = { hero.id }
                  name = { 'femaleIcon' }
                  background = { `url(${ heroesImg }) ${ hero.femaleIcon }` }
                  onClick = { onHeroClick }
                  title = { hero.name }
                > 
                </HeroBox>
              </HeroBoxWrap>
            </HeroesBox>
          )
        })
      }
    </ListBox>
  )
}