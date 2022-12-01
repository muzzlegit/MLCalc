import { nanoid } from "nanoid";
//DATA
import heroes from '../../data/Heroes.json';
//HOOKS
import usePlayerStoreFunctions from "../../hooks/usePlayerStoreFunctions";
//IMAGES
import heroesImg from '../../img/common/Heroes.webp';
//STYLES
import { ListBox, HeroesBox, HeroBoxWrap, HeroBox } from "./HeroesList.styled"

export default function HeroesList({ toggleModal, player }){
  const playerFunctions = usePlayerStoreFunctions( player );

  //CONSTS
  const {
    setHero,
  } = playerFunctions;

  const onHeroClick = ( e ) => {
    const hero = heroes.find( hero => hero.name === e.currentTarget.id );
    setHero({
      checker: true,
      id: hero.id,
      branchesId: {
        skillsBranch1: hero.id,
        skillsBranch2: false,
        skillsBranch3: false,
      },
      class: hero.class,
      name: hero.name,
      icon: hero[ e.currentTarget.attributes.name.value ],
      skillsBranch1: hero.skills,
      skillsBranch2: false,
      skillsBranch3: false
    });
    toggleModal();
  }

  return (
    <ListBox
      key = { nanoid() }
    >
      { heroes.map(( hero ) => {
        return (
          <HeroesBox
            key = { nanoid() }>
            <HeroBoxWrap
              key = { nanoid() }
            >
              <HeroBox 
                id = { hero.name }
                name = { 'maleIcon' }
                background = { `url(${ heroesImg }) ${ hero.maleIcon }` }
                onClick = { onHeroClick }
                title = { hero.name }
              > 
              </HeroBox>
            </HeroBoxWrap>
            <HeroBoxWrap
            key={nanoid()}
            >
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
        )
      })}
    </ListBox>
  )
}