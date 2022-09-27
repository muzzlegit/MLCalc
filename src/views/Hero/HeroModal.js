import { useState } from "react";
import { createPortal } from "react-dom";
//COMPONENTS
import HeroListModal from "./HeroListModal";
//IMAGES
import commonHeroAssetsImg from '../../img/common/CommonHeroAssets.png';
//STYLES
import { ModalBox, HeroWindow } from "./HeroModal.styled"

const modalRoot =document.querySelector('#modal-root-level-1')

export default function HeroModal(){
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
      >
      </HeroWindow>
      </ModalBox>
          {showModal && <HeroListModal/>}
    </>, modalRoot

  )
}