//COMPONENTS
import Modal from "../../Modal/Modal.jsx";
import AdditionBonuses from "../AdditionBonuses/AdditionBonuses.jsx";
//HOOKS
import useModalToggle from "../../../hooks/useModalToggle.js"
//STYLES
import { ButtonItem } from "./styles/BonusesButton.styled"

export default function BonusesButton({ player, setChecker }) {
  const [ toggle, toggleModal ] = useModalToggle( false );


  return(
    <>
      <ButtonItem
        onClick = { toggleModal }
      >
      Добавить произвольный бонус
      </ButtonItem>
      {  
        toggle &&
        <Modal
          level = { 1 }
          toggleModal= { toggleModal }
        >
          <AdditionBonuses/>
        </Modal>
      }   
    </>
  )
}