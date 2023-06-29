//COMPONENTS
import { HeroPicture } from "modules/hero/components";
//STYLES
import { Container, ClickWrapper } from "./styles/HeroBox.styled";

const HeroBox = () => {
  return (
    <Container>
      <ClickWrapper
        onClick={() => {
          console.log("click");
        }}
      >
        <HeroPicture />
      </ClickWrapper>
    </Container>
  );
};

export default HeroBox;
