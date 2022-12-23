//STYLES
import useCommonImg from "../../hooks/useCommonImg";
import { ButtonBox, ButtonImg } from "./CloseButton.styled";

export default function CloseButton({ closeButtonFn, top, left }) {
  const buttonImg = useCommonImg( 'closeWindowButton' );


  return (
    <ButtonBox 
      top = { top }
      left = { left }
      onClick = { closeButtonFn }
    >
      <ButtonImg background= { buttonImg }>

      </ButtonImg>
    </ButtonBox>
  )
}