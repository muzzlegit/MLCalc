import { useState, useEffect } from 'react';
//DATA
import commonAssets from '../../data/CommonAssets.json';
//IMAGES
import frames from '../../img/common/Frames.png';
import heroesImg from '../../img/common/Heroes.png';
//STYLES
import { 
    HeroBox,
    HeroBoxImg
  } from "./Hero.styled"

export default function Hero({player}) {
  const [heroImg, setHeroImg] = useState(`url(${frames}) ${commonAssets.undeadHeroBackgroundImg}`)

  //CONST
  const {
    hero,
    race,

  } = player
  //HELPERS
  const getBackgroundImgs = (race) => {
    switch (race) {
        case 'undead':
        return 'undeadHeroBackgroundImg';
        case 'demon':
        return 'demonHeroBackgroundImg';
        case 'drow':
        return 'drowHeroBackgroundImg';
        case 'human':
        return 'humanHeroBackgroundImg';
        case 'elf':
        return 'elfHeroBackgroundImg';
        default:
        break;
    }
  }
  //USE EFFECTS
  useEffect(() => {
    if(hero.checker) {
      setHeroImg(`url(${ heroesImg }) ${ hero.icon }`)
    } else {
      setHeroImg(`url(${ frames }) ${ commonAssets[`${ getBackgroundImgs(race) }`] }`)
    };
  }, [hero, race]);
  
  return (
    <HeroBox
      background={ `url(${frames}) ${commonAssets.heroFamePosition}` }
    >
      <HeroBoxImg
        background={ heroImg }
      >

      </HeroBoxImg>
    </HeroBox>
  )
}