import { useMemo } from "react";
//HELPERS
import { getHeroClassesList, getHeroBranchesList } from "shared/helpers";
//DATA
import HEROES from "shared/data/HEROES.json";

const useHeroSelectors = hero => {
  const heroesClasessList = useMemo(() => getHeroClassesList(HEROES), []);

  const firstBrunchesList = useMemo(() => {
    return hero
      ? getHeroBranchesList(HEROES, hero.class).filter(
          name => name !== hero.branch2Name && name !== hero.branch3Name,
        )
      : null;
  }, [hero]);

  const secondBrunchesList = useMemo(() => {
    return hero
      ? getHeroBranchesList(HEROES, hero.class).filter(
          name => name !== hero.branch1Name && name !== hero.branch3Name,
        )
      : null;
  }, [hero]);

  const thirdBrunchesList = useMemo(() => {
    return hero
      ? getHeroBranchesList(HEROES, hero.class).filter(
          name => name !== hero.branch1Name && name !== hero.branch2Name,
        )
      : null;
  }, [hero]);

  return {
    heroesClasessList,
    firstBrunchesList,
    secondBrunchesList,
    thirdBrunchesList,
  };
};

export default useHeroSelectors;
