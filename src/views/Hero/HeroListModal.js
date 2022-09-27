import { useState } from "react";

import { createPortal } from "react-dom";
//DATA
import heroes from '../../data/Heroes.json';
//STYLES
import { ModalBox, HeroBox } from "./HeroListModal.styled"
//IMAGES
import commonHeroAssetsImg from '../../img/common/CommonHeroAssets.png';
import heroesImg from '../../img/common/Heroes.png';

const modalRoot =document.querySelector('#modal-root-level-2')

export default function HeroListModal(){
console.log(heroes)
  return createPortal(
    <ModalBox>
      { heroes.map((hero) => {
        return (
          <>
          <HeroBox 
            key={hero.name + 'maleIcon'}
            background={`url(${heroesImg}) ${hero.maleIcon}`}
          > 
          </HeroBox>
          <HeroBox 
            key={hero.name + 'femaleIcon'}
            background={`url(${heroesImg}) ${hero.femaleIcon}`}
          > 
          </HeroBox>
          </>
        )
    })}
    </ModalBox>, modalRoot
  )
}