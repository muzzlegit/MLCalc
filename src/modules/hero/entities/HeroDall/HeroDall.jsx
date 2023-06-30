//COMPONENTS
import { DallCell } from "modules/hero/components";
//HOOKS
import useHeroDall from "modules/hero/hooks/useHeroDall";
//STYLES
import { Container } from "./styles/HeroDall.styled";

const HeroDall = () => {
  const { dallArtefacts } = useHeroDall();
  return (
    <Container>
      {dallArtefacts.map(artefact => {
        return (
          <li key={artefact.place}>
            <DallCell artefact={artefact} />
          </li>
        );
      })}
    </Container>
  );
};

export default HeroDall;
