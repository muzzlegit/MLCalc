//COMPONENTS
import HeroPicture from '../HeroPicture';
// import Modal from "../../Modal/Modal";
// import HeroDoll from "../../HeroDoll/HeroDoll";
//HOOKS
import usePlayerStoreData from '../../../hooks/usePlayerStoreData';
import useModalToggle from "../../../hooks/useModalToggle";
//STYLES
import { ClickWrap } from "./styles/HeroSquadClickWrap.styled";

export default function HeroSquadClickWrap({ player }) {
  const playerData = usePlayerStoreData( player );
  const [ showModal, toggleModal ] = useModalToggle( false );

  const { hero } = playerData;
  return (
    <>
      <ClickWrap onClick = { toggleModal } >
        <HeroPicture
          player = { player }
          hero = { hero }
        />
      </ClickWrap>

      {/* { showModal &&
        <Modal
          level = { 1 }
          toggleModal= { toggleModal }
        >
          <HeroDoll player = { player } toggleModal= { toggleModal } />
        </Modal>
      } */}
    </>
  )
}