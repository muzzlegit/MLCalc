//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//COMPONENTS
import { HeroPicture } from "modules/hero/components";

//STORE
import useStore from "store/useStore";
//STYLES
import { Container, ClickWrapper } from "./styles/HeroBox.styled";

const Hero = ({ toggleModal }) => {
  const player = usePlayerContext();
  const hero = useStore(state => state[player].hero);

  return (
    <>
      <Container boxShadow={hero && "active"}>
        <ClickWrapper onClick={toggleModal}>
          <HeroPicture />
        </ClickWrapper>
      </Container>
    </>
  );
};

export default Hero;
