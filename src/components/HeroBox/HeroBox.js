import { useState, useEffect } from 'react';
//DATA
import commonAssets from '../../data/CommonAssets.json';
//IMAGES
import heroesImg from '../../img/common/Heroes.webp';
import commonImg from '../../img/common/CommonAssets.png';
import UndeadСommonImg from '../../img/undead/UndeadCommon.png';
import DemonСommonImg from '../../img/demon/DemonCommon.png';
import DrowСommonImg from '../../img/drow/DrowCommon.png';
import HumanСommonImg from '../../img/human/HumanCommon.png';
import ElfСommonImg from '../../img/elf/ElfCommon.png';
//STYLES
import { 
    HeroWrap,
    HeroImg
  } from "./HeroBox.styled"

export default function HeroBox({ player }) {
  const [heroImg, setHeroImg] = useState(`url(${UndeadСommonImg}) ${commonAssets.undead.heroBackground}`)

  //CONST
  const {
    hero,
    race,
  } = player

  //USE EFFECTS
  useEffect(() => {
    if(hero.checker) {
      setHeroImg(`url(${ heroesImg }) ${ hero.icon }`)
    } else {
      switch (race) {
        case 'undead':
          setHeroImg(`url(${ UndeadСommonImg }) ${ commonAssets.undead.heroBackground }`)
        break;
        case 'demon':
          setHeroImg(`url(${ DemonСommonImg }) ${ commonAssets.demon.heroBackground }`)
        break;
        case 'drow':
          setHeroImg(`url(${ DrowСommonImg }) ${ commonAssets.drow.heroBackground }`)
        break;
        case 'human':
          setHeroImg(`url(${ HumanСommonImg }) ${ commonAssets.human.heroBackground }`)
        break;
        case 'elf':
          setHeroImg(`url(${ ElfСommonImg }) ${ commonAssets.elf.heroBackground }`)
        break;
        default:
        break;
      }
    };
  }, [hero, race]);
  
  return (
    <HeroWrap
      background={ `url(${ commonImg }) ${ commonAssets.heroFame }` }
    >
      <HeroImg
        background={ heroImg }
      >

      </HeroImg>
    </HeroWrap>
  )
}