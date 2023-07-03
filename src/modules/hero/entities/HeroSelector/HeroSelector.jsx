//COMPONENTS
import { Selector, HeroBranch } from "modules/hero/components";
//HOOKS
import useHero from "modules/hero/hooks/useHero";
import useHeroSelectors from "modules/hero/hooks/useHeroSelectors";

const HeroSelector = () => {
  const {
    filter,
    heroesClasessList,
    firstBrunchesList,
    secondBrunchesList,
    thirdBrunchesList,
    handleHeroClass,
    handleHeroBranch,
  } = useHeroSelectors();
  const { hero } = useHero(filter);

  return (
    <div>
      <Selector
        filterKey="class"
        title="Класс героя"
        defaultValue="Класс"
        list={heroesClasessList}
        handleSelector={handleHeroClass}
      />
      <Selector
        filterKey="branch1"
        title="Первая ветка"
        defaultValue="Специальность"
        list={firstBrunchesList}
        handleSelector={handleHeroBranch}
      />
      <Selector
        filterKey="branch2"
        title="Вторая ветка"
        defaultValue="Специальность"
        list={secondBrunchesList}
        handleSelector={handleHeroBranch}
      />
      <Selector
        filterKey="branch3"
        title="Третья ветка"
        defaultValue="Специальность"
        list={thirdBrunchesList}
        handleSelector={handleHeroBranch}
      />
      <div className="flex">
        {hero?.branch1 ? <HeroBranch branch={hero.branch1} /> : null}
        {hero?.branch2 ? <HeroBranch branch={hero.branch2} /> : null}
        {hero?.branch3 ? <HeroBranch branch={hero.branch3} /> : null}
      </div>
    </div>
  );
};

export default HeroSelector;
