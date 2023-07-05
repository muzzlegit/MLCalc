//COMPONENTS
import { Selector, HeroBranch } from "modules/hero/components";
//HOOKS
import useHero from "modules/hero/hooks/useHero";
import useHeroImg from "modules/hero/hooks/useHeroImg";
import useHeroSelectors from "modules/hero/hooks/useHeroSelectors";
//STYLES
import { Container, BranchesBox } from "./styles/HeroSelector.styled";

const HeroSelector = () => {
  const { currentHero, handleSkillLevel, handleHero, handleHeroBranch } = useHero();
  const { heroesClasessList, firstBrunchesList, secondBrunchesList, thirdBrunchesList } =
    useHeroSelectors(currentHero);
  const { heroImg } = useHeroImg();
  return (
    <Container background={heroImg}>
      <Selector
        filterKey="class"
        title="Класс героя"
        defaultValue="Класс"
        list={heroesClasessList}
        handleSelector={handleHero}
        value={currentHero?.class}
      />
      <Selector
        filterKey="branch1"
        title="Первая ветка"
        defaultValue="Специальность"
        list={firstBrunchesList}
        handleSelector={handleHeroBranch}
        value={currentHero?.branch1?.[0].heroName}
      />
      <Selector
        filterKey="branch2"
        title="Вторая ветка"
        defaultValue="Специальность"
        list={secondBrunchesList}
        handleSelector={handleHeroBranch}
        value={currentHero?.branch2?.[0].heroName}
      />
      <Selector
        filterKey="branch3"
        title="Третья ветка"
        defaultValue="Специальность"
        list={thirdBrunchesList}
        handleSelector={handleHeroBranch}
        value={currentHero?.branch3?.[0].heroName}
      />
      <BranchesBox>
        {currentHero?.branch1 ? (
          <HeroBranch branch={currentHero.branch1} handleSkillLevel={handleSkillLevel} />
        ) : null}
        {currentHero?.branch2 ? (
          <HeroBranch branch={currentHero.branch2} handleSkillLevel={handleSkillLevel} />
        ) : null}
        {currentHero?.branch3 ? (
          <HeroBranch branch={currentHero.branch3} handleSkillLevel={handleSkillLevel} />
        ) : null}
      </BranchesBox>
    </Container>
  );
};

export default HeroSelector;
