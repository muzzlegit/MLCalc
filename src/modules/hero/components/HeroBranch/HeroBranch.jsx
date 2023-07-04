//HOOKS
import useHeroImg from "modules/hero/hooks/useHeroImg";
//STYLEs
import { Container, BranchCell, SkillImg, SkillBtn } from "./styles/HeroBranch.styled";

const HeroBranch = ({ branch, handleSkillLevel }) => {
  const { getHeroImage } = useHeroImg();

  return (
    <Container>
      {branch.map(skill => {
        const { name, level } = skill;
        return (
          <BranchCell key={name} background={getHeroImage("heroSkillFrame")}>
            <SkillImg background={getHeroImage(name, "skills")}></SkillImg>
            <SkillBtn
              onClick={() => {
                handleSkillLevel(skill);
              }}
              backgroundColor={level === 5 ? "wheat" : "green"}
            >
              {level}/5
            </SkillBtn>
          </BranchCell>
        );
      })}
    </Container>
  );
};

export default HeroBranch;
