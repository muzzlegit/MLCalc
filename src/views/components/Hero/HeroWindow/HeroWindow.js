import { useState } from "react";

//COMPONENTS
import Modal from "../../Modal/Modal";
import HeroesList from "../HeroesList/HeroesList";
import HeroBranches from "../HeroBranches/HeroBranches";
//IMAGES
import commonHeroAssetsImg from '../../../../img/common/CommonHeroAssets.png';
import heroesImg from '../../../../img/common/Heroes.png';
//STYLES
import { ModalBox, HeroBox, HeroDoll } from "./HeroWindow.styled"


export default function HeroWindow({
    hero,
    setHero,
    setMainAttackerHeroSkillsBranch,
    setHeroSkillLevel
  }){
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <ModalBox
        background={ `url(${commonHeroAssetsImg}) 0 0`}
      >
        <HeroDoll>
          <HeroBox
            onClick={toggleModal}
            background={ `url(${heroesImg}) ${hero.icon}`}
          >
          </HeroBox>

        </HeroDoll>
        <HeroBranches
          hero={hero}
          setMainAttackerHeroSkillsBranch={setMainAttackerHeroSkillsBranch}
          setHeroSkillLevel={setHeroSkillLevel}
        >
        </HeroBranches>
      </ModalBox>
          {
            showModal &&
            <Modal
              level={2}
              toggleModal={toggleModal}
            >
              <HeroesList
                toggleModal={toggleModal}
                setHero={setHero}
              />
            </Modal>
          }
    </>

  )
}