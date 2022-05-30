import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalBox, TowerBox, Tower } from "./Modal.styled";
import dialogFrameImg from '../../../img/common/dialog.png';
import commonAssetsImg from '../../../img/common/CommonAssets.png';
import commonAssets from '../../../data/CommonAssets.json';

const modalRoot =document.querySelector('#modal-root')

export default function Modal() {

  return createPortal(
    <ModalBox
      background = { `url(${dialogFrameImg})`}
    >
      <TowerBox>
        <Tower
          background = { `url(${commonAssetsImg}) ${commonAssets.towerPosition}`}
        >
          tower
        </Tower>
        <Tower
          background = { `url(${commonAssetsImg}) ${commonAssets.magicTowerPosition}`} 
        >
          magicTower
        </Tower>
        <Tower
          background = { `url(${commonAssetsImg}) ${commonAssets.fortificationPosition}`}
        >
          fortification
        </Tower>
      </TowerBox>
    </ModalBox>, modalRoot
  )
}