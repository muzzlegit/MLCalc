import { createPortal } from "react-dom";
//STORE
// import useMainAttacker from '../../data/store/use1MainAttacker';

//COMPONENTS
// import UnitCard from "../../components/UnitCard/UnitCard";
// import HeroBox from "../../components/HeroBox/HeroBox";
// import TowersCard from "../../components/TowersCard/TowersCard";
// import TowersSelector from "../../components/TowersSelector/TowersSelector";
// import HeroDall from "../HeroDoll/HeroDoll";
// import HeroSkill from "../../components/HeroSkill/HeroSkill";
// import SkillsBranch from "../../components/SkillsBranch/SkillsBranch";
// import CloseButton from "../CloseButton";
// import Runes from "../RUNES/runes/Runes";
// import ArtefactSelector from "../ARTEFACTS/elements/ArtefactSelector/ArtefactSelector";
import Sharpening from "../SHARPENING";
//STYLES
import { Backdrop, Center } from "./TestsPanel.styled";


export default function Modal({setToggle}) {
  const modalRoot =document.querySelector(`#modal-root-test`)

  // const player = useMainAttacker(state => state.player);
  // const setunit = useMainAttacker(state => state.setUnit);
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
        <Sharpening />
      </Center>
      </Backdrop>
    </>, modalRoot
  )
}