import { useState, useEffect } from "react";
//COMPONENTS
import Modal from "../../components/Modal/Modal";
import HeroBox from "../../components/HeroBox/HeroBox";
import HeroDoll from "../HeroDoll/HeroDoll";
import HeroesList from "../../components/HeroesList/HeroesList";
//DATA
import commonAssets from '../../data/CommonAssets.json';
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//IMAGES
import commonAssetsImg from '../../img/common/CommonAssets.png';
import commonDemonImg from '../../img/demon/DemonCommon.png';
import commonUndeadImg from '../../img/undead/UndeadCommon.png';
import commonDrowImg from '../../img/drow/DrowCommon.png';
import commonElfImg from '../../img/elf/ElfCommon.png';
import commonHumanImg from '../../img/human/HumanCommon.png';
//STYLES
import { ClickWrap } from "./Hero.styled";

export default function Hero({ role }){
  const [playerData, playerFunctions] = usePlayerStoreData(role);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const {
    hero
  } = playerData;
  const {
    setUnitProperty
  } = playerFunctions;

  const toggleModal = () => {
    setShowModal(prev => !prev);
  }
  const toggleModal2 = () => {
    setShowModal2(prev => !prev);
  }

  //USE EFFECT
  useEffect(() => {
    if(!hero.checker) return
    for (const key in hero.skillsBranch1) {
      if (hero.skillsBranch1[key].battle) {
        setUnitProperty(hero.skillsBranch1[key].value[hero.skillsBranch1[key].level - 1]);
      }
    }
  }, [hero, hero.checker, setUnitProperty]);

  return (
    <>
      <ClickWrap
        onClick={ toggleModal }
      >
        <HeroBox
          player={ playerData }
        />
      </ClickWrap>

      { showModal &&
        <Modal
          level={1}
          toggleModal={ toggleModal }
        >
          <HeroDoll
            role={ role }
            toggleModal={ toggleModal2 }
          />
        </Modal>
      }
      { showModal2 &&
        <Modal
          level={2}
          toggleModal={ toggleModal2 }
        >
          <HeroesList
            role={ role }
            toggleModal={ toggleModal2 }
          />
        </Modal>
      }
    </>
  )
}