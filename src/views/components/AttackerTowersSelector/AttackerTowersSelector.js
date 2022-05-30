import { useState } from "react";
import { TowerSelectorBox } from "./AttackerTowersSelector.styled"
import commonAssetsImg from '../../../img/common/CommonAssets.png';
import commonAssets from '../../../data/CommonAssets.json';
import Modal from "./Modal";

export default function AttackerTowersSelector({setAttackRate}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  // const onSelect = (e) => {
  //     let attackRate = e.target.value;
  //     setAttackRate(attackRate);
  // }
  return (
    <>
      <TowerSelectorBox
        type = "button"
        background = { `url(${commonAssetsImg}) ${commonAssets.towerSelectorPosition}` }
        onClick = {toggleModal}
    >
      </TowerSelectorBox>
      {showModal && <Modal/>}
    </>
      // <select id="attackRate" onChange={onSelect}>
      //   <option value="Min">MIN</option> 
      //   <option value="Max">MAX</option>
      // </select>
  )
}