//HOOKS
import useHeroImg from "modules/hero/hooks/useHeroImg";
//STYLES
import { Container } from "./styles/DallCell.styled";

const DallCell = ({ artefact }) => {
  const { top, left } = artefact;
  const { getHeroImage } = useHeroImg();

  return <Container background={getHeroImage("artefactFrame")} top={top} left={left}></Container>;
};

export default DallCell;
