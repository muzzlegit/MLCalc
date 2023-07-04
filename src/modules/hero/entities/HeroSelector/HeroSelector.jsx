//COMPONENTS
import { Selector, HeroBranch } from "modules/hero/components";
//HOOKS
import useHero from "modules/hero/hooks/useHero";
import useHeroSelectors from "modules/hero/hooks/useHeroSelectors";

const HeroSelector = () => {
  const { currentHero, handleSkillLevel, handleHero, handleHeroBranch } = useHero();
  const { heroesClasessList, firstBrunchesList, secondBrunchesList, thirdBrunchesList } =
    useHeroSelectors(currentHero);

  return (
    <div>
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
      <div className="flex">
        {currentHero?.branch1 ? (
          <HeroBranch branch={currentHero.branch1} handleSkillLevel={handleSkillLevel} />
        ) : null}
        {currentHero?.branch2 ? (
          <HeroBranch branch={currentHero.branch2} handleSkillLevel={handleSkillLevel} />
        ) : null}
        {currentHero?.branch3 ? (
          <HeroBranch branch={currentHero.branch3} handleSkillLevel={handleSkillLevel} />
        ) : null}
      </div>
    </div>
  );
};

export default HeroSelector;
