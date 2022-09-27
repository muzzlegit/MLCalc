import { useState, useEffect } from "react";
//COMPONENTS
import HeroModal from './HeroModal';
//STYLES
import { HeroBox, HeroImg } from "./Hero.styled";
//IMAGES
import commonAssetsImg from '../../img/common/CommonAssets.png';
import commonDemonImg from '../../img/demon/DemonCommon.png';
import commonUndeadImg from '../../img/undead/UndeadCommon.png';
import commonDrowImg from '../../img/drow/DrowCommon.png';
import commonElfImg from '../../img/elf/ElfCommon.png';
import commonHumanImg from '../../img/human/HumanCommon.png';
//DATA
import commonAssets from '../../data/CommonAssets.json';

export default function Hero({player}){
  const [heroBackgraundImg, setHeroBackgraundImg] = useState(commonUndeadImg);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
 
  useEffect(() => {
    switch (player.race) {
        case 'undead':
            setHeroBackgraundImg(commonUndeadImg);
            break;
        case 'demon':
            setHeroBackgraundImg(commonDemonImg);
            break;
        case 'drow':
            setHeroBackgraundImg(commonDrowImg);
            break;
        case 'human':
            setHeroBackgraundImg(commonHumanImg);
            break;
        case 'elf':
            setHeroBackgraundImg(commonElfImg);
            break;  
        default:
            break;
    }
}, [player.race])

  return (
    <>
      <HeroBox
        background={ `url(${commonAssetsImg}) ${commonAssets.heroFamePosition}, url(${heroBackgraundImg}) -27px 7px`}
        onClick={toggleModal}
      > 
        <HeroImg>

        </HeroImg>
      </HeroBox>
      {showModal && <HeroModal 

      />} 
    </>
  )
}