import { useState } from "react";
import { useStore } from '../../../data/store/useStore';
import { TowerSelectorBox } from "./TowersSelector.styled"
import commonAssetsImg from '../../../img/common/CommonAssets.png';
import commonAssets from '../../../data/CommonAssets.json';
import Modal from "./Modal";

export default function TowersSelector({towers, fortifications, addTowers, addFortification}) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <TowerSelectorBox
        type = "button"
        background = { `url(${commonAssetsImg}) ${commonAssets.towerSelectorPosition}` }
        onClick = {toggleModal}
      >
      </TowerSelectorBox>
      {showModal && <Modal 
        toggleModal = {toggleModal}
        towers = {towers}
        fortifications = {fortifications}
        addTowers = {addTowers}
        addFortification = {addFortification}
      />}
    </>
  )
}