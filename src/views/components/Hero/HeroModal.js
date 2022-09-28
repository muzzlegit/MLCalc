import { useState } from "react";
import { createPortal } from "react-dom";
//COMPONENTS
import HeroListModal from "./HeroListModal";
import HeroSkillsList from "./HeroSkillsList";
//IMAGES
import commonHeroAssetsImg from '../../../img/common/CommonHeroAssets.png';
import heroesImg from '../../../img/common/Heroes.png';
//STYLES
import { ModalBox, HeroWindow } from "./HeroModal.styled"

const modalRoot =document.querySelector('#modal-root-level-1')

export default function HeroModal({hero}){
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return createPortal(
    <>
      <ModalBox
        background={ `url(${commonHeroAssetsImg}) 0 0`}
      >
        <HeroWindow
          onClick={toggleModal}
          background={ `url(${heroesImg}) ${hero.icon}`}
        >
        </HeroWindow>
        <HeroSkillsList
          hero={hero}
        >

        </HeroSkillsList>
      </ModalBox>
          {showModal && <HeroListModal/>}
    </>, modalRoot

  )
}