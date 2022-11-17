import { useState } from "react";

//IMAGES
import commonAssetsImg from '../../img/common/CommonAssets.png';
import commonAssets from '../../data/CommonAssets.json';
//STYLES
import { TowersButtonBox } from "./TowersButton.styled"


export default function TowersButton({ role, setToggleModal }) {
  const [backgroundImg, setBackgroundImg] = useState(`url(${commonAssetsImg}) ${commonAssets.towerSelectorPosition}`);
  const toggleModal = () => {
    setToggleModal(prev => !prev);
  }

  return (
      <TowersButtonBox
        type = "button"
        background = { backgroundImg }
        onClick = {toggleModal}
      >
      </TowersButtonBox>
  )
}