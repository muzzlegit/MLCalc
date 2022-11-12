import { createPortal } from "react-dom";
//STORE
import useMainAttacker from '../../data/store/useMainAttacker';

//COMPONENTS
import UnitCard from "../../components/UnitCard/UnitCard";
//STYLES
import { Backdrop, Center } from "./TestsPanel.styled";

export default function Modal({setToggle}) {
  const modalRoot =document.querySelector(`#modal-root-test`)

  const player = useMainAttacker(state => state.player);
  const setunit = useMainAttacker(state => state.setUnit);
  const onBackdropClick = (e) => {
    if(e.target.title === 'backdrop') setToggle(false);
  }

  return createPortal(
    <>
      <Backdrop
        title='backdrop'
        onClick={onBackdropClick}
      >
      <Center>
        <UnitCard
          player={player}
          unit={'mage'}
          setUnit={setunit}
        />
      </Center>
      </Backdrop>
    </>, modalRoot
  )
}