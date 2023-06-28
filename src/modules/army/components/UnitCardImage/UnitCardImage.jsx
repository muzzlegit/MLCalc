//HOOKS
import useUnit from "modules/army/hooks/useUnit";
import useUnitImg from "modules/army/hooks/useUnitImg";
//STYLES
import { CardImage, FrameImg, UnitImg } from "./styles/UnitCardImage.styled";

const UnitCardImage = ({ unitData }) => {
  const { unit, amount, level } = unitData;
  const { changeLevel } = useUnit(unit);
  const { unitImg, unitFrame, unitRaceFrame } = useUnitImg(unit, level);
  return (
    <CardImage id={unit} onClick={changeLevel}>
      <FrameImg
        filter={Number(amount) ? null : "grayscale(50%) brightness(50%)"}
        background={level === 4 ? unitRaceFrame : unitFrame}
      ></FrameImg>
      <UnitImg
        filter={Number(amount) ? null : "grayscale(50%) brightness(50%)"}
        background={unitImg}
      ></UnitImg>
    </CardImage>
  );
};

export default UnitCardImage;
