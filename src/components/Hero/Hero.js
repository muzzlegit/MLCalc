import { useState, useEffect } from "react";
//COMPONENTS
import Modal from "../../components/Modal/Modal";
import HeroBox from "../../components/HeroBox/HeroBox";
import HeroDoll from "../HeroDoll/HeroDoll";
//DATA
import commonAssets from '../../data/CommonAssets.json';
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from "../../hooks/usePlayerStoreFunctions";
//IMAGES
import commonAssetsImg from '../../img/common/CommonAssets.png';
import commonDemonImg from '../../img/demon/DemonCommon.png';
import commonUndeadImg from '../../img/undead/UndeadCommon.png';
import commonDrowImg from '../../img/drow/DrowCommon.png';
import commonElfImg from '../../img/elf/ElfCommon.png';
import commonHumanImg from '../../img/human/HumanCommon.png';
//STYLES
import { ClickWrap } from "./Hero.styled";



export default function Hero({ player }){
  const [ showModal, setShowModal ] = useState( false );

  //HANDLES FUNCTION
  const toggleModal = () => {
    setShowModal( prev => !prev );
  }

  return (
    <>
      <ClickWrap
        onClick = { toggleModal }
      >
        <HeroBox
          player = { player }
        />
      </ClickWrap>

      { showModal &&
        <Modal
          level = { 1 }
          toggleModal= { toggleModal }
        >
          <HeroDoll
            player = { player }
          />
        </Modal>
      }
    </>
  )
}