import { useContext } from "react";
//CONTEXT
import PlayerContext from '../../helpers/context';
//COMPONENTS
import Modal from "../Modal/Modal";
import HeroBox from "../HeroBox/HeroBox";
import HeroDoll from "../HeroDoll/HeroDoll";
//HOOKS
import useModalToggle from "../../hooks/useModalToggle";
//STYLES
import { ClickWrap } from "./Hero.styled";

export default function Hero () {
  const player = useContext( PlayerContext );
  const [ showModal, toggleModal ] = useModalToggle( false );

  return (
    <>
      <ClickWrap onClick = { toggleModal } >
        <HeroBox player = { player } />
      </ClickWrap>

      { showModal &&
        <Modal
          level = { 1 }
          toggleModal= { toggleModal }
        >
          <HeroDoll player = { player } toggleModal= { toggleModal } />
        </Modal>
      }
    </>
  )
}