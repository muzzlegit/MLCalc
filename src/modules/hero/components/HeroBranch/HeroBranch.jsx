//HOOKS
import useHeroImg from "modules/hero/hooks/useHeroImg";
//STYLEs
import { Container, BranchCell, SkillImg } from "./styles/HeroBranch.styled";

const HeroBranch = ({ branch }) => {
  const { getHeroImage } = useHeroImg();

  return (
    <Container>
      {branch.map(skill => {
        return (
          <BranchCell key={skill.name} background={getHeroImage("heroSkillFrame")}>
            <SkillImg background={getHeroImage(skill.name, "skills")}></SkillImg>
          </BranchCell>
        );
      })}
    </Container>
  );
};

export default HeroBranch;
