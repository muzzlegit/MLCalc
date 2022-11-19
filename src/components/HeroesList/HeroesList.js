import { nanoid } from "nanoid";
//DATA
import heroes from '../../data/Heroes.json';
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//IMAGES
import heroesImg from '../../img/common/Heroes.webp';
//STYLES
import { ListBox, HeroesBox, HeroBoxWrap, HeroBox } from "./HeroesList.styled"



export default function HeroesList({ toggleModal, role }){
  const [playerData, playerFunctions] = usePlayerStoreData(role);

  //CONSTS
  const currentHero= playerData.hero;
  const {
    setHero,
    setUnitProperty
  } = playerFunctions;

  const onHeroClick = (e) => {
    const hero = heroes.find(hero => hero.id === e.currentTarget.id);
    if(currentHero.checker) {
      for (const key in currentHero.skillsBranch1) {
        if (currentHero.skillsBranch1[key].battle) {
          setUnitProperty({ ...currentHero.skillsBranch1[key].value[currentHero.skillsBranch1[key].level - 1], value: 0 });
        }
      }
    }
    

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
      icon: hero[e.currentTarget.title],
      skillsBranch1: hero.skills,
      skillsBranch2: false,
      skillsBranch3: false
    });
    toggleModal();
  }

  return (
    <ListBox
      key={nanoid()}
    >
      { heroes.map((hero) => {
        return (
          <HeroesBox
            key={nanoid()}>
            <HeroBoxWrap
              key={nanoid()}
            >
              <HeroBox 
                id={hero.id}
                title={'maleIcon'}
                background={`url(${heroesImg}) ${hero.maleIcon}`}
                onClick={onHeroClick}
              > 
              </HeroBox>

            </HeroBoxWrap>
            <HeroBoxWrap
            key={nanoid()}
            >
              <HeroBox 
                id={hero.id}
                title={'femaleIcon'}
                background={`url(${heroesImg}) ${hero.femaleIcon}`}
                onClick={onHeroClick}
              > 
              </HeroBox>
            </HeroBoxWrap>
          </HeroesBox>
        )
    })}
    </ListBox>
  )
}