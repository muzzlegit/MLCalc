import { useState } from "react";
//CONTETX
import usePlayerContext from "shared/hooks/usePlayerContext";
//HOOKS
import useHeroImg from "modules/hero/hooks/useHeroImg";
//STORE
import useStore from "store/useStore";
//STYLES
import { Container, HeroImg, Light } from "./styles/HeroPicture.styled";

const HeroPicture = () => {
  const player = usePlayerContext();
  const hero = useStore(state => state[player].hero);
  const { heroImg, backgroundImg, getHeroImage } = useHeroImg();
  const [isHover, setIshover] = useState(false);

  return (
    <Container
      onMouseEnter={() => {
        setIshover(true);
      }}
      onMouseLeave={() => {
        setIshover(false);
      }}
      background={getHeroImage("heroFrame")}
    >
      <Light isHover={isHover && "isHover"}>
        <HeroImg background={hero ? heroImg : backgroundImg}></HeroImg>
      </Light>
    </Container>
  );
};

export default HeroPicture;
